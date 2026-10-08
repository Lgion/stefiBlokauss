import{a as e,n as t}from"./checkout.BowYgvEN.js";import{t as n}from"./currency.BJguYFak.js";function r(i=`all`){let a=t();i===`wave`&&(a=a.filter(e=>e.paymentMethod===`wave`));let o=document.getElementById(`orders-table-body`);o&&(a.length===0?o.innerHTML=`
        <tr>
          <td colspan="7" style="text-align: center; padding: 2rem; color: var(--hy-color-muted);">
            Aucune commande enregistrée pour l'instant.
          </td>
        </tr>
      `:(o.innerHTML=a.map(e=>{let t=e.items.map(e=>`${e.quantity}x ${e.productName} (${e.format===`carton`?`Cartouche`:`Paquet`})`).join(`<br/>`);return`
        <tr>
          <td style="font-family: var(--hy-font-mono); font-weight: 800; color: var(--hy-color-gold);">${e.id}</td>
          <td>
            <div style="font-weight: 800; color: #fff;">${e.customerName}</div>
            <div style="font-size: 0.75rem; color: var(--hy-color-muted);">${e.phone}</div>
            <div style="font-size: 0.75rem; color: var(--hy-color-muted);">${e.email}</div>
          </td>
          <td>
            <div style="font-weight: 700;">${e.city}</div>
            <div style="font-size: 0.75rem; color: var(--hy-color-muted);">${e.address}</div>
          </td>
          <td style="font-size: 0.8rem; line-height: 1.4;">
            ${t}
          </td>
          <td>
            <div style="font-weight: 800; color: #fff;">${n(e.totalXOF)}</div>
            <span class="c-badge c-badge--${e.paymentMethod===`wave`?`wave`:`public`}" style="margin-top: 4px;">
              ${e.paymentMethod.toUpperCase()}
            </span>
          </td>
          <td>
            <span class="c-badge c-badge--${e.status===`Payé via Wave`?`wave`:e.status===`Livré`?`vendeur`:`public`}">
              ${e.status}
            </span>
          </td>
          <td>
            <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
              ${e.status!==`Expédié`&&e.status!==`Livré`?`
                <button class="c-admin__status-btn action-ship-btn" data-id="${e.id}">
                  Expédier
                </button>
              `:``}
              ${e.status===`Livré`?`<span style="font-size: 0.75rem; color: var(--hy-color-acid); font-weight: 800;">Terminé</span>`:`
                <button class="c-admin__status-btn action-deliver-btn" data-id="${e.id}" style="background: rgba(0,255,135,0.15); color: var(--hy-color-acid);">
                  Livré ✓
                </button>
              `}
            </div>
          </td>
        </tr>
      `}).join(``),document.querySelectorAll(`.action-ship-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-id`);e(n,`Expédié`),r(i)})}),document.querySelectorAll(`.action-deliver-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-id`);e(n,`Livré`),r(i)})})))}document.addEventListener(`DOMContentLoaded`,()=>r(`all`)),document.getElementById(`filter-all-orders`)?.addEventListener(`click`,()=>r(`all`)),document.getElementById(`filter-wave-orders`)?.addEventListener(`click`,()=>r(`wave`));