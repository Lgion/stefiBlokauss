import { C as unescapeHTML, E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as defineScriptVars, h as addAttribute, l as renderSlot, m as renderHead, n as spreadAttributes, o as Fragment, p as maybeRenderHead, t as mergeSlots } from "./server_mkHPDfNz.mjs";
import { n as renderScript, t as $$RoleSwitcher } from "./RoleSwitcher_C2f3FUy7.mjs";
import "./compiler_BNxWY2cd.mjs";
import { t as generateSafeId } from "./internal_zSYa1Sbl.mjs";
//#region node_modules/@clerk/astro/components/control/ShowCSR.astro
createAstro("https://astro.build");
var $$ShowCSR = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ShowCSR;
	const { when, class: className } = Astro.props;
	const isStringWhen = typeof when === "string";
	const whenCondition = isStringWhen ? when : null;
	const role = !isStringWhen && typeof when === "object" ? when.role : void 0;
	const permission = !isStringWhen && typeof when === "object" ? when.permission : void 0;
	const feature = !isStringWhen && typeof when === "object" ? when.feature : void 0;
	const plan = !isStringWhen && typeof when === "object" ? when.plan : void 0;
	return renderTemplate`${renderComponent($$result, "clerk-show", "clerk-show", {
		"data-when": whenCondition,
		"data-role": role,
		"data-permission": permission,
		"data-feature": feature,
		"data-plan": plan,
		"class": className
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div hidden data-clerk-control-slot-default>${renderSlot($$result, $$slots["default"])}</div><div hidden data-clerk-control-slot-fallback>${renderSlot($$result, $$slots["fallback"])}</div>` })}${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/control/ShowCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/control/ShowCSR.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/control/ShowSSR.astro
createAstro("https://astro.build");
var $$ShowSSR = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ShowSSR;
	const { has, userId } = Astro.locals.auth();
	const { when } = Astro.props;
	const showContent = (() => {
		if (when === "signed-in") return !!userId;
		if (when === "signed-out") return !userId;
		if (typeof when === "function") return !!userId && when(has);
		if (typeof when === "object" && when !== null) {
			if (!userId) return false;
			return has(when);
		}
		return !!userId;
	})();
	const hasShowFallback = Astro.slots.has("show-fallback");
	return renderTemplate`${showContent ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : hasShowFallback ? renderTemplate`${renderSlot($$result, $$slots["show-fallback"])}` : renderTemplate`${renderSlot($$result, $$slots["fallback"])}`}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/control/ShowSSR.astro", void 0);
//#endregion
//#region \0virtual:@clerk/astro/config
function isStaticOutput(forceStatic) {
	if (forceStatic !== void 0) return forceStatic;
	return false;
}
//#endregion
//#region node_modules/@clerk/astro/components/control/Show.astro
createAstro("https://astro.build");
var $$Show = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Show;
	const { isStatic, when, ...rest } = Astro.props;
	if (typeof when === "undefined") throw new Error("@clerk/astro: <Show /> requires a `when` prop.");
	const props = {
		...rest,
		when
	};
	const ShowComponent = (isStatic !== void 0 ? isStaticOutput(isStatic) : !Astro.locals?.auth) ? $$ShowCSR : $$ShowSSR;
	const hasShowFallback = Astro.slots.has("show-fallback");
	return renderTemplate`${renderComponent($$result, "ShowComponent", ShowComponent, { ...props }, mergeSlots({ "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` }, hasShowFallback ? { "show-fallback": ($$result) => renderTemplate`${renderSlot($$result, $$slots["show-fallback"])}` } : { "fallback": ($$result) => renderTemplate`${renderSlot($$result, $$slots["fallback"])}` }))}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/control/Show.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/unstyled/utils.ts
/**
* This function is used when an element is passed as a default slot and we need
* to add an attribute to it so that we can reference it in a click listener.
*/
function addUnstyledAttributeToFirstTag(html, attributeValue) {
	return html.replace(/(<[^>]+)>/, `$1 data-clerk-unstyled-id="${attributeValue}">`);
}
//#endregion
//#region node_modules/@clerk/astro/components/unstyled/SignInButton.astro
createAstro("https://astro.build");
var $$SignInButton = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SignInButton;
	const safeId = generateSafeId();
	const { asChild, forceRedirectUrl, fallbackRedirectUrl, signUpFallbackRedirectUrl, signUpForceRedirectUrl, mode, ...props } = Astro.props;
	const signInOptions = {
		forceRedirectUrl,
		fallbackRedirectUrl,
		signUpFallbackRedirectUrl,
		signUpForceRedirectUrl
	};
	let htmlElement = "";
	if (asChild) {
		htmlElement = await Astro.slots.render("default");
		htmlElement = addUnstyledAttributeToFirstTag(htmlElement, safeId);
	}
	return renderTemplate`${asChild ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(htmlElement)}` })}` : renderTemplate`${maybeRenderHead($$result)}<button${spreadAttributes(props)}${addAttribute(safeId, "data-clerk-unstyled-id")}>${renderSlot($$result, $$slots["default"], renderTemplate`Sign in`)}</button>`}<script>(function(){${defineScriptVars({
		props,
		signInOptions,
		mode,
		safeId
	})}
  const btn = document.querySelector(\`[data-clerk-unstyled-id="\${safeId}"]\`);

  btn.addEventListener('click', () => {
    const clerk = window.Clerk;

    if (mode === 'modal') {
      return clerk.openSignIn({ ...signInOptions, appearance: props.appearance });
    }

    return clerk.redirectToSignIn({
      ...signInOptions,
      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,
      signInForceRedirectUrl: signInOptions.forceRedirectUrl,
    });
  });
})();<\/script>`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/unstyled/SignInButton.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/InternalUIComponentRenderer.astro
createAstro("https://astro.build");
var $$InternalUIComponentRenderer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$InternalUIComponentRenderer;
	const { component, id, ...props } = Astro.props;
	const safeId = id || generateSafeId();
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`clerk-${component}-${safeId}`, "data-clerk-id")}></div><script>(function(){${defineScriptVars({
		props,
		component,
		safeId
	})}
  /**
   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.
   * The above is handled by \`mountAllClerkAstroJSComponents\`.
   */
  const setOrCreatePropMap = ({ category, id, props }) => {
    if (!window.__astro_clerk_component_props) {
      window.__astro_clerk_component_props = new Map();
    }

    if (!window.__astro_clerk_component_props.has(category)) {
      const _ = new Map();
      _.set(id, props);
      window.__astro_clerk_component_props.set(category, _);
    }

    window.__astro_clerk_component_props.get(category)?.set(id, props);
  };

  setOrCreatePropMap({
    category: component,
    id: \`clerk-\${component}-\${safeId}\`,
    props,
  });
})();<\/script>`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/interactive/InternalUIComponentRenderer.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro
createAstro("https://astro.build");
var $$UserButton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$UserButton;
	return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, {
		...Astro.props,
		"component": "user-button"
	})}${renderSlot($$result, $$slots["default"])}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro
createAstro("https://astro.build");
var $$MenuItemRenderer = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$MenuItemRenderer;
	const { label, href, open, clickIdentifier, parent } = Astro2.props;
	let labelIcon = "";
	if (Astro2.slots.has("label-icon")) labelIcon = await Astro2.slots.render("label-icon");
	return renderTemplate`<script>(function(){${defineScriptVars({
		label,
		href,
		open,
		clickIdentifier,
		labelIcon,
		isDevMode: false,
		parent
	})}
  const parentElement = document.currentScript.parentElement;

  // We used a web component in the \`<UserButton.MenuItems>\` component.
  const hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';
  if (!hasParentMenuItem) {
    if (isDevMode) {
      throw new Error(
        \`Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.\`,
      );
    }
  } else {
    // Get the user button map from window that we set in the \`<InternalUIComponentRenderer />\`.
    const userButtonComponentMap = window.__astro_clerk_component_props?.get('user-button');

    let userButton;
    if (parent) {
      userButton = document.querySelector(\`[data-clerk-id="clerk-user-button-\${parent}"]\`);
    } else {
      userButton = document.querySelector('[data-clerk-id^="clerk-user-button"]');
    }

    const safeId = userButton?.getAttribute('data-clerk-id');
    if (userButtonComponentMap && safeId) {
      const currentOptions = userButtonComponentMap.get(safeId);

      const reorderItemsLabels = ['manageAccount', 'signOut'];
      const isReorderItem = reorderItemsLabels.includes(label);

      let newMenuItem = {
        label,
      };

      if (!isReorderItem) {
        newMenuItem = {
          ...newMenuItem,
          mountIcon: el => {
            el.innerHTML = labelIcon;
          },
          unmountIcon: () => {
            /* What to clean up? */
          },
        };

        if (href) {
          newMenuItem.href = href;
        } else if (open) {
          newMenuItem.open = open.startsWith('/') ? open : \`/\${open}\`;
        } else if (clickIdentifier) {
          const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });
          newMenuItem.onClick = () => {
            document.dispatchEvent(clickEvent);
          };
        }
      }

      userButtonComponentMap.set(safeId, {
        ...currentOptions,
        customMenuItems: [...(currentOptions?.customMenuItems ?? []), newMenuItem],
      });
    }
  }
})();<\/script>`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro
createAstro("https://astro.build");
var $$UserButtonLink = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$UserButtonLink;
	const { label, href, parent } = Astro.props;
	return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, {
		"label": label,
		"href": href,
		"parent": parent
	}, { "label-icon": ($$result) => renderTemplate`${renderSlot($$result, $$slots["label-icon"])}` })}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro
