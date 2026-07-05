"use client";

const products = [
  {
    name: "⚡ Landing IA Converter",
    price: "180.000 COP",
    desc: "Landing page optimizada para convertir visitas en clientes automáticamente.",
    features: [
      "Diseño IA optimizado",
      "CTA de alta conversión",
      "Integración WhatsApp",
      "Hosting incluido",
    ],
    tag: "🔥 Alta conversión",
  },
  {
    name: "🛒 Tienda Online Full Stack",
    price: "450.000 COP",
    desc: "Tienda completa lista para vender productos físicos o digitales.",
    features: [
      "Carrito de compras",
      "Panel de administración",
      "Pagos integrados",
      "Hosting + dominio setup",
    ],
    tag: "⚡ Lista para vender",
  },
  {
    name: "🧠 Blog SEO Automático",
    price: "220.000 COP",
    desc: "Blog que genera tráfico orgánico con artículos optimizados por IA.",
    features: [
      "SEO automático",
      "Generación de artículos IA",
      "Indexación Google",
      "Optimización keywords",
    ],
    tag: "📈 Tráfico orgánico",
  },
  {
    name: "🚀 Negocio Digital Completo",
    price: "890.000 COP",
    desc: "Sistema completo: landing + blog + tienda + automatización.",
    features: [
      "Web completa empresarial",
      "Automatización IA",
      "Hosting + dominio",
      "Mantenimiento mensual",
    ],
    tag: "💎 Premium",
  },
];

const categories = [
  "Todos",
  "Landing Pages",
  "Tiendas Online",
  "Blogs SEO",
  "Negocios completos",
];

export default function EcommercePage() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
        <h1 className="text-xl font-bold text-white">
          🛒 Infraestructura Ecommerce IA
        </h1>
        <p className="text-xs text-white/50 mt-1">
          Construimos negocios digitales completos listos para vender en 24-72h
        </p>
      </div>

      {/* IA CORE */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#a449a3]/10 to-[#2dd4bf]/10 p-5">

        <h3 className="text-white font-semibold">
          🧠 Motor IA de Ecommerce
        </h3>

        <p className="text-xs text-white/60 mt-2">
          Detectamos tu idea y la convertimos en un negocio digital funcional automáticamente.
        </p>

        <button className="mt-3 px-4 py-2 rounded-lg bg-[#a449a3]/20 border border-[#a449a3]/30 text-xs text-[#a449a3] hover:bg-[#a449a3]/30 transition">
          Analizar idea de negocio
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
            </div>

            {/* NAME */}
            <h2 className="text-white font-semibold">
              {p.name}
            </h2>

            {/* PRICE */}
            <p className="text-sm text-[#a449a3] mt-1 font-semibold">
              {p.price}
            </p>

            {/* DESC */}
            <p className="text-xs text-white/50 mt-2">
              {p.desc}
            </p>

            {/* FEATURES */}
            <ul className="mt-3 space-y-1 text-xs text-white/40">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            {/* ACTIONS */}
            <div className="flex gap-2 mt-4">

              <button className="
                flex-1 px-3 py-2 rounded-lg
                bg-white/10 hover:bg-white/20
                text-xs transition
              ">
                Ver demo
              </button>

              <button className="
                flex-1 px-3 py-2 rounded-lg
                bg-gradient-to-r from-[#a449a3] to-[#2dd4bf]
                text-black text-xs font-semibold
                hover:scale-105 transition
              ">
                Solicitar
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* INSIGHT */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-5">

        <h3 className="text-white font-semibold">
          📊 Insight IA
        </h3>

        <p className="text-xs text-white/50 mt-2">
          En 2026 los negocios sin presencia digital pierden hasta 70% de clientes potenciales locales.
        </p>

      </div>

    </div>
  );
}