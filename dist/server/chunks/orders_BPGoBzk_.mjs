import { tt as __exportAll } from "./errors_DaAfqWch.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate, p as maybeRenderHead } from "./server_mkHPDfNz.mjs";
import { n as renderScript } from "./RoleSwitcher_C2f3FUy7.mjs";
import "./compiler_BNxWY2cd.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CDdsLA1l.mjs";
//#region src/pages/admin/orders.astro
var orders_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Orders,
	file: () => $$file,
	url: () => $$url
});
var $$Orders = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Gestion des Commandes — HIGH YA ! Admin",
		"activeTab": "orders"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="c-admin__content"><div class="c-admin__card"><div class="c-admin__card-header"><div><h2 class="c-admin__card-title">Suivi des Commandes & Encaissements Wave</h2><p style="font-size: 0.8rem; color: var(--hy-color-muted); margin-top: 2px;">Espace accessible aux rôles <strong>Super Admin</strong> et <strong>Vendeurs</strong>. Mettez à jour les statuts en direct.</p></div><div style="display: flex; gap: 0.5rem; align-items: center;"><button class="c-badge c-badge--public" id="filter-all-orders" style="cursor: pointer;">Tous</button><button class="c-badge c-badge--wave" id="filter-wave-orders" style="cursor: pointer;">Wave Uniquement</button></div></div><div class="c-admin__table-wrapper"><table class="c-admin__table"><thead><tr><th>Réf.</th><th>Client & Contact</th><th>Adresse de Livraison</th><th>Articles Commandés</th><th>Mode & Montant</th><th>Statut Actuel</th><th>Actions Vendeur</th></tr></thead><tbody id="orders-table-body"><!-- Populated via script --></tbody></table></div></div></div>` })}${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/admin/orders.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/admin/orders.astro", void 0);
var $$file = "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/admin/orders.astro";
var $$url = "/admin/orders";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/orders@_@astro
var page = () => orders_exports;
//#endregion
export { page };
