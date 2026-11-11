/* ====== CONFIGURACIÓN: editá estos datos ====== */
const WHATSAPP = "5493830000000"; // código de país + código de área + número, sin + ni espacios
const STORE = "Tienda Nova";
const FREE_SHIPPING = 50000;      // monto desde el cual el envío es gratis
const CUOTAS = 12;

const img = n => "https://picsum.photos/seed/tienda-" + n + "/640/640";
const products = [
  { id: 1,  name: "Auriculares Bluetooth Pulse",  cat: "Audio",       price: 48900, old: 69900, rating: 4.7, reviews: 1280, free: true,  feat: true, desc: "Inalámbricos, con 30 horas de batería, cancelación de ruido y micrófono incluido.", img: img(1), mp: "" },
  { id: 2,  name: "Mochila Urbana Impermeable",   cat: "Accesorios",  price: 32500, old: 41900, rating: 4.5, reviews: 860,  free: true,  feat: true, desc: "Resistente al agua, con lugar para notebook de 15 pulgadas y puerto USB.", img: img(2), mp: "" },
  { id: 3,  name: "Botella Térmica 750 ml",       cat: "Hogar",       price: 18900, old: 18900, rating: 4.8, reviews: 2310, free: false, desc: "Mantiene el frío 24 horas y el calor 12 horas. Acero inoxidable.", img: img(3), mp: "" },
  { id: 4,  name: "Lámpara LED de Escritorio",    cat: "Hogar",       price: 21400, old: 29900, rating: 4.4, reviews: 410,  free: false, desc: "Luz regulable en tres tonos, con base de carga inalámbrica para el celular.", img: img(4), mp: "" },
  { id: 5,  name: "Zapatillas Aire",              cat: "Calzado",     price: 67800, old: 89900, rating: 4.6, reviews: 1950, free: true,  feat: true, desc: "Livianas y cómodas, ideales para caminar todo el día.", img: img(5), mp: "" },
  { id: 6,  name: "Parlante Bluetooth Mini",      cat: "Audio",       price: 25900, old: 38900, rating: 4.3, reviews: 740,  free: false, feat: true, desc: "Resistente al agua, 12 horas de música y sonido potente.", img: img(6), mp: "" },
  { id: 7,  name: "Smartwatch Fit",               cat: "Tecnología",  price: 54900, old: 79900, rating: 4.5, reviews: 1120, free: true,  feat: true, desc: "Mide pasos, sueño y ritmo cardíaco. Recibí notificaciones en la muñeca.", img: img(7), mp: "" },
  { id: 8,  name: "Teclado Mecánico Compacto",    cat: "Tecnología",  price: 39900, old: 52900, rating: 4.6, reviews: 530,  free: false, desc: "Switches rojos, retroiluminado y conexión por cable o Bluetooth.", img: img(8), mp: "" },
  { id: 9,  name: "Cargador Rápido 30 W",         cat: "Tecnología",  price: 12900, old: 12900, rating: 4.7, reviews: 3020, free: false, desc: "Carga tu celular al 50 % en 30 minutos. Incluye cable USB-C.", img: img(9), mp: "" },
  { id: 10, name: "Riñonera Compacta",            cat: "Accesorios",  price: 14500, old: 19900, rating: 4.2, reviews: 290,  free: false, desc: "Tres compartimentos con cierre y correa ajustable.", img: img(10), mp: "" },
  { id: 11, name: "Set de Sartenes x3 Antiadherentes", cat: "Hogar",  price: 44900, old: 62900, rating: 4.6, reviews: 970,  free: false, desc: "Aptas para todas las cocinas, incluida la inducción. Mango de silicona.", img: img(11), mp: "" },
  { id: 12, name: "Zapatillas Trail",             cat: "Calzado",     price: 59900, old: 59900, rating: 4.5, reviews: 380,  free: true,  desc: "Suela con agarre para caminos de tierra y senderos.", img: img(12), mp: "" },

  // ----- Indumentaria Estilo Bakano -----
  { id: 13, name: "Remera Blanca", cat: "Indumentaria Estilo Bakano", price: 15900, old: 15900, rating: 0, reviews: 0, free: false, desc: "Remera Estilo Bakano. Consultá talles y disponibilidad por WhatsApp.", img: "img/indumentaria-estilobakano/remera-blanca.jpg", mp: "" },
  { id: 14, name: "Remera Negra", cat: "Indumentaria Estilo Bakano", price: 15900, old: 15900, rating: 0, reviews: 0, free: false, desc: "Remera Estilo Bakano. Consultá talles y disponibilidad por WhatsApp.", img: "img/indumentaria-estilobakano/remera-negra.jpg", mp: "" },
  { id: 15, name: "Remera Negra 2", cat: "Indumentaria Estilo Bakano", price: 15900, old: 15900, rating: 0, reviews: 0, free: false, desc: "Remera Estilo Bakano. Consultá talles y disponibilidad por WhatsApp.", img: "img/indumentaria-estilobakano/remera-negra-2.jpg", mp: "" },
  { id: 16, name: "Remera Negra 3", cat: "Indumentaria Estilo Bakano", price: 15900, old: 15900, rating: 0, reviews: 0, free: false, desc: "Remera Estilo Bakano. Consultá talles y disponibilidad por WhatsApp.", img: "img/indumentaria-estilobakano/remera-negra-3.jpg", mp: "" },
  { id: 17, name: "Remera Negra 4", cat: "Indumentaria Estilo Bakano", price: 15900, old: 15900, rating: 0, reviews: 0, free: false, desc: "Remera Estilo Bakano. Consultá talles y disponibilidad por WhatsApp.", img: "img/indumentaria-estilobakano/remera-negra-4.jpg", mp: "" }
];
const slides = [
  { t: "Ofertas de primavera", p: "Hasta 40 % de descuento en audio, hogar y tecnología.", cta: "Ver ofertas", href: "#ofertas", img: "https://picsum.photos/seed/banner-1/1600/600" },
  { t: "12 cuotas sin interés", p: "En todos los productos, con tarjeta de crédito.", cta: "Ver productos", href: "#productos", img: "https://picsum.photos/seed/banner-2/1600/600" },
  { t: "Envío gratis en todo el país", p: "En compras desde $50.000. Llegamos hasta tu casa.", cta: "Elegir productos", href: "#destacados", img: "https://picsum.photos/seed/banner-3/1600/600" }
];

