"use client";

const services = [
  {
    title: "⚡ Presencia Digital Inteligente",
    price: "120.000 COP",
    desc: "Tu negocio aparece optimizado en redes y buscadores automáticamente.",
    features: [
      "Perfil optimizado IA",
      "SEO local automático",
      "Diseño de marca básico",
      "Visibilidad en NegoLink",
    ],
  },
  {
    title: "📣 Ads Automatizados IA",
    price: "280.000 COP",
    desc: "Publicidad que se optimiza sola según resultados en tiempo real.",
    features: [
      "Campañas Facebook/Instagram",
      "Optimización automática",
      "Segmentación IA",
      "Reporte semanal",
    ],
  },
  {
    title: "🧠 Growth IA",
    price: "590.000 COP",
    desc: "Sistema que analiza tu negocio y crea estrategias de crecimiento.",
    features: [
      "Análisis de negocio IA",
      "Estrategias automáticas",
      "Embudo de ventas",
      "Predicción de crecimiento",
    ],
  },
  {
    title: "🎯 Viral Boost",
    price: "450.000 COP",
    desc: "Convierte tu negocio en tendencia con contenido viral.",
    features: [
      "Ideas virales IA",
      "Contenido corto optimizado",
      "Estrategia TikTok/IG Reels",
      "Boost de alcance local",
    ],
  },
  {
    title: "🤖 Autopiloto de Ventas",
    price: "850.000 COP",
    desc: "Sistema completo que atrae, convierte y fideliza clientes solo.",
    features: [
      "Chat automatizado IA",
      "Respuestas inteligentes",
      "Sistema de leads",
      "Optimización continua",
    ],
  },
];

const insights = [
  "El 80% de negocios en 2026 usan automatización IA",
  "Los videos cortos generan 3x más ventas locales",
  "Los negocios con SEO local venden más rápido",
  "La atención automática aumenta conversiones",
];

export default function MarketingPage() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
        <h1 className="text-xl font-bold text-white">
          📣 Marketing Digital IA
        </h1>
        <p className="text-xs text-white/50 mt-1">
          Sistema de crecimiento automatizado para negocios en tiempo real
        </p>
      </div>

      {/* IA CORE */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#a449a3]/10 to-[#2dd4bf]/10 p-5">

        <h3 className="text-white font-semibold">
          🧠 Motor IA de Crecimiento
        </h3>

        <p className="text-xs text-white/60 mt-2">
          Analizamos tu negocio y activamos estrategias automáticas de ventas, publicidad y crecimiento.
        </p>

        <button className="mt-3 px-4 py-2 rounded-lg bg-[#2dd4bf]/20 border border-[#2dd4bf]/30 text-xs text-[#2dd4bf] hover:bg-[#2dd4bf]/30 transition">
          Generar estrategia IA
        </button>

      </div>

      {/* SERVICES */}
      <div className="grid md:grid-cols-3 gap-3">

        {services.map((s, i) => (
          <div
            key={i}
            className="
              p-4 rounded-2xl
              bg-black/40 border border-white/10
              hover:border-[#2dd4bf]
              transition
            "
          >

            <h2 className="text-white font-semibold">
              {s.title}
            </h2>

            <p className="text-xs text-[#2dd4bf] mt-1">
              {s.price}
            </p>

            <p className="text-xs text-white/50 mt-2">
              {s.desc}
            </p>

            <ul className="mt-3 space-y-1 text-xs text-white/40">
              {s.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <button className="mt-4 w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs transition">
              Activar servicio
            </button>

          </div>
        ))}

      </div>

      {/* INSIGHTS */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-5">

        <h3 className="text-white font-semibold">
          💡 Insights IA del mercado
        </h3>

        <div className="mt-3 space-y-2">
          {insights.map((t, i) => (
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