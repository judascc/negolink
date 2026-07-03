"use client";

const news = [
  {
    title: "Nuevo crecimiento de negocios digitales en Duitama",
    category: "Economía local",
    time: "Hace 2h",
    trend: true,
  },
  {
    title: "Aumenta el uso de IA en pequeños comercios",
    category: "Tecnología",
    time: "Hace 4h",
    trend: true,
  },
  {
    title: "Nuevas oportunidades para emprendedores en Boyacá",
    category: "Emprendimiento",
    time: "Hace 6h",
    trend: false,
  },
  {
    title: "Transporte local mejora su digitalización en 2026",
    category: "Movilidad",
    time: "Hace 1 día",
    trend: false,
  },
];

const categories = [
  "Todas",
  "Economía",
  "Tecnología",
  "Emprendimiento",
  "Movilidad",
  "Salud",
];

export default function NewsPage() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
        <h1 className="text-xl font-bold text-white">
          📰 Noticias NegoLink
        </h1>
        <p className="text-xs text-white/40">
          Información en tiempo real sobre negocios, economía y oportunidades
        </p>
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

      {/* MAIN FEED */}
      <div className="space-y-3">

        {news.map((item, i) => (
          <div
            key={i}
            className="
              p-4 rounded-2xl
              bg-black/40 border border-white/10
              hover:border-[#2dd4bf]
              transition
            "
          >

            {/* TOP INFO */}
            <div className="flex items-center justify-between mb-2">

              <span className="text-[10px] text-white/40">
                {item.category}
              </span>

              {item.trend && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-[#a449a3]/20 text-[#a449a3] border border-[#a449a3]/30">
                  🔥 Trending
                </span>
              )}

            </div>

            {/* TITLE */}
            <h2 className="text-white font-semibold">
              {item.title}
            </h2>

            {/* FOOTER */}
            <div className="flex justify-between mt-3 text-xs text-white/40">
              <span>{item.time}</span>

              <button className="hover:text-white transition">
                Leer más →
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* SIDEBAR INFO CARD */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#a449a3]/10 to-[#2dd4bf]/10 p-4">
        <h3 className="text-white font-semibold">
          🧠 IA News Insight
        </h3>
        <p className="text-xs text-white/60 mt-2">
          Esta sección analiza noticias locales para detectar oportunidades de negocio automáticamente.
        </p>
      </div>

    </div>
  );
}