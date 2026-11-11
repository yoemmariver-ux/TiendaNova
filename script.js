/* ====== CONFIGURACIÓN: editá estos datos ====== */
const WHATSAPP = "5493830000000"; // código de país + código de área + número, sin + ni espacios
const STORE = "Mi Tienda";

// Productos de ejemplo. Para agregar uno, copiá una línea y cambiá los datos.
// Las imágenes de picsum.photos son aleatorias; reemplazalas por tus fotos (ej: "img/auriculares.jpg").
const products = [
  { id: 1, name: "Auriculares Pulse", cat: "Audio", price: 48900,
    desc: "Inalámbricos, con 30 horas de batería y micrófono incluido.",
    img: "https://picsum.photos/seed/tienda-1/640/800" },
  { id: 2, name: "Mochila Urbana", cat: "Accesorios", price: 32500,
    desc: "Resistente al agua, con lugar para notebook de 15 pulgadas.",
    img: "https://picsum.photos/seed/tienda-2/640/800" },
  { id: 3, name: "Botella Térmica 750 ml", cat: "Hogar", price: 18900,
    desc: "Mantiene el frío 24 horas y el calor 12 horas. Acero inoxidable.",
    img: "https://picsum.photos/seed/tienda-3/640/800" },
  { id: 4, name: "Lámpara de Escritorio", cat: "Hogar", price: 21400,
    desc: "Luz LED regulable, con base de carga para el celular.",
    img: "https://picsum.photos/seed/tienda-4/640/800" },
  { id: 5, name: "Zapatillas Aire", cat: "Calzado", price: 67800,
    desc: "Livianas y cómodas, ideales para caminar todo el día.",
    img: "https://picsum.photos/seed/tienda-5/640/800" }
];
/* ================================================ */

const $ = s => document.querySelector(s);
const money = n => n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
const byId = id => products.find(p => p.id === Number(id));

let cur = 2;            // producto en el centro
let cart = {};          // { idProducto: cantidad }
try { cart = JSON.parse(localStorage.getItem("cart") || "{}"); } catch (e) { cart = {}; }
const save = () => { try { localStorage.setItem("cart", JSON.stringify(cart)); } catch (e) {} };

/* ---------- Galería 3D ---------- */
const flow = $("#flow");
let sx = null, moved = false;

const cards = products.map((p, i) => {
  const b = document.createElement("button");
  b.className = "card";
  b.type = "button";
  b.setAttribute("aria-label", p.name);
  const img = document.createElement("img");
  img.src = p.img; img.alt = p.name; img.loading = i < 3 ? "eager" : "lazy"; img.draggable = false;
  b.appendChild(img);
  b.addEventListener("click", () => { if (!moved) go(i); });
  flow.appendChild(b);
  return b;
});

function go(i) {
  cur = Math.max(0, Math.min(products.length - 1, i));
  cards.forEach((c, k) => {
    const o = k - cur, a = Math.abs(o);
    c.style.setProperty("--o", o);
    c.style.setProperty("--a", a);
    c.classList.toggle("on", a === 0);
    c.dataset.far = a > 2 ? "1" : "";
  });
  const p = products[cur];
  $("#iCat").textContent = p.cat;
  $("#iName").textContent = p.name;
  $("#iDesc").textContent = p.desc;
  $("#iPrice").textContent = money(p.price);
  $("#prev").disabled = cur === 0;
  $("#next").disabled = cur === products.length - 1;
}

flow.addEventListener("pointerdown", e => { sx = e.clientX; moved = false; });
flow.addEventListener("pointerup", e => {
  if (sx === null) return;
  const d = e.clientX - sx; sx = null;
  if (Math.abs(d) > 40) { moved = true; go(cur + (d < 0 ? 1 : -1)); setTimeout(() => moved = false, 60); }
});
flow.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1); }
});
$("#prev").addEventListener("click", () => go(cur - 1));
$("#next").addEventListener("click", () => go(cur + 1));

/* ---------- Carrito ---------- */
function add(id) {
  cart[id] = (cart[id] || 0) + 1;
  save(); renderCart();
  toast(byId(id).name + " se agregó al carrito");
}

function renderCart() {
  const ids = Object.keys(cart).filter(id => cart[id] > 0 && byId(id));
  let units = 0, total = 0;
  $("#items").innerHTML = ids.length ? ids.map(id => {
    const p = byId(id), q = cart[id];
    units += q; total += p.price * q;
    return `<li>
      <img src="${p.img}" alt="">
      <div><p class="n">${p.name}</p><p class="p">${money(p.price)} × ${q}</p></div>
      <div class="qty">
        <button data-act="dec" data-id="${id}" aria-label="Quitar una unidad">−</button>
        <span>${q}</span>
        <button data-act="inc" data-id="${id}" aria-label="Agregar una unidad">+</button>
        <button class="del" data-act="del" data-id="${id}">Quitar</button>
      </div></li>`;
  }).join("") : '<li class="empty">Tu carrito está vacío. Elegí un producto para empezar.</li>';
  $("#count").textContent = units;
  $("#total").textContent = money(total);
  $("#checkout").disabled = !ids.length;
}

$("#items").addEventListener("click", e => {
  const b = e.target.closest("button[data-act]");
  if (!b) return;
  const id = b.dataset.id;
  if (b.dataset.act === "inc") cart[id]++;
  if (b.dataset.act === "dec") cart[id]--;
  if (b.dataset.act === "del") cart[id] = 0;
  if (cart[id] <= 0) delete cart[id];
  save(); renderCart();
});

$("#add").addEventListener("click", () => add(products[cur].id));

function openCart(open) {
  $("#cart").classList.toggle("open", open);
  $("#overlay").classList.toggle("open", open);
  $("#cart").setAttribute("aria-hidden", String(!open));
  if (open) $("#closeCart").focus(); else $("#openCart").focus();
}
$("#openCart").addEventListener("click", () => openCart(true));
$("#closeCart").addEventListener("click", () => openCart(false));
$("#overlay").addEventListener("click", () => openCart(false));
document.addEventListener("keydown", e => { if (e.key === "Escape") openCart(false); });

function sendWhatsApp(text) {
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text), "_blank", "noopener");
}

$("#checkout").addEventListener("click", () => {
  const ids = Object.keys(cart);
  let total = 0;
  const lines = ids.map(id => {
    const p = byId(id), q = cart[id];
    total += p.price * q;
    return "• " + q + " × " + p.name + " (" + money(p.price * q) + ")";
  });
  sendWhatsApp("Hola, quiero hacer este pedido en " + STORE + ":\n" + lines.join("\n") + "\nTotal: " + money(total));
});

/* ---------- Contacto ---------- */
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  sendWhatsApp("Hola, soy " + f.get("nombre") + ". " + f.get("mensaje"));
  e.target.reset();
});

/* ---------- Aviso ---------- */
let t;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(t);
  t = setTimeout(() => el.classList.remove("show"), 2200);
}

go(cur);
renderCart();