createAstro("https://astro.build");
var $$UserButtonAction = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$UserButtonAction;
	const { label, open, clickIdentifier, parent } = Astro.props;
	return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, {
		"label": label,
		"open": open,
		"clickIdentifier": clickIdentifier,
		"parent": parent
	}, { "label-icon": ($$result) => renderTemplate`${renderSlot($$result, $$slots["label-icon"])}` })}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro
var $$UserButtonMenuItems = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "clerk-user-button-menu-items", "clerk-user-button-menu-items", {}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro
createAstro("https://astro.build");
var $$UserButtonUserProfilePage = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$UserButtonUserProfilePage;
	const { url, label, parent } = Astro.props;
	let labelIcon = "";
	let content = "";
	if (Astro.slots.has("label-icon")) labelIcon = await Astro.slots.render("label-icon");
	if (Astro.slots.has("default")) content = await Astro.slots.render("default");
	return renderTemplate`<script>(function(){${defineScriptVars({
		url,
		label,
		content,
		labelIcon,
		parent
	})}
  // Get the user button map from window that we set in the \`<InternalUIComponentRenderer />\`.
  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');

  let userButton;
  if (parent) {
    userButton = document.querySelector(\`[data-clerk-id="clerk-user-button-\${parent}"]\`);
  } else {
    userButton = document.querySelector('[data-clerk-id^="clerk-user-button"]');
  }

  const safeId = userButton.getAttribute('data-clerk-id');
  const currentOptions = userButtonComponentMap.get(safeId);

  const newCustomPage = {
    label,
    url,
    mountIcon: el => {
      el.innerHTML = labelIcon;
    },
    unmountIcon: () => {
      /* What to clean up? */
    },
    mount: el => {
      el.innerHTML = content;
    },
    unmount: () => {
      /* What to clean up? */
    },
  };

  userButtonComponentMap.set(safeId, {
    ...currentOptions,
    userProfileProps: {
      customPages: [...(currentOptions?.userProfileProps?.customPages ?? []), newCustomPage],
    },
  });
})();<\/script>`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro", void 0);
//#endregion
//#region node_modules/@clerk/astro/components/interactive/UserButton/index.ts
var UserButton = Object.assign($$UserButton, {
	MenuItems: $$UserButtonMenuItems,
	Link: $$UserButtonLink,
	Action: $$UserButtonAction,
	UserProfilePage: $$UserButtonUserProfilePage
});
//#endregion
//#region src/components/Header.astro
createAstro("https://astro.build");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const { currentRole = "public" } = Astro.props;
	const isAdminOrVendor = currentRole === "super admin" || currentRole === "vendeurs";
	return renderTemplate`${maybeRenderHead($$result)}<header class="c-header"><div class="l-container c-header__container"><div class="c-header__brand-group"><a href="/" class="c-header__brand"><span class="c-header__logo">HIGH <span class="c-header__logo-accent">YA !</span></span><span class="c-header__slogan">Énergie Sauvage</span></a></div><nav class="c-header__nav"><a href="#viewer" class="c-header__link">Configurateur 3D</a><a href="#editions" class="c-header__link">Les Éditions</a><a href="#story" class="c-header__link">L'Expérience</a>${currentRole === "vip" && renderTemplate`<a href="#editions" class="c-header__link c-header__link--vip"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>Avantages VIP (-20%)</a>`}${isAdminOrVendor && renderTemplate`<a href="/admin" class="c-header__link c-header__link--active" style="color: #ff5277;">Espace Admin</a>`}</nav><div class="c-header__actions"><!-- Role Badge --><span${addAttribute(`c-badge c-badge--${currentRole === "super admin" ? "super-admin" : currentRole === "vendeurs" ? "vendeur" : currentRole}`, "class")}>${currentRole === "super admin" ? "Super Admin" : currentRole === "vendeurs" ? "Vendeur" : currentRole === "vip" ? "VIP Club" : "Public"}</span><!-- Active Currency Indicator --><span class="c-header__currency-badge" id="header-currency-badge">XOF</span><!-- Shopping Cart Button --><button class="c-header__cart-btn" id="open-cart-btn" aria-label="Ouvrir le panier"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg><span class="c-header__cart-btn-count" id="header-cart-count">0</span></button><!-- Admin Direct Link for authorized roles or Sign In -->${isAdminOrVendor ? renderTemplate`<a href="/admin" class="c-header__admin-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg><span>Dashboard</span></a>` : renderTemplate`${renderComponent($$result, "Show", $$Show, { "when": "signed-out" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "SignInButton", $$SignInButton, { "mode": "modal" }, { "default": ($$result) => renderTemplate`<button class="c-header__auth-btn">Connexion</button>` })}` })}`}${renderComponent($$result, "Show", $$Show, { "when": "signed-in" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "UserButton", UserButton, {})}` })}</div></div></header>${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/Header.astro", void 0);