const $ = s => document.querySelector(s);
const money = n => n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
const byId = id => products.find(p => p.id === Number(id));
const off = p => Math.round((1 - p.price / p.old) * 100);
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));

let cart = {};
try { cart = JSON.parse(localStorage.getItem("cart") || "{}"); } catch (e) { cart = {}; }
const save = () => { try { localStorage.setItem("cart", JSON.stringify(cart)); } catch (e) {} };

const PLACEHOLDER = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#ececec"/><text x="200" y="205" font-family="sans-serif" font-size="22" fill="#888" text-anchor="middle">Foto próximamente</text></svg>');
document.addEventListener("error", e => {
  const t = e.target;
  if (t.tagName === "IMG" && !t.dataset.fb) { t.dataset.fb = "1"; t.src = PLACEHOLDER; }
}, true);

/* ---------- Banner ---------- */
const hero = $("#hero");
hero.innerHTML = slides.map((s, i) =>
  `<div class="slide${i ? "" : " on"}" style="background-image:url('${s.img}')"><div>
    <h1>${s.t}</h1><p>${s.p}</p><a class="btn" href="${s.href}" style="text-decoration:none;display:inline-block">${s.cta}</a>
  </div></div>`).join("") +
  `<div class="dots">${slides.map((s, i) => `<button type="button" aria-label="Ir a la promoción ${i + 1}" aria-current="${i === 0}"></button>`).join("")}</div>`;
let si = 0, st;
function showSlide(i) {
  si = (i + slides.length) % slides.length;
  hero.querySelectorAll(".slide").forEach((el, k) => el.classList.toggle("on", k === si));
  hero.querySelectorAll(".dots button").forEach((el, k) => el.setAttribute("aria-current", k === si));
}
hero.querySelectorAll(".dots button").forEach((b, k) => b.addEventListener("click", () => { showSlide(k); autoplay(); }));
function autoplay() {
  clearInterval(st);
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) st = setInterval(() => showSlide(si + 1), 5500);
}
hero.addEventListener("mouseenter", () => clearInterval(st));
hero.addEventListener("mouseleave", autoplay);
autoplay();

/* ---------- Tarjeta de producto ---------- */
function card(p) {
  const d = off(p);
  return `<article class="card">
    <button class="pic" data-open="${p.id}" aria-label="Ver ${p.name}"><img src="${p.img}" alt="${p.name}" loading="lazy"></button>
    <div class="body">
      ${d > 0 ? `<span class="badge">${d}% OFF</span>` : ""}
      <button class="name" data-open="${p.id}">${p.name}</button>
      ${d > 0 ? `<span class="old">${money(p.old)}</span>` : ""}
      <span class="now">${money(p.price)}${d > 0 ? `<span class="off">${d}% OFF</span>` : ""}</span>
      <span class="cuotas">${CUOTAS} cuotas de ${money(Math.round(p.price / CUOTAS))} sin interés</span>
      ${p.free || p.price >= FREE_SHIPPING ? `<span class="free">Envío gratis</span>` : ""}
      ${p.reviews > 0 ? `<span class="stars" aria-label="Calificación ${p.rating} de 5">${stars(p.rating)}<small>(${p.reviews})</small></span>` : ""}
      <button class="btn mt" data-add="${p.id}">Agregar al carrito</button>
    </div></article>`;
}

