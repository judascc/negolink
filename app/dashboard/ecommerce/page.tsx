"use client";

const products = [
  {
    name: "Kit Emprendedor Digital",
    price: "120.000 COP",
    store: "NegoLink Store",
    rating: 4.8,
    tag: "🔥 Top ventas",
  },
  {
    name: "Tienda online lista en 48h",
    price: "350.000 COP",
    store: "Dev Studio Boyacá",
    rating: 4.9,
    tag: "⚡ Rápido",
  },
  {
    name: "Curso Ecommerce desde cero",
    price: "80.000 COP",
    store: "Academia Digital",
    rating: 4.7,
    tag: "📚 Educación",
  },
  {
    name: "Pack Dropshipping automático",
    price: "250.000 COP",
    store: "Smart Dropship",
    rating: 4.6,
    tag: "🚀 Escalable",
  },
];

const categories = [
  "Todos",
  "Dropshipping",
  "Servicios digitales",
  "Cursos",
  "Herramientas",
  "Plantillas",
];

export default function EcommercePage() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
        <h1 className="text-xl font-bold text-white">
          🛒 Ecommerce Inteligente
        </h1>
        <p className="text-xs text-white/40">
          Compra, vende y crea negocios digitales dentro del ecosistema NegoLink
        </p>
      </div>

      {/* IA INSIGHT */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#a449a3]/10 to-[#2dd4bf]/10 p-4">

        <h3 className="text-white font-semibold">
          🧠 IA Ecommerce Assistant
        </h3>

        <p className="text-xs text-white/60 mt-2">
          La IA detecta productos con alto potencial de venta en tu región.
        </p>

        <button className="mt-3 px-3 py-2 rounded-lg bg-[#a449a3]/20 border border-[#a449a3]/30 text-xs text-[#a449a3] hover:bg-[#a449a3]/30 transition">
          Analizar mercado
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

      {/* PRODUCTS GRID */}
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

            {/* TAG */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-[#2dd4bf]">
                {p.tag}
              </span>
              <span className="text-[10px] text-white/40">
                ⭐ {p.rating}
              </span>
            </div>

            {/* PRODUCT NAME */}
            <h2 className="text-white font-semibold">
              {p.name}
            </h2>

            {/* STORE */}
            <p className="text-xs text-white/40 mt-1">
              🏪 {p.store}
            </p>

            {/* PRICE */}
            <p className="text-sm text-[#a449a3] mt-2 font-semibold">
              {p.price}
            </p>

            {/* ACTIONS */}
            <div className="flex gap-2 mt-4">

              <button className="
                flex-1 px-3 py-2 rounded-lg
                bg-white/10 hover:bg-white/20
                text-xs transition
              ">
                Ver detalle
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
          📊 Insight de mercado
        </h3>

        <p className="text-xs text-white/50 mt-2">
          Los productos digitales están creciendo más rápido en tu región que los físicos.
        </p>

      </div>

    </div>
  );
}