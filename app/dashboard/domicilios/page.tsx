"use client";

const deliveries = [
  {
    title: "Pedido de Restaurante Central",
    time: "25 min",
    status: "En camino",
    price: "8.000 COP",
    type: "Comida",
  },
  {
    title: "Compra Farmacia San José",
    time: "15 min",
    status: "Preparando",
    price: "5.000 COP",
    type: "Salud",
  },
  {
    title: "Paquete Tienda ModaStyle",
    time: "40 min",
    status: "Pendiente",
    price: "10.000 COP",
    type: "Ecommerce",
  },
];

const quickActions = [
  "🍔 Pedir comida",
  "💊 Farmacia a domicilio",
  "🛍️ Compras rápidas",
  "📦 Enviar paquete",
];

export default function DomiciliosPage() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
        <h1 className="text-xl font-bold text-white">
          🚚 Domicilios Inteligentes
        </h1>
        <p className="text-xs text-white/40">
          Conecta negocios, repartidores y usuarios en tiempo real
        </p>
      </div>

      {/* IA PANEL */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#2dd4bf]/10 to-[#a449a3]/10 p-4">

        <h3 className="text-white font-semibold">
          🧠 IA Logística
        </h3>

        <p className="text-xs text-white/60 mt-2">
          Optimiza rutas, reduce tiempos y asigna repartidores automáticamente.
        </p>

        <button className="mt-3 px-3 py-2 rounded-lg bg-[#2dd4bf]/20 border border-[#2dd4bf]/30 text-xs text-[#2dd4bf] hover:bg-[#2dd4bf]/30 transition">
          Optimizar sistema
        </button>

      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

        {quickActions.map((a) => (
          <button
            key={a}
            className="
              p-3 rounded-xl text-xs
              bg-black/40 border border-white/10
              hover:border-[#a449a3]
              transition
            "
          >
            {a}
          </button>
        ))}

      </div>

      {/* DELIVERY LIST */}
      <div className="space-y-3">

        {deliveries.map((d, i) => (
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

              <span className="text-[10px] text-white/40">
                {d.type}
              </span>

              <span className="text-[10px] text-[#2dd4bf]">
                ⏱ {d.time}
              </span>

            </div>

            {/* TITLE */}
            <h2 className="text-white font-semibold">
              {d.title}
            </h2>

            {/* STATUS */}
            <p className="text-xs text-white/50 mt-1">
              Estado: {d.status}
            </p>

            {/* FOOTER */}
            <div className="flex justify-between mt-3 text-xs">

              <span className="text-white/40">
                💰 {d.price}
              </span>

              <button className="text-[#a449a3] hover:text-white transition">
                Ver tracking →
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* FOOTER INSIGHT */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">

        <h3 className="text-white font-semibold">
          📊 Insight logístico
        </h3>

        <p className="text-xs text-white/50 mt-2">
          El 68% de los domicilios en tu región son de comida y farmacias.
        </p>

      </div>

    </div>
  );
}