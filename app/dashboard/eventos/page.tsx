"use client";

const events = [
  {
    title: "Feria de Emprendimiento Duitama 2026",
    date: "12 Jul 2026",
    location: "Centro de Convenciones",
    type: "Negocios",
    trending: true,
  },
  {
    title: "Festival Gastronómico Boyacá",
    date: "18 Jul 2026",
    location: "Plaza Principal",
    type: "Cultural",
    trending: true,
  },
  {
    title: "Networking de Startups Locales",
    date: "22 Jul 2026",
    location: "Cámara de Comercio",
    type: "Tecnología",
    trending: false,
  },
  {
    title: "Feria de Empleo y Servicios",
    date: "28 Jul 2026",
    location: "Universidad Pedagógica",
    type: "Educación",
    trending: false,
  },
];

const filters = [
  "Todos",
  "Negocios",
  "Cultural",
  "Tecnología",
  "Educación",
];

export default function EventsPage() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
        <h1 className="text-xl font-bold text-white">
          🎉 Eventos NegoLink
        </h1>
        <p className="text-xs text-white/40">
          Descubre eventos, ferias y oportunidades de networking en tiempo real
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            className="
              px-3 py-1 text-xs rounded-full
              bg-black/40 border border-white/10
              hover:bg-white/10 transition
            "
          >
            {f}
          </button>
        ))}
      </div>

      {/* EVENTS FEED */}
      <div className="space-y-3">

        {events.map((e, i) => (
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
            <div className="flex items-center justify-between mb-2">

              <span className="text-[10px] text-white/40">
                {e.type}
              </span>

              {e.trending && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-[#a449a3]/20 text-[#a449a3] border border-[#a449a3]/30">
                  🔥 Popular
                </span>
              )}

            </div>

            {/* TITLE */}
            <h2 className="text-white font-semibold">
              {e.title}
            </h2>

            {/* INFO */}
            <div className="mt-2 text-xs text-white/50 space-y-1">
              <p>📅 {e.date}</p>
              <p>📍 {e.location}</p>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-between mt-3 text-xs text-white/40">

              <button className="hover:text-[#2dd4bf] transition">
                Ver detalles →
              </button>

              <button className="hover:text-white transition">
                + Guardar
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* AI INSIGHT */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#a449a3]/10 to-[#2dd4bf]/10 p-4">

        <h3 className="text-white font-semibold">
          🧠 IA Eventos
        </h3>

        <p className="text-xs text-white/60 mt-2">
          La IA detecta eventos donde puedes encontrar clientes, proveedores o aliados estratégicos.
        </p>

      </div>

    </div>
  );
}