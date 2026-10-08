import{n as e}from"./checkout.BowYgvEN.js";import{t}from"./currency.BJguYFak.js";function n(){let n=e(),r=document.getElementById(`admin-recent-orders-body`);r&&(r.innerHTML=n.slice(0,5).map(e=>`
      <tr>
        <td style="font-weight: 800; font-family: var(--hy-font-mono); color: var(--hy-color-gold);">${e.id}</td>
        <td style="font-weight: 700;">${e.customerName}</td>
        <td>${e.phone}</td>
        <td>
          <span class="c-badge c-badge--${e.paymentMethod===`wave`?`wave`:`public`}">
            ${e.paymentMethod.toUpperCase()}
          </span>
        </td>
        <td style="font-weight: 800;">${t(e.totalXOF)}</td>
        <td>
          <span class="c-badge c-badge--${e.status===`Payé via Wave`?`wave`:e.status===`Livré`?`vendeur`:`public`}">
            ${e.status}
          </span>
        </td>
        <td style="color: var(--hy-color-muted);">${e.createdAt}</td>
      </tr>
    `).join(``))}document.addEventListener(`DOMContentLoaded`,n),window.addEventListener(`hy:order-created`,n);