/* ---------- Categorías, ofertas, grilla ---------- */
const cats = ["Todos", ...new Set(products.map(p => p.cat))];
let state = { cat: "Todos", q: "", sort: "rel" };

$("#cats").innerHTML = cats.map(c => `<button class="chip" type="button" data-cat="${c}" aria-pressed="${c === "Todos"}">${c}</button>`).join("");
$("#deals").innerHTML = products.filter(p => off(p) >= 25).sort((a, b) => off(b) - off(a)).slice(0, 7).map(card).join("");

function renderGrid() {
  let list = products.filter(p =>
    (state.cat === "Todos" || p.cat === state.cat) &&
    (!state.q || norm(p.name + " " + p.cat).includes(norm(state.q))));
  if (state.sort === "asc") list.sort((a, b) => a.price - b.price);
  if (state.sort === "desc") list.sort((a, b) => b.price - a.price);
  if (state.sort === "off") list.sort((a, b) => off(b) - off(a));
  $("#results").textContent = list.length + (list.length === 1 ? " resultado" : " resultados");
  $("#grid").innerHTML = list.length ? list.map(card).join("")
    : '<p class="results">No encontramos productos con esa búsqueda. Probá con otra palabra o elegí una categoría.</p>';
  document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c.dataset.cat === state.cat));
}
$("#cats").addEventListener("click", e => {
  const b = e.target.closest("[data-cat]"); if (!b) return;
  state.cat = b.dataset.cat; renderGrid();
  $("#productos").scrollIntoView();
});
$("#sort").addEventListener("change", e => { state.sort = e.target.value; renderGrid(); });
$("#searchForm").addEventListener("submit", e => {
  e.preventDefault(); state.q = $("#q").value.trim(); state.cat = "Todos"; renderGrid();
  $("#productos").scrollIntoView();
});

function tick() {
  const n = new Date(), end = new Date(n); end.setHours(24, 0, 0, 0);
  const s = Math.floor((end - n) / 1000), z = v => String(v).padStart(2, "0");
  $("#timer").textContent = z(Math.floor(s / 3600)) + ":" + z(Math.floor(s % 3600 / 60)) + ":" + z(s % 60);
}
tick(); setInterval(tick, 1000);

