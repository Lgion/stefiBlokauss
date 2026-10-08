import { tt as __exportAll } from "./errors_DaAfqWch.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate, p as maybeRenderHead } from "./server_mkHPDfNz.mjs";
import { n as renderScript } from "./RoleSwitcher_C2f3FUy7.mjs";
import "./compiler_BNxWY2cd.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CDdsLA1l.mjs";
//#region src/pages/admin/settings.astro
var settings_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Settings,
	file: () => $$file,
	url: () => $$url
});
var $$Settings = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Paramètres & Devise — HIGH YA ! Admin",
		"activeTab": "settings"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="c-admin__content"><div class="c-admin__card"><div class="c-admin__card-header"><div><h2 class="c-admin__card-title">Configuration Système & Paramétrage de la Devise</h2><p style="font-size: 0.8rem; color: var(--hy-color-muted); margin-top: 2px;">Gestion de la devise principale affichée sur la boutique et configuration des passerelles Wave.</p></div></div><div class="c-admin__settings-grid"><!-- Currency Configuration Column --><div class="c-admin__setting-group"><h3 style="font-size: 1.05rem; font-weight: 800; text-transform: uppercase; color: #fff;">1. Devise Principale de la Boutique</h3><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="setting-currency">Devise Active par Défaut</label><select id="setting-currency" class="c-checkout-modal__field-input"><option value="XOF">Franc CFA (XOF / FCFA) — Recommandé pour Wave</option><option value="EUR">Euro (€ EUR)</option><option value="USD">Dollar Américain ($ USD)</option></select><span style="font-size: 0.75rem; color: var(--hy-color-muted); margin-top: 4px;">Actuellement : <strong style="color: var(--hy-color-acid);" id="active-currency-text">XOF (FCFA)</strong></span></div><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="setting-rate-eur">Taux Euro vers FCFA (1 € = X FCFA)</label><input type="number" id="setting-rate-eur" class="c-checkout-modal__field-input" value="655.957" step="0.001"></div><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="setting-rate-usd">Taux Dollar vers FCFA (1 $ = X FCFA)</label><input type="number" id="setting-rate-usd" class="c-checkout-modal__field-input" value="600.0" step="0.1"></div></div><!-- Wave Merchant & Store Contact Column --><div class="c-admin__setting-group"><h3 style="font-size: 1.05rem; font-weight: 800; text-transform: uppercase; color: #fff;">2. Compte Marchand Wave & Contact</h3><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="setting-wave-phone">Numéro Marchand Wave (Réception des paiements)</label><input type="text" id="setting-wave-phone" class="c-checkout-modal__field-input" value="+221 77 000 00 00"></div><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="setting-whatsapp">Numéro WhatsApp Support Direct</label><input type="text" id="setting-whatsapp" class="c-checkout-modal__field-input" value="+221 77 000 00 00"></div><div class="c-checkout-modal__field"><label class="c-checkout-modal__field-label" for="setting-bypass">Durée de Bypass Admin (Secondes)</label><input type="number" id="setting-bypass" class="c-checkout-modal__field-input" value="3600"><span style="font-size: 0.75rem; color: var(--hy-color-muted);">Correspond au paramètre <code>ADMIN_BYPASS_DURATION_SECONDS</code> de votre fichier <code>.env</code>.</span></div></div></div><div style="padding: var(--hy-space-lg); border-top: 1px solid var(--hy-color-border);"><button class="c-admin__save-btn" id="save-settings-btn">Enregistrer la Configuration</button></div></div></div>` })}${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/admin/settings.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/admin/settings.astro", void 0);
var $$file = "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/admin/settings.astro";
var $$url = "/admin/settings";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/settings@_@astro
var page = () => settings_exports;
//#endregion
export { page };
