"use client";

const products = [
  {
    name: "Arepas artesanales Boyacá",
    price: "12.000 COP",
    store: "Sabor Duitama",
    rating: 4.9,
    tag: "🥇 Local",
    location: "Duitama Centro",
  },
  {
    name: "Zapatos cuero hechos a mano",
    price: "180.000 COP",
    store: "Cuero Boyacense",
    rating: 4.8,
    tag: "🧵 Artesanal",
    location: "Plaza de mercado",
  },
  {
    name: "Tienda online para negocios locales",
    price: "350.000 COP",
    store: "NegoLink Studio",
    rating: 5.0,
    tag: "🚀 Digital",
    location: "Duitama",
  },
  {
    name: "Café orgánico Boyacá",
    price: "25.000 COP",
    store: "Café Sierra",
    rating: 4.7,
    tag: "☕ Orgánico",
    location: "Paipa / Duitama",
  },
];

const categories = [
  "Todos",
  "Comida local",
  "Artesanías",
  "Moda",
  "Servicios digitales",
  "Agricultura",
  "Tecnología",
];

export default function EcommerceDuitama() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">

        <h1 className="text-xl font-bold text-white">
          🛒 Ecommerce Duitama - Boyacá
        </h1>

        <p className="text-xs text-white/40">
          Compra y vende productos locales, negocios y servicios de la región
        </p>

      </div>

      {/* IA INSIGHT */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#a449a3]/10 to-[#2dd4bf]/10 p-4">

        <h3 className="text-white font-semibold">
          🧠 IA Mercado Local
        </h3>

        <p className="text-xs text-white/60 mt-2">
          La IA detecta productos más vendidos en Duitama y Boyacá en tiempo real.
        </p>

        <button className="mt-3 px-3 py-2 rounded-lg bg-[#2dd4bf]/20 border border-[#2dd4bf]/30 text-xs text-[#2dd4bf] hover:bg-[#2dd4bf]/30 transition">
          Ver oportunidades locales
        </button>

      </div>

      {/* CATEGORIES */}
      <div className="flex flex-wrap gap-2">

        {categories.map((c) => (
          <button
            key={c}
            className="
              px-3 py-1 text-xs rounded-full
              bg-black/40 border border-white/10
              hover:bg-white/10 transition
            "
          >
            {c}
          </button>
        ))}

      </div>

      {/* PRODUCTS */}
      <div className="grid md:grid-cols-2 gap-3">

        {products.map((p, i) => (
          <div
            key={i}
            className="
              p-4 rounded-2xl
              bg-black/40 border border-white/10
              hover:border-[#2dd4bf]
              transition
            "
          >

            {/* TOP */}
            <div className="flex justify-between items-center mb-2">

              <span className="text-[10px] text-[#2dd4bf]">
                {p.tag}
              </span>

              <span className="text-[10px] text-white/40">
                ⭐ {p.rating}
              </span>

            </div>

            {/* PRODUCT */}
            <h2 className="text-white font-semibold">
              {p.name}
            </h2>

            <p className="text-xs text-white/40 mt-1">
              🏪 {p.store}
            </p>

            <p className="text-[10px] text-white/30 mt-1">
              📍 {p.location}
            </p>

            {/* PRICE */}
            <p className="text-sm text-[#a449a3] font-semibold mt-2">
              {p.price}
            </p>

            {/* ACTIONS */}
            <div className="flex gap-2 mt-4">

              <button className="
                flex-1 px-3 py-2 rounded-lg
                bg-white/10 hover:bg-white/20
                text-xs transition
              ">
                Ver
              </button>

              <button className="
                flex-1 px-3 py-2 rounded-lg
                bg-gradient-to-r from-[#a449a3] to-[#2dd4bf]
                text-black text-xs font-semibold
                hover:scale-105 transition
              ">
                Comprar
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* FOOTER INSIGHT */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">

        <h3 className="text-white font-semibold">
          📊 Economía local Duitama
        </h3>

        <p className="text-xs text-white/50 mt-2">
          Los productos artesanales y alimentos locales dominan el comercio digital en Boyacá.
        </p>

      </div>

    </div>
  );
}