/* ---------- Destacados 3D ---------- */
const feats = products.filter(p => p.feat);
const flow = $("#flow");
let cur = 2, sx = null, moved = false;
const fcards = feats.map((p, i) => {
  const b = document.createElement("button");
  b.className = "fc"; b.type = "button"; b.setAttribute("aria-label", p.name);
  b.innerHTML = `<img src="${p.img}" alt="${p.name}" draggable="false">`;
  b.addEventListener("click", () => { if (!moved) go(i); });
  flow.appendChild(b); return b;
});
function go(i) {
  cur = Math.max(0, Math.min(feats.length - 1, i));
  fcards.forEach((c, k) => {
    const o = k - cur, a = Math.abs(o);
    c.style.setProperty("--o", o); c.style.setProperty("--a", a);
    c.dataset.far = a > 2 ? "1" : "";
  });
  const p = feats[cur];
  $("#iCat").textContent = p.cat; $("#iName").textContent = p.name; $("#iPrice").textContent = money(p.price);
  $("#prev").disabled = cur === 0; $("#next").disabled = cur === feats.length - 1;
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
$("#add").addEventListener("click", () => add(feats[cur].id));

/* ---------- Detalle del producto ---------- */
const modal = $("#modal");
function openDetail(id) {
  const p = byId(id), d = off(p);
  modal.innerHTML = `<div class="det">
    <button class="round x" data-close aria-label="Cerrar">×</button>
    <img src="${p.img}" alt="${p.name}">
    <div class="txt">
      <p class="cat">${p.cat}</p>
      <h2>${p.name}</h2>
      ${p.reviews > 0 ? `<span class="stars">${stars(p.rating)}<small>(${p.reviews} opiniones)</small></span>` : ""}
      ${d > 0 ? `<span class="old">${money(p.old)}</span>` : ""}
      <span class="now">${money(p.price)}${d > 0 ? `<span class="off">${d}% OFF</span>` : ""}</span>
      <span class="cuotas">${CUOTAS} cuotas de ${money(Math.round(p.price / CUOTAS))} sin interés</span>
      ${p.free || p.price >= FREE_SHIPPING ? `<span class="free">Envío gratis</span>` : ""}
      <p class="d">${p.desc}</p>
      <div class="acts">
        <button class="btn" data-buy="${p.id}">Comprar ahora</button>
        <button class="btn alt" data-add="${p.id}">Agregar al carrito</button>
        ${p.mp ? `<a class="btn mp" href="${p.mp}" target="_blank" rel="noopener">Pagar con Mercado Pago</a>` : ""}
      </div></div></div>`;
  modal.showModal();
}
modal.addEventListener("click", e => {
  if (e.target === modal || e.target.closest("[data-close]")) modal.close();
  const buy = e.target.closest("[data-buy]");
  if (buy) { add(buy.dataset.buy, true); modal.close(); openCart(true); }
});

document.addEventListener("click", e => {
  const o = e.target.closest("[data-open]"); if (o) return openDetail(o.dataset.open);
  const a = e.target.closest(".card [data-add], dialog [data-add]"); if (a) add(a.dataset.add);
});

/* ---------- Carrito ---------- */
function add(id, silent) {
  cart[id] = (cart[id] || 0) + 1;
  save(); renderCart();
  if (!silent) toast(byId(id).name + " se agregó al carrito");
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
  $("#ship").textContent = !ids.length ? "Envío gratis en compras desde " + money(FREE_SHIPPING)
    : total >= FREE_SHIPPING ? "¡Tu compra tiene envío gratis!"
    : "Te faltan " + money(FREE_SHIPPING - total) + " para tener envío gratis";
}
$("#items").addEventListener("click", e => {
  const b = e.target.closest("button[data-act]"); if (!b) return;
  const id = b.dataset.id;
  if (b.dataset.act === "inc") cart[id]++;
  if (b.dataset.act === "dec") cart[id]--;
  if (b.dataset.act === "del") cart[id] = 0;
  if (cart[id] <= 0) delete cart[id];
  save(); renderCart();
});
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

/* ---------- Comprobante de compra ---------- */
const receipt = $("#receipt");
let order = null;

$("#checkout").addEventListener("click", () => {
  const items = Object.keys(cart).filter(id => cart[id] > 0 && byId(id)).map(id => {
    const p = byId(id);
    return { name: p.name, qty: cart[id], price: p.price };
  });
  if (!items.length) return;
  order = {
    n: "P-" + Date.now().toString(36).toUpperCase().slice(-6),
    date: new Date(),
    items,
    total: items.reduce((t, i) => t + i.price * i.qty, 0)
  };
  openCart(false);
  showReceipt();
});

function showReceipt() {
  const when = order.date.toLocaleString("es-AR", { dateStyle: "long", timeStyle: "short" });
  receipt.innerHTML = `<div class="rc">
    <img src="img/logo.jpg" alt="${STORE}" class="receipt-logo">
    <p class="muted">Comprobante de compra N.º ${order.n}</p>
    <p class="muted">${when}</p>
    <table>
      <thead><tr><th>Producto</th><th>Cant.</th><th>Precio</th><th>Subtotal</th></tr></thead>
      <tbody>${order.items.map(i => `<tr><td>${i.name}</td><td>${i.qty}</td><td>${money(i.price)}</td><td>${money(i.price * i.qty)}</td></tr>`).join("")}</tbody>
    </table>
    <p class="rtotal">Total <strong>${money(order.total)}</strong></p>
    <p class="muted small">Este comprobante es solo un detalle de tu compra y no reemplaza a la factura.</p>
    <div class="acts no-print">
      <button class="btn" type="button" data-send>Enviar pedido por WhatsApp</button>
      <button class="btn alt" type="button" data-print>Imprimir o guardar como PDF</button>
      <button class="btn alt" type="button" data-close>Cerrar</button>
    </div></div>`;
  receipt.showModal();
}

receipt.addEventListener("click", e => {
  if (e.target === receipt || e.target.closest("[data-close]")) receipt.close();
  if (e.target.closest("[data-print]")) window.print();
  if (e.target.closest("[data-send]")) {
    const lines = order.items.map(i => "• " + i.qty + " × " + i.name + " (" + money(i.price * i.qty) + ")");
    sendWhatsApp("Hola, quiero hacer este pedido en " + STORE + " (N.º " + order.n + "):\n" + lines.join("\n") + "\nTotal: " + money(order.total));
    cart = {}; save(); renderCart();
    toast("Pedido enviado. ¡Gracias por tu compra!");
  }
});

$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  sendWhatsApp("Hola, soy " + f.get("nombre") + ". " + f.get("mensaje"));
  e.target.reset();
});

let tt;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(tt); tt = setTimeout(() => el.classList.remove("show"), 2200);
}

go(cur);
renderGrid();
renderCart();