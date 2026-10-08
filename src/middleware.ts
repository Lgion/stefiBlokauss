import { clerkMiddleware, createClerkClient } from '@clerk/astro/server';

export const onRequest = clerkMiddleware(async (auth, context, next) => {
  const authData = auth();
  const userId = authData.userId;

  // Retrieve demo role cookie if set (for immediate dev/testing of all 4 roles)
  const roleCookie = context.cookies.get('hy_user_role')?.value;
  const adminBypassCookie = context.cookies.get('hy_admin_bypass')?.value;

  let currentRole: 'super admin' | 'vendeurs' | 'vip' | 'public' = 'public';

  if (roleCookie && ['super admin', 'vendeurs', 'vip', 'public'].includes(roleCookie)) {
    currentRole = roleCookie as any;
  } else if (userId) {
    try {
      // Check metadata in session claims
      const claims = authData.sessionClaims as any;
      const metaRole = claims?.metadata?.role || claims?.public_metadata?.role || claims?.publicMetadata?.role;
      if (metaRole && ['super admin', 'vendeurs', 'vip', 'public'].includes(metaRole)) {
        currentRole = metaRole;
      } else {
        // Default connected user role is vip or public
        currentRole = 'vip';
      }
    } catch {
      currentRole = 'vip';
    }
  }

  // Set role in locals for templates and API routes
  context.locals.currentRole = currentRole;
  context.locals.userId = userId;
  context.locals.isSignedIn = !!userId;

  // Check admin route protection
  const pathname = context.url.pathname;
  if (pathname.startsWith('/admin')) {
    // Only super admin and vendeurs can access admin section
    const hasAdminAccess = currentRole === 'super admin' || currentRole === 'vendeurs' || adminBypassCookie === 'active';
    
    // Specifically /admin/users and /admin/settings are reserved for super admin
    if ((pathname.startsWith('/admin/users') || pathname.startsWith('/admin/settings')) && currentRole !== 'super admin' && adminBypassCookie !== 'active') {
      return context.redirect('/admin?forbidden=super_admin_only');
    }

    if (!hasAdminAccess) {
      return context.redirect(`/?access_denied=admin&required_role=admin`);
    }
  }

  return next();
});
