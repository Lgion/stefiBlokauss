/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    currentRole: 'super admin' | 'vendeurs' | 'vip' | 'public';
    userId?: string | null;
    isSignedIn: boolean;
  }
}