//#endregion
//#region src/components/CartDrawer.astro
var $$CartDrawer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<aside class="c-cart-drawer" id="cart-drawer" aria-label="Panier d'achat"><div class="c-cart-drawer__header"><h2 class="c-cart-drawer__title"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg><span>Votre Panier</span></h2><button class="c-cart-drawer__close" id="close-cart-btn" aria-label="Fermer le panier"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div><div class="c-cart-drawer__items" id="cart-items-container"><!-- Populated dynamically --></div><div class="c-cart-drawer__footer" id="cart-footer"><div class="c-cart-drawer__subtotal-row"><span>Sous-total</span><span id="cart-subtotal">0 FCFA</span></div><div class="c-cart-drawer__vip-row" id="cart-vip-discount-row" style="display: none;"><span>Remise Membre VIP (-20%)</span><span id="cart-vip-discount">-0 FCFA</span></div><div class="c-cart-drawer__total-row"><span>Total</span><span id="cart-total">0 FCFA</span></div><button class="c-cart-drawer__btn-checkout" id="cart-proceed-checkout-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg><span>Tunnel de Paiement Wave</span></button></div></aside>${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/CartDrawer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/CartDrawer.astro", void 0);
//#endregion
//#region src/components/ProductModal.astro
var $$ProductModal = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<dialog class="c-product-modal" id="product-detail-modal"><div class="c-product-modal__dialog"><button class="c-product-modal__close" id="close-product-modal-btn" aria-label="Fermer la modale"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><!-- Visual Left Column --><div class="c-product-modal__visual"><img src="/media/high-ya-hero.jpeg" alt="HIGH YA ! Pack" class="c-product-modal__image" id="modal-product-img"><button class="c-product-modal__view-3d-btn" id="modal-focus-3d-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg><span>Observer dans le configurateur 3D</span></button></div><!-- Product Details Content --><div class="c-product-modal__content"><div class="c-product-modal__header"><span class="c-badge c-badge--wave" id="modal-product-badge">Édition Spéciale</span><h2 class="c-product-modal__title" id="modal-product-name">HIGH YA ! Sauvage Bronze</h2><span class="c-product-modal__slogan" id="modal-product-slogan">ÉNERGIE SAUVAGE</span></div><p class="c-product-modal__description" id="modal-product-desc">Une intensité brute née des terroirs sauvages. Flanc en carbone strié et dorure à chaud bronze. Un tirage riche aux arômes corsés et boisés.</p><!-- Flavor Notes Tags --><div class="c-product-modal__format"><span class="c-product-modal__format-label">Profil Aromatique & Terpènes</span><div class="c-product-card__specs-row" id="modal-flavor-tags"><!-- Populated dynamically --></div></div><!-- Technical Specs --><div class="c-product-modal__specs-grid"><div class="c-product-modal__spec-item"><span class="c-product-modal__spec-item-label">Taux Nicotine</span><span class="c-product-modal__spec-item-val" id="modal-spec-nicotine">0.8 mg</span></div><div class="c-product-modal__spec-item"><span class="c-product-modal__spec-item-label">Type de Filtre</span><span class="c-product-modal__spec-item-val" id="modal-spec-filter">Triple Charbon Actif</span></div><div class="c-product-modal__spec-item"><span class="c-product-modal__spec-item-label">Sélection Tabac</span><span class="c-product-modal__spec-item-val" id="modal-spec-origin">Grand Cru Bio</span></div><div class="c-product-modal__spec-item"><span class="c-product-modal__spec-item-label">Normes & Sécurité</span><span class="c-product-modal__spec-item-val">Scellé Holographique</span></div></div><!-- Format Selection: Single Pack (20 cigs) vs Carton (10 packs = 200 cigs) --><div class="c-product-modal__format"><span class="c-product-modal__format-label">Conditionnement</span><div class="c-product-modal__format-options"><button class="c-product-modal__format-btn c-product-modal__format-btn--active" id="modal-format-pack" data-format="pack"><span class="c-product-modal__format-btn-title">Paquet Unité</span><span class="c-product-modal__format-btn-sub">20 cigarettes</span></button><button class="c-product-modal__format-btn" id="modal-format-carton" data-format="carton"><span class="c-product-modal__format-btn-title">Cartouche (x10)</span><span class="c-product-modal__format-btn-sub">200 cigs • Économie 10%</span></button></div></div><!-- Footer / Price / CTAs --><div class="c-product-modal__footer"><div class="c-product-modal__price-row"><div><span class="c-product-modal__total-price" id="modal-display-price">3 500 FCFA</span></div><span class="c-product-modal__vip-callout"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>VIP: -20% au paiement</span></div><div class="c-product-modal__cta-group"><button class="c-product-modal__btn-cart" id="modal-add-to-cart-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg><span>Ajouter au Panier</span></button><button class="c-product-modal__btn-buy" id="modal-direct-buy-btn"><span>Acheter via Wave</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></button></div></div></div></div></dialog>${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/ProductModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/ProductModal.astro", void 0);
//#endregion
//#region src/components/CheckoutModal.astro
var $$CheckoutModal = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<dialog class="c-checkout-modal" id="checkout-funnel-modal"><div class="c-checkout-modal__dialog"><button class="c-checkout-modal__close" id="close-checkout-modal-btn" aria-label="Fermer la commande"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><!-- Stepper Indicator --><div class="c-checkout-modal__stepper"><div class="c-checkout-modal__step c-checkout-modal__step--active" id="checkout-step-nav-1"><span class="c-checkout-modal__step-num">1</span><span class="c-checkout-modal__step-title">Livraison</span></div><div class="c-checkout-modal__step" id="checkout-step-nav-2"><span class="c-checkout-modal__step-num">2</span><span class="c-checkout-modal__step-title">Paiement Wave</span></div><div class="c-checkout-modal__step" id="checkout-step-nav-3"><span class="c-checkout-modal__step-num">3</span><span class="c-checkout-modal__step-title">Confirmation</span></div></div><!-- Step 1: Customer Details & Shipping --><div class="c-checkout-modal__step-content" id="checkout-step-panel-1"><h3 style="font-size: 1.25rem; font-weight: 900; text-transform: uppercase; margin-bottom: var(--hy-space-md); color: #fff;">Coordonnées & Adresse de Livraison</h3><div class="c-checkout-modal__form-grid"><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="ship-name">Nom Complet *</label><input type="text" id="ship-name" class="c-checkout-modal__field-input" placeholder="Moussa Ndiaye" required></div><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="ship-phone">Téléphone Mobile (Wave / WhatsApp) *</label><input type="tel" id="ship-phone" class="c-checkout-modal__field-input" placeholder="+221 77 000 00 00" required></div><div class="c-checkout-modal__field c-checkout-modal__field--full"><label class="c-checkout-modal__field-label" for="ship-email">Email (pour le reçu)</label><input type="email" id="ship-email" class="c-checkout-modal__field-input" placeholder="moussa@example.com"></div><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="ship-country">Pays / Zone</label><select id="ship-country" class="c-checkout-modal__field-input"><option value="SN">Sénégal (Dakar, Thiès, Mbour)</option><option value="CI">Côte d'Ivoire (Abidjan, Yamoussoukro)</option><option value="FR">France / Europe (Paris, Lyon)</option><option value="INT">International (Livraison express DHL)</option></select></div><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="ship-city">Ville / Quartier *</label><input type="text" id="ship-city" class="c-checkout-modal__field-input" placeholder="Dakar - Almadies" required></div><div class="c-checkout-modal__field c-checkout-modal__field--full"><label class="c-checkout-modal__field-label" for="ship-address">Adresse précise ou repère de livraison</label><input type="text" id="ship-address" class="c-checkout-modal__field-input" placeholder="Rue 12, en face de la pharmacie"></div></div><div class="c-checkout-modal__footer-nav"><span></span><button class="c-checkout-modal__btn-next" id="checkout-goto-step2"><span>Continuer vers le Paiement</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></button></div></div><!-- Step 2: Payment Selector (Wave Featured) --><div class="c-checkout-modal__step-content" id="checkout-step-panel-2" style="display: none;"><h3 style="font-size: 1.25rem; font-weight: 900; text-transform: uppercase; margin-bottom: var(--hy-space-md); color: #fff;">Mode de Paiement Sécurisé</h3><div class="c-checkout-modal__payment-methods"><!-- WAVE FEATURED CARD --><label class="c-checkout-modal__method-card c-checkout-modal__method-card--wave c-checkout-modal__method-card--active" id="method-card-wave"><input type="radio" name="payment_method" value="wave" checked class="c-checkout-modal__method-card-radio"><img src="/media/wave-logo.svg" alt="Wave" style="height: 28px; width: auto; border-radius: 4px;"><div class="c-checkout-modal__method-card-info"><span class="c-checkout-modal__method-card-title">Wave Mobile Money<span class="c-checkout-modal__method-card-badge">Instantané • 0% frais</span></span><span class="c-checkout-modal__method-card-desc">Paiement direct en 1 clic par QR Code ou notification push sur votre app Wave.</span></div></label><!-- ORANGE MONEY --><label class="c-checkout-modal__method-card" id="method-card-om"><input type="radio" name="payment_method" value="orange_money" class="c-checkout-modal__method-card-radio"><div class="c-checkout-modal__method-card-info"><span class="c-checkout-modal__method-card-title">Orange Money</span><span class="c-checkout-modal__method-card-desc">Code marchand ou validation USSD #144#</span></div></label><!-- CARTE BANCAIRE --><label class="c-checkout-modal__method-card" id="method-card-card"><input type="radio" name="payment_method" value="card" class="c-checkout-modal__method-card-radio"><div class="c-checkout-modal__method-card-info"><span class="c-checkout-modal__method-card-title">Carte Bancaire (Visa / Mastercard)</span><span class="c-checkout-modal__method-card-desc">Paiement international sécurisé 3D-Secure</span></div></label><!-- PAIEMENT LIVRAISON --><label class="c-checkout-modal__method-card" id="method-card-cod"><input type="radio" name="payment_method" value="cod" class="c-checkout-modal__method-card-radio"><div class="c-checkout-modal__method-card-info"><span class="c-checkout-modal__method-card-title">Paiement à la livraison</span><span class="c-checkout-modal__method-card-desc">Règlement en espèces au coursier à la réception</span></div></label></div><!-- Wave Interactive Box --><div class="c-checkout-modal__wave-box" id="wave-interactive-box"><div class="c-checkout-modal__wave-qr" id="wave-qr-container"><!-- Dynamic QR code injected here --></div><p class="c-checkout-modal__wave-instruction">Scannez ce QR Code avec votre application <strong>Wave</strong> ou confirmez ci-dessous pour déclencher la validation automatique sur le numéro : <br><strong id="wave-summary-phone" style="font-size: 1.1rem; color: #4ac7ff;">+221 77 000 00 00</strong></p><div style="font-size: 1.2rem; font-weight: 900; color: #fff;">Montant à régler : <span id="wave-summary-amount" style="color: var(--hy-color-gold-bright);">0 FCFA</span></div></div><div class="c-checkout-modal__footer-nav"><button class="c-checkout-modal__btn-prev" id="checkout-goto-step1">← Retour</button><button class="c-checkout-modal__btn-wave-pay" id="checkout-confirm-payment-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span id="payment-action-text">Valider et Payer avec Wave</span></button></div></div><!-- Step 3: Confirmation & Receipt --><div class="c-checkout-modal__step-content" id="checkout-step-panel-3" style="display: none;"><div class="c-checkout-modal__success-box"><div class="c-checkout-modal__success-icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div><h3 style="font-size: 1.8rem; font-weight: 900; text-transform: uppercase; color: #ffffff;">Commande Confirmée !</h3><p style="color: var(--hy-color-muted); max-width: 480px; line-height: 1.5;">Votre paiement a été validé avec succès. Votre colis d’éditions <strong>HIGH YA !</strong> est préparé en priorité par nos équipes.</p><div class="c-checkout-modal__order-ref" id="order-success-reference">#HY-8492</div><div style="display: flex; gap: var(--hy-space-sm); flex-wrap: wrap; margin-top: var(--hy-space-md);"><a href="#" id="order-whatsapp-btn" target="_blank" class="c-floating-contact__btn--whatsapp" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.4rem; border-radius: var(--hy-radius-md); font-weight: 800; text-transform: uppercase; font-size: 0.85rem; color: #fff;"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"></path></svg><span>Suivi direct sur WhatsApp</span></a><button class="c-product-card__btn-details" id="order-close-success-btn">Retour à l'accueil</button></div></div></div></div></dialog>${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/CheckoutModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/CheckoutModal.astro", void 0);
//#endregion
//#region src/components/FloatingContact.astro
createAstro("https://astro.build");
var $$FloatingContact = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FloatingContact;
	const { phoneNumber = "+221770000000", whatsappNumber = "221770000000" } = Astro.props;
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour HIGH YA ! Je souhaite commander des cigarettes ou obtenir des informations.")}`;
	return renderTemplate`${maybeRenderHead($$result)}<div class="c-floating-contact" id="floating-contact-widget"><div class="c-floating-contact__group"><!-- WhatsApp Direct Chat Button --><a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="c-floating-contact__item" title="Commander sur WhatsApp"><span class="c-floating-contact__label">WhatsApp Direct</span><div class="c-floating-contact__btn c-floating-contact__btn--whatsapp"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"></path></svg></div></a><!-- Direct Phone Call Button --><a${addAttribute(`tel:${phoneNumber}`, "href")} class="c-floating-contact__item" title="Appeler directement un vendeur"><span class="c-floating-contact__label">Appel Direct Vendeur</span><div class="c-floating-contact__btn c-floating-contact__btn--phone"><span class="c-floating-contact__pulse-ring"></span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div></a></div></div>`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/FloatingContact.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="c-footer"><div class="l-container"><div class="c-footer__grid"><div class="c-footer__brand"><span class="c-footer__logo">HIGH YA !</span><p class="c-footer__tagline">L'énergie sauvage nouvelle génération. Objets d'exception & tabac d'orfèvre.</p><div class="c-footer__warning-box">⚠️ Vente strictement interdite aux mineurs de moins de 18 ans. Fumer nuit gravement à votre santé.</div></div><div class="c-footer__col"><h4 class="c-footer__col-title">Navigation</h4><div class="c-footer__links"><a href="#viewer" class="c-footer__link">Configurateur 3D</a><a href="#editions" class="c-footer__link">Éditions 2026</a><a href="#story" class="c-footer__link">Manifesto Sauvage</a><a href="/admin" class="c-footer__link">Portail Collaborateur</a></div></div><div class="c-footer__col"><h4 class="c-footer__col-title">Paiement & Support</h4><div class="c-footer__links"><span class="c-footer__link" style="display: flex; align-items: center; gap: 0.4rem;"><img src="/media/wave-logo.svg" alt="Wave" style="height: 18px; width: auto; border-radius: 2px;">Wave Sénégal & Côte d'Ivoire</span><span class="c-footer__link">Orange Money & Moov</span><span class="c-footer__link">Service client WhatsApp 24/7</span><span class="c-footer__link">Expédition discrète & scellée</span></div></div></div><div class="c-footer__bottom"><p class="c-footer__copyright">&copy; 2026 HIGH YA ! — Tous droits réservés. Marque déposée internationale.</p><div class="c-footer__payment-badges"><span class="c-badge c-badge--wave">Wave Officiel</span><span class="c-badge c-badge--vip">Club VIP Certifié</span></div></div></div></footer>`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/Footer.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "HIGH YA ! — Énergie Sauvage | Cigarettes Streetwear Avant-Garde", description = "Découvrez HIGH YA !, la première marque de cigarettes Streetwear Avant-Garde. Boîtier 3D interactif, filtres or & platine, commande directe via Wave Mobile Money." } = Astro.props;
	const currentRole = Astro.locals.currentRole || "public";
	return renderTemplate`<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- OpenGraph / Social --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="/media/high-ya-hero.jpeg"><meta property="og:type" content="website"><!-- Typography --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@700;800;900&display=swap" rel="stylesheet">${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, { "currentRole": currentRole })}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}<!-- Modals & Global Widgets -->${renderComponent($$result, "CartDrawer", $$CartDrawer, {})}${renderComponent($$result, "ProductModal", $$ProductModal, {})}${renderComponent($$result, "CheckoutModal", $$CheckoutModal, {})}${renderComponent($$result, "FloatingContact", $$FloatingContact, {})}${renderComponent($$result, "RoleSwitcher", $$RoleSwitcher, { "currentRole": currentRole })}</body></html>`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/layouts/Layout.astro", void 0);
//#endregion
export { $$InternalUIComponentRenderer as n, $$Layout as t };
