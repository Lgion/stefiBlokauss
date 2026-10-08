import { tt as __exportAll } from "./errors_DaAfqWch.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_mkHPDfNz.mjs";
import { n as renderScript } from "./RoleSwitcher_C2f3FUy7.mjs";
import "./compiler_BNxWY2cd.mjs";
import { t as $$Layout } from "./Layout_DVfHFhOg.mjs";
//#region src/components/Hero3DViewer.astro
var $$Hero3DViewer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="c-hero" id="viewer"><div class="l-container"><div class="c-hero__grid"><!-- Left Hero Content Column --><div class="c-hero__content"><div class="c-hero__tagline-wrapper"><span class="c-hero__tagline">Nouvelle Génération</span><span class="c-badge c-badge--wave">Compatible Wave</span><span class="c-badge c-badge--vip">Club VIP Ouvert</span></div><h1 class="c-hero__title">HIGH YA !<span class="c-hero__title-accent">Énergie Sauvage</span></h1><p class="c-hero__description">Découvrez la première cigarette de rupture au design <strong>Streetwear Avant-Garde</strong>. Boîtier texturé haute précision, clapet biseauté articulé, filtres or & platine à triple charbon actif et tabac pur grand cru.</p><div class="c-hero__cta-group"><button class="c-hero__cta-primary" id="hero-order-now-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg><span>Commander via Wave</span></button><a href="#editions" class="c-hero__cta-secondary"><span>Explorer les Éditions</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div><div class="c-hero__trust-badges"><div class="c-hero__trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg><span>Paiement Wave Sécurisé</span></div><div class="c-hero__trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><span>Filtre Triple Charbon</span></div><div class="c-hero__trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><span>Tarif VIP Exclusif</span></div></div></div><!-- Right Column: 3D Interactive Cigarette Pack Viewer --><div class="c-hero__viewer-col"><div class="c-viewer3d" id="pack-viewer-container"><!-- Top HUD Overlay --><div class="c-viewer3d__topbar"><div class="c-viewer3d__status-pill"><span class="c-viewer3d__status-pill-dot"></span><span id="viewer-edition-label">Sauvage Bronze</span></div><button class="c-viewer3d__rotate-toggle c-viewer3d__rotate-toggle--active" id="viewer-autorotate-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg><span>360° Auto</span></button></div><!-- Interactive Action Buttons --><div class="c-viewer3d__actions"><button class="c-viewer3d__action-btn" id="viewer-toggle-lid-btn" title="Ouvrir ou fermer le paquet"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"></path></svg><span id="viewer-lid-text">Ouvrir</span></button><button class="c-viewer3d__action-btn" id="viewer-extract-cig-btn" title="Extraire une cigarette"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg><span>Sortir Cigarette</span></button><button class="c-viewer3d__action-btn" id="viewer-reset-cam-btn" title="Recentrer la vue"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg><span>Recentrer</span></button></div><!-- Bottom Variant Swatches Toolbar --><div class="c-viewer3d__bottombar"><div class="c-viewer3d__variants"><button class="c-viewer3d__variant-btn c-viewer3d__variant-btn--active" data-theme="bronze"><span class="c-viewer3d__variant-btn-swatch c-viewer3d__variant-btn-swatch--bronze"></span><span>Bronze Wild</span></button><button class="c-viewer3d__variant-btn" data-theme="cobalt"><span class="c-viewer3d__variant-btn-swatch c-viewer3d__variant-btn-swatch--cobalt"></span><span>Cyber Cobalt</span></button><button class="c-viewer3d__variant-btn" data-theme="emerald"><span class="c-viewer3d__variant-btn-swatch c-viewer3d__variant-btn-swatch--emerald"></span><span>Hexa Emerald</span></button><button class="c-viewer3d__variant-btn" data-theme="onyx"><span class="c-viewer3d__variant-btn-swatch c-viewer3d__variant-btn-swatch--onyx"></span><span>Onyx VIP</span></button></div><span class="c-viewer3d__hint">Glissez pour tourner à 360° • Molette pour zoomer • Cliquez pour ouvrir</span></div></div></div></div></div></section>${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/Hero3DViewer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/Hero3DViewer.astro", void 0);
//#endregion
//#region src/scripts/store.ts
var PRODUCTS = [
	{
		id: "bronze",
		name: "HIGH YA ! Sauvage Bronze",
		slug: "sauvage-bronze",
		slogan: "ÉNERGIE SAUVAGE",
		subtitle: "Bronze Brossé & Carbone Ébène",
		description: "Une intensité brute née des terroirs sauvages. Flanc en carbone strié et dorure à chaud bronze. Un tirage riche aux arômes corsés et boisés relevés d’un bouquet végétal noble.",
		flavorNotes: [
			"Bois de santal",
			"Tabac corsé affiné",
			"Herbe sauvage sauvageonne",
			"Épices chaudes"
		],
		nicotine: "0.8 mg",
		filterType: "Filtre or métallisé & triple chambre à charbon actif",
		blendOrigin: "Grand Cru Terroir d’Afrique de l’Ouest",
		priceXOF: 3500,
		cartonPriceXOF: 31500,
		badge: "Best-Seller",
		badgeType: "wave",
		themeColor: "#d89f38",
		colorName: "Bronze Doré"
	},
	{
		id: "cobalt",
		name: "HIGH YA ! Cyber Cobalt",
		slug: "cyber-cobalt",
		slogan: "DYNAMIQUE & INTENSE",
		subtitle: "Bleu Cobalt Néon & Chrome Liquide",
		description: "La fraîcheur cybernétique à l’état pur. Texture texturée reptilienne bleu nuit avec gravures laser angulaires et liserés cyan luminescents. Fraîcheur mentholée givrée foudroyante.",
		flavorNotes: [
			"Menthol givré arctique",
			"Terpènes botaniques purs",
			"Zeste de yuzu vivifiant",
			"Accents minéraux"
		],
		nicotine: "0.6 mg",
		filterType: "Filtre bleu nuit texturé & anneau platine ventilé",
		blendOrigin: "Assemblage Botanique Boréal & Herbes Sélect",
		priceXOF: 3800,
		cartonPriceXOF: 34200,
		badge: "Nouveau",
		badgeType: "vendeur",
		themeColor: "#00f0ff",
		colorName: "Cobalt Électrique"
	},
	{
		id: "emerald",
		name: "HIGH YA ! Hexa Emerald",
		slug: "hexa-emerald",
		slogan: "ALCHIMIE BOTANIQUE",
		subtitle: "Vert Alvéolé & Laiton Brossé",
		description: "Structure géométrique nid d’abeille verte avec armature tactique boulonnée. Infusion subtile aux notes de thé vert matcha, d’eucalyptus sauvage et d’herbes rares.",
		flavorNotes: [
			"Feuilles de matcha broyées",
			"Eucalyptus sauvage",
			"Menthe douce poivrée",
			"Infusion florale"
		],
		nicotine: "0.5 mg",
		filterType: "Filtre émeraude marbré & liseré or brossé",
		blendOrigin: "Sélection Organique & Feuille d’Or Végétale",
		priceXOF: 3600,
		cartonPriceXOF: 32400,
		badge: "Organique",
		badgeType: "vendeur",
		themeColor: "#00ff87",
		colorName: "Émeraude Hexa"
	},
	{
		id: "onyx",
		name: "HIGH YA ! Obsidian Onyx VIP",
		slug: "obsidian-onyx-vip",
		slogan: "CLUB PRIVÉ ÉDITION LIMITÉE",
		subtitle: "Noir Absolu & Dorure 24 Carats",
		description: "Réservé exclusivement aux membres du Club VIP HIGH YA ! Boîtier d’ébène mat brossé avec feuille d’or 24K texturée et filtre en carbone pur. Arômes soyeux de vanille bourbon et de résine précieuse.",
		flavorNotes: [
			"Vanille bourbon de Madagascar",
			"Résine ambrée",
			"Tabac brun de garde",
			"Notes toastées"
		],
		nicotine: "0.7 mg",
		filterType: "Filtre carbone onyx & bague or gravée au laser",
		blendOrigin: "Réserve Exclusive Privée (Tirage Limité)",
		priceXOF: 5e3,
		cartonPriceXOF: 45e3,
		badge: "VIP Club",
		badgeType: "vip",
		themeColor: "#ffd700",
		colorName: "Onyx & Or 24K",
		isVipExclusive: true
	}
];
//#endregion
//#region src/components/ProductShowcase.astro
createAstro("https://astro.build");
var $$ProductShowcase = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProductShowcase;
	const { currentRole = "public" } = Astro.props;
	const isVip = currentRole === "vip" || currentRole === "super admin";
	return renderTemplate`${maybeRenderHead($$result)}<section class="c-showcase" id="editions"><div class="l-container"><div class="c-showcase__header"><span class="c-showcase__eyebrow">La Collection 2026</span><h2 class="c-showcase__title">Les Éditions HIGH YA !</h2><p class="c-showcase__subtitle">Chaque paquet est un chef-d’œuvre d'ingénierie streetwear. Sélectionnez votre signature pour en explorer les secrets en modale 3D.</p></div><div class="c-showcase__grid">${PRODUCTS.map((product) => {
		const vipPrice = Math.round(product.priceXOF * .8);
		return renderTemplate`<article${addAttribute(`c-product-card ${product.id === "bronze" ? "c-product-card--featured" : ""} ${product.isVipExclusive ? "c-product-card--vip-only" : ""}`, "class")}><div class="c-product-card__media"><span${addAttribute(`c-badge c-badge--${product.badgeType} c-product-card__badge-pos`, "class")}>${product.badge}</span><span class="c-product-card__3d-tag">3D Interactive</span><img src="/media/high-ya-hero.jpeg"${addAttribute(product.name, "alt")} class="c-product-card__image" loading="lazy"></div><div class="c-product-card__body"><h3 class="c-product-card__title">${product.name}</h3><p class="c-product-card__flavor">${product.subtitle}</p><div class="c-product-card__specs-row"><span class="c-product-card__spec-tag">${product.nicotine} Nic.</span><span class="c-product-card__spec-tag">20 Cigs</span><span class="c-product-card__spec-tag">Filtre Charbon</span></div><div class="c-product-card__pricing"><div class="c-product-card__price-wrap"><span class="c-product-card__price product-price-display"${addAttribute(isVip ? vipPrice : product.priceXOF, "data-xof")}>${isVip ? `${vipPrice.toLocaleString("fr-FR")} FCFA` : `${product.priceXOF.toLocaleString("fr-FR")} FCFA`}</span>${isVip ? renderTemplate`<span class="c-product-card__vip-price">Prix VIP Club (-20%)</span>` : renderTemplate`<span class="c-product-card__vip-price">VIP: ${vipPrice.toLocaleString("fr-FR")} FCFA</span>`}</div></div><div class="c-product-card__actions"><button class="c-product-card__btn-details open-product-modal-btn"${addAttribute(product.id, "data-product-id")}>Voir en Modale</button><button class="c-product-card__btn-add quick-add-to-cart-btn"${addAttribute(product.id, "data-product-id")} title="Ajouter au panier"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></div></div></article>`;
	})}</div></div></section>${renderScript($$result, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/ProductShowcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/ProductShowcase.astro", void 0);
//#endregion
//#region src/components/BrandStory.astro
var $$BrandStory = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="c-story" id="story"><div class="l-container"><div class="c-story__container"><!-- Video Showcase with player --><div class="c-story__video-wrapper"><video src="/media/high-ya-teaser.mp4" class="c-story__video" controls autoplay muted loop playsinline poster="/media/high-ya-hero.jpeg"></video><div class="c-story__video-overlay"><span class="c-story__video-title">HIGH YA ! Film Officiel</span><span class="c-badge c-badge--wave">Campagne 2026</span></div></div><!-- Story Narrative & Features --><div class="c-story__content"><span class="c-badge c-badge--vip c-story__badge">Manifesto</span><h2 class="c-story__title">Une Révolution Sauvage<span class="c-story__title-flame">Dans Chaque Tirage</span></h2><p class="c-story__text">Conçue à la croisée de la culture <strong>Streetwear Haute-Couture</strong> et des secrets botaniques les plus raffinés, la marque <strong>HIGH YA !</strong> réinvente entièrement l'objet cigarette. Un packaging angulaire blindé, des filtres métallisés ultra-fins et une combustion lente délivrant des terpènes d'une pureté absolue.</p><div class="c-story__features-grid"><div class="c-story__feature-card"><svg class="c-story__feature-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg><div class="c-story__feature-card-info"><h4 class="c-story__feature-card-title">Packaging 3D Breveté</h4><p class="c-story__feature-card-desc">Boîtier rigide à clapet biseauté protecteur contre l'humidité et les chocs.</p></div></div><div class="c-story__feature-card"><svg class="c-story__feature-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><div class="c-story__feature-card-info"><h4 class="c-story__feature-card-title">Triple Filtre Actif</h4><p class="c-story__feature-card-desc">Filtration supérieure au charbon actif préservant la fraîcheur aromatique.</p></div></div><div class="c-story__feature-card"><svg class="c-story__feature-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg><div class="c-story__feature-card-info"><h4 class="c-story__feature-card-title">Wave Instant Pay</h4><p class="c-story__feature-card-desc">Paiement ultra-sécurisé en 5 secondes via Wave Sénégal et Côte d'Ivoire.</p></div></div><div class="c-story__feature-card"><svg class="c-story__feature-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><div class="c-story__feature-card-info"><h4 class="c-story__feature-card-title">Club VIP Exclusif</h4><p class="c-story__feature-card-desc">-20% permanent sur tous les paquets et accès aux éditions privées.</p></div></div></div></div></div></div></section>`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/components/BrandStory.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const currentRole = Astro.locals.currentRole || "public";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "HIGH YA ! — Énergie Sauvage | Cigarettes Streetwear Avant-Garde",
		"description": "Plateforme officielle HIGH YA !. Configurateur 3D interactif, filtres haute précision, commande directe Wave Mobile Money."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero3DViewer", $$Hero3DViewer, {})}${renderComponent($$result, "ProductShowcase", $$ProductShowcase, { "currentRole": currentRole })}${renderComponent($$result, "BrandStory", $$BrandStory, {})}` })}`;
}, "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/index.astro", void 0);
var $$file = "/home/nihongo/Bureau/CLIENTS/stefiBlokhauss/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
