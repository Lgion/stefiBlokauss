import{t as e}from"./currency.BJguYFak.js";import{a as t,r as n,s as r,t as i}from"./store.BXvIz-Er.js";var a=document.getElementById(`cart-drawer`),o=document.getElementById(`cart-items-container`),s=document.getElementById(`cart-subtotal`),c=document.getElementById(`cart-vip-discount-row`),l=document.getElementById(`cart-vip-discount`),u=document.getElementById(`cart-total`);function d(){let a=t(),d=document.cookie.split(`; `).find(e=>e.startsWith(`hy_user_role=`))?.split(`=`)[1]||`public`,f=n(d);o&&(a.length===0?(o.innerHTML=`
        <div class="c-cart-drawer__empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--hy-color-muted);">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <p>Votre panier est vide.</p>
          <a href="#editions" class="c-product-card__btn-details" style="display: inline-block; margin-top: 0.5rem;" id="cart-empty-explore-btn">
            Découvrir la collection
          </a>
        </div>
      `,s&&(s.textContent=e(0)),u&&(u.textContent=e(0)),c&&(c.style.display=`none`)):(o.innerHTML=a.map(t=>{let n=i.find(e=>e.id===t.productId);if(!n)return``;let r=t.format===`carton`?n.cartonPriceXOF:n.priceXOF,a=t.format===`carton`?`Cartouche (x10 paquets)`:`Paquet (20 cigs)`;return`
        <div class="c-cart-drawer__item">
          <img src="/media/high-ya-hero.jpeg" alt="${n.name}" class="c-cart-drawer__item-thumb" />
          <div class="c-cart-drawer__item-info">
            <span class="c-cart-drawer__item-name">${n.name}</span>
            <span class="c-cart-drawer__item-format">${a}</span>
            <span class="c-cart-drawer__item-price">${e(r*t.quantity)}</span>
          </div>
          <div class="c-cart-drawer__item-qty">
            <button class="c-cart-drawer__item-btn cart-qty-minus" data-id="${t.productId}" data-format="${t.format}">-</button>
            <span style="font-size: 0.85rem; font-weight: 800;">${t.quantity}</span>
            <button class="c-cart-drawer__item-btn cart-qty-plus" data-id="${t.productId}" data-format="${t.format}">+</button>
          </div>
          <button class="c-cart-drawer__item-remove cart-item-del" data-id="${t.productId}" data-format="${t.format}" title="Supprimer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </div>
      `}).join(``),s&&(s.textContent=e(f.subtotal)),u&&(u.textContent=e(f.total)),f.isVip&&f.discountAmount>0?(c&&(c.style.display=`flex`),l&&(l.textContent=`-${e(f.discountAmount)}`)):c&&(c.style.display=`none`),document.querySelectorAll(`.cart-qty-plus`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`),n=e.getAttribute(`data-format`),i=a.find(e=>e.productId===t&&e.format===n);i&&r(t,n,i.quantity+1)})}),document.querySelectorAll(`.cart-qty-minus`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`),n=e.getAttribute(`data-format`),i=a.find(e=>e.productId===t&&e.format===n);i&&r(t,n,i.quantity-1)})}),document.querySelectorAll(`.cart-item-del`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`),n=e.getAttribute(`data-format`);r(t,n,0)})})))}window.addEventListener(`hy:open-cart`,()=>{a?.classList.add(`c-cart-drawer--open`),d()}),window.addEventListener(`hy:cart-updated`,d),window.addEventListener(`hy:currency-changed`,d),document.getElementById(`close-cart-btn`)?.addEventListener(`click`,()=>{a?.classList.remove(`c-cart-drawer--open`)}),document.getElementById(`cart-proceed-checkout-btn`)?.addEventListener(`click`,()=>{a?.classList.remove(`c-cart-drawer--open`),window.dispatchEvent(new CustomEvent(`hy:open-checkout`))});