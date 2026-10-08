import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, l as renderSlot, m as renderHead } from "./server_mkHPDfNz.mjs";
import { t as $$RoleSwitcher } from "./RoleSwitcher_C2f3FUy7.mjs";
import "./compiler_BNxWY2cd.mjs";
//#region src/layouts/AdminLayout.astro
createAstro("https://astro.build");
var $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AdminLayout;
	const { title = "Administration — HIGH YA !", activeTab = "overview" } = Astro.props;
	const currentRole = Astro.locals.currentRole || "super admin";
	const isSuperAdmin = currentRole === "super admin";
	return renderTemplate`<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700&family=Syne:wght@700;800;900&display=swap" rel="stylesheet">${renderHead($$result)}</head><body class="c-admin"><header class="c-admin__header"><div class="c-admin__brand-group"><a href="/admin" class="c-admin__logo">HIGH YA ! <span style="color: var(--hy-color-gold); font-size: 0.9rem; margin-left: 4px;">// ADMIN</span></a><span${addAttribute(`c-badge c-badge--${isSuperAdmin ? "super-admin" : "vendeur"}`, "class")}>${isSuperAdmin ? "Super Admin" : "Vendeur Commercial"}</span></div><nav class="c-admin__nav"><a href="/admin"${addAttribute(`c-admin__nav-link ${activeTab === "overview" ? "c-admin__nav-link--active" : ""}`, "class")}>Vue d'ensemble</a><a href="/admin/orders"${addAttribute(`c-admin__nav-link ${activeTab === "orders" ? "c-admin__nav-link--active" : ""}`, "class")}>Commandes Wave</a>${isSuperAdmin && renderTemplate`<a href="/admin/users"${addAttribute(`c-admin__nav-link ${activeTab === "users" ? "c-admin__nav-link--active" : ""}`, "class")}>Gestion des Rôles</a>`}${isSuperAdmin && renderTemplate`<a href="/admin/settings"${addAttribute(`c-admin__nav-link ${activeTab === "settings" ? "c-admin__nav-link--active" : ""}`, "class")}>Paramètres & Devise</a>`}<a href="/" class="c-product-card__btn-details" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; margin-left: 1rem;">← Boutique</a></nav></header><main class="c-admin__main"><div class="l-container">${renderSlot($$result, $$slots["default"])}</div></main>${renderComponent($$result, "RoleSwitcher", $$RoleSwitcher, { "currentRole": currentRole })}</body></html>`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/layouts/AdminLayout.astro", void 0);
//#endregion
export { $$AdminLayout as t };
