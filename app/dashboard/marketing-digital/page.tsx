"use client";

const plans = [
  {
    title: "🚀 Plan Inicio",
    price: "150.000 COP",
    desc: "Ideal para pequeños negocios que quieren presencia digital.",
    features: ["Redes sociales", "Diseño básico", "Publicidad local"],
  },
  {
    title: "📈 Plan Crecimiento",
    price: "350.000 COP",
    desc: "Para negocios que quieren aumentar ventas.",
    features: ["Ads en Facebook/Instagram", "Contenido semanal", "SEO básico"],
  },
  {
    title: "🧠 Plan IA Growth",
    price: "750.000 COP",
    desc: "Automatización + IA para escalar ventas.",
    features: ["IA marketing", "Automatización", "Funnels de ventas", "Analítica"],
  },
];

const tips = [
  "Publica contenido 3 veces por semana",
  "Usa videos cortos para vender más",
  "Optimiza tu perfil de negocio",
  "Responde mensajes en menos de 5 min",
];

export default function MarketingPage() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
        <h1 className="text-xl font-bold text-white">
          📣 Marketing Digital
        </h1>
        <p className="text-xs text-white/40">
          Impulsa negocios con estrategias, publicidad e inteligencia artificial
        </p>
      </div>

      {/* IA INSIGHT */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#a449a3]/10 to-[#2dd4bf]/10 p-4">

        <h3 className="text-white font-semibold">
          🧠 IA Marketing Assistant
        </h3>

        <p className="text-xs text-white/60 mt-2">
          La IA analiza tu negocio y recomienda estrategias para aumentar ventas automáticamente.
        </p>

        <button className="mt-3 px-3 py-2 rounded-lg bg-[#2dd4bf]/20 border border-[#2dd4bf]/30 text-xs text-[#2dd4bf] hover:bg-[#2dd4bf]/30 transition">
          Generar estrategia
        </button>

      </div>

      {/* PLANS */}
      <div className="grid md:grid-cols-3 gap-3">

        {plans.map((p, i) => (
          <div
            key={i}
            className="
              p-4 rounded-2xl
              bg-black/40 border border-white/10
              hover:border-[#a449a3]
              transition
            "
          >

            <h2 className="text-white font-semibold">
              {p.title}
            </h2>

            <p className="text-xs text-[#2dd4bf] mt-1">
              {p.price}
            </p>

            <p className="text-xs text-white/50 mt-2">
              {p.desc}
            </p>

            <ul className="mt-3 space-y-1 text-xs text-white/40">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <button className="mt-4 w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs transition">
              Seleccionar
            </button>

          </div>
        ))}

      </div>

      {/* TIPS */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">

        <h3 className="text-white font-semibold">
          💡 Tips rápidos de marketing
        </h3>

        <div className="mt-3 space-y-2">
          {tips.map((t, i) => (
            <div
              key={i}
              className="text-xs text-white/50 border-l border-[#2dd4bf]/40 pl-3"
            >
              {t}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}