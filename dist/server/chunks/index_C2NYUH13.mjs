import { tt as __exportAll } from "./errors_DaAfqWch.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate, p as maybeRenderHead } from "./server_mkHPDfNz.mjs";
import { n as renderScript } from "./RoleSwitcher_C2f3FUy7.mjs";
import "./compiler_BNxWY2cd.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CDdsLA1l.mjs";
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Tableau de Bord — HIGH YA ! Admin",
		"activeTab": "overview"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="c-admin__content"><!-- Top Stat Cards --><div class="c-admin__stats-grid"><div class="c-admin__stat-card"><span class="c-admin__stat-card-label">Chiffre d'Affaires Total</span><span class="c-admin__stat-card-val" id="admin-kpi-revenue">1 485 000 FCFA</span><span class="c-admin__stat-card-sub"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>+34% ce mois-ci</span></div><div class="c-admin__stat-card"><span class="c-admin__stat-card-label">Commandes Wave Validées</span><span class="c-admin__stat-card-val" id="admin-kpi-wave-orders">87</span><span class="c-admin__stat-card-sub" style="color: #4ac7ff;">100% sans frais</span></div><div class="c-admin__stat-card"><span class="c-admin__stat-card-label">Membres VIP Actifs</span><span class="c-admin__stat-card-val">142</span><span class="c-admin__stat-card-sub" style="color: var(--hy-color-gold);">Tarif -20% actif</span></div><div class="c-admin__stat-card"><span class="c-admin__stat-card-label">Édition n°1 des Ventes</span><span class="c-admin__stat-card-val" style="font-size: 1.3rem;">Sauvage Bronze</span><span class="c-admin__stat-card-sub">58% des volumes</span></div></div><!-- Live Recent Orders Table --><div class="c-admin__card"><div class="c-admin__card-header"><h3 class="c-admin__card-title">Dernières Commandes Clients (Wave & Direct)</h3><a href="/admin/orders" class="c-product-card__btn-details" style="padding: 0.4rem 0.8rem; font-size: 0.75rem;">Toutes les commandes →</a></div><div class="c-admin__table-wrapper"><table class="c-admin__table"><thead><tr><th>Réf. Commande</th><th>Client</th><th>Téléphone</th><th>Méthode</th><th>Montant</th><th>Statut</th><th>Date</th></tr></thead><tbody id="admin-recent-orders-body"><!-- Populated via script from stored orders --></tbody></table></div></div></div>` })}${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/admin/index.astro", void 0);
var $$file = "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };
