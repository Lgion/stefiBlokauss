import { E as createComponent, T as createAstro, _ as createRenderInstruction, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_mkHPDfNz.mjs";
import "./compiler_BNxWY2cd.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/RoleSwitcher.astro
createAstro("https://astro.build");
var $$RoleSwitcher = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RoleSwitcher;
	const { currentRole = "public" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="c-role-switcher" id="demo-role-switcher" title="Bascule de rôle pour test &amp; démonstration"><span class="c-role-switcher__label"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 2px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Rôle :</span><select class="c-role-switcher__select" id="demo-role-select"><option value="public"${addAttribute(currentRole === "public", "selected")}>Public (Défaut)</option><option value="vip"${addAttribute(currentRole === "vip", "selected")}>VIP (-20%)</option><option value="vendeurs"${addAttribute(currentRole === "vendeurs", "selected")}>Vendeur</option><option value="super admin"${addAttribute(currentRole === "super admin", "selected")}>Super Admin</option></select>${(currentRole === "super admin" || currentRole === "vendeurs") && renderTemplate`<a href="/admin" style="font-size: 0.7rem; font-weight: 800; color: #ff5277; text-transform: uppercase; margin-left: 4px; text-decoration: underline;">Admin →</a>`}</div>${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/RoleSwitcher.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/RoleSwitcher.astro", void 0);
//#endregion
export { renderScript as n, $$RoleSwitcher as t };
