import { tt as __exportAll } from "./errors_DaAfqWch.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, p as maybeRenderHead } from "./server_mkHPDfNz.mjs";
import "./compiler_BNxWY2cd.mjs";
import { n as $$InternalUIComponentRenderer, t as $$Layout } from "./Layout_DVfHFhOg.mjs";
//#region node_modules/@clerk/astro/components/interactive/SignUp.astro
createAstro("https://astro.build");
var $$SignUp$1 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SignUp$1;
	return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, {
		...Astro.props,
		"component": "sign-up"
	})}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/node_modules/@clerk/astro/components/interactive/SignUp.astro", void 0);
//#endregion
//#region src/pages/sign-up.astro
var sign_up_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SignUp,
	file: () => $$file,
	url: () => $$url
});
var $$SignUp = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Inscription — HIGH YA !",
		"description": "Créez votre compte client ou adhérez au Club VIP HIGH YA !"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section style="min-height: 70vh; display: flex; align-items: center; justify-content: center; padding: 4rem 1rem;"><div style="background: rgba(14, 18, 25, 0.9); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 2rem; box-shadow: 0 20px 50px rgba(0,0,0,0.8);"><div style="text-align: center; margin-bottom: 1.5rem;"><h2 style="font-size: 1.8rem; font-weight: 900; text-transform: uppercase; color: #fff;">Rejoindre HIGH <span style="color: var(--hy-color-gold);">YA !</span></h2><p style="font-size: 0.85rem; color: var(--hy-color-muted); margin-top: 4px;">Création de compte rapide</p></div>${renderComponent($$result, "SignUp", $$SignUp$1, {
		"routing": "path",
		"path": "/sign-up",
		"signInUrl": "/sign-in"
	})}</div></section>` })}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/sign-up.astro", void 0);
var $$file = "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/sign-up.astro";
var $$url = "/sign-up";
//#endregion
//#region \0virtual:astro:page:src/pages/sign-up@_@astro
var page = () => sign_up_exports;
//#endregion
export { page };
