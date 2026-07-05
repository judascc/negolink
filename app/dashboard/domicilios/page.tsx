"use client";

const logistics = [
  {
    title: "🍔 Pedido inteligente Restaurante Central",
    time: "En ruta optimizada",
    status: "Asignado por IA",
    price: "8.000 COP",
    type: "Food",
    priority: "Alta demanda",
  },
  {
    title: "💊 Entrega Farmacia San José",
    time: "15 min estimado",
    status: "Repartidor en camino",
    price: "5.000 COP",
    type: "Salud",
    priority: "Urgente",
  },
  {
    title: "📦 Paquete Ecommerce ModaStyle",
    time: "Ruta optimizada",
    status: "Centro de distribución",
    price: "10.000 COP",
    type: "Ecommerce",
    priority: "Normal",
  },
  {
    title: "🛍️ Compra Supermercado Express",
    time: "Asignación automática",
    status: "Esperando pickup",
    price: "7.000 COP",
    type: "Retail",
    priority: "Media",
  },
];

const actions = [
  "🍔 Solicitar comida",
  "💊 Farmacia express",
  "📦 Enviar paquete",
  "🛍️ Compras locales",
  "🚀 Envío rápido IA",
  "📍 Ver repartidores",
];

export default function DomiciliosPage() {
  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
        <h1 className="text-xl font-bold text-white">
          🚚 Red Logística Inteligente
        </h1>
        <p className="text-xs text-white/50 mt-1">
          Sistema de domicilios conectado en tiempo real con IA, GPS y demanda local
        </p>
      </div>

      {/* IA CORE */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#2dd4bf]/10 to-[#a449a3]/10 p-5">

        <h3 className="text-white font-semibold">
          🧠 Motor de Rutas IA
        </h3>

        <p className="text-xs text-white/60 mt-2">
          Asignamos repartidores, optimizamos rutas y reducimos tiempos automáticamente según tráfico y demanda.
        </p>

        <button className="mt-3 px-4 py-2 rounded-lg bg-[#2dd4bf]/20 border border-[#2dd4bf]/30 text-xs text-[#2dd4bf] hover:bg-[#2dd4bf]/30 transition">
          Optimizar red logística
        </button>

      </div>

      {/* LIVE STATUS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

        {actions.map((a) => (
          <button
            key={a}
            className="
              p-3 rounded-xl text-xs
              bg-black/40 border border-white/10
              hover:border-[#2dd4bf]
              transition
            "
          >
            {a}
          </button>
        ))}

      </div>

      {/* LIVE LOGISTICS FEED */}
      <div className="space-y-3">

        {logistics.map((d, i) => (
          <div
            key={i}
            className="
              p-4 rounded-2xl
              bg-black/40 border border-white/10
              hover:border-[#a449a3]
              transition
            "
          >

            {/* TOP */}
            <div className="flex justify-between text-xs mb-2">

              <span className="text-white/40">
                {d.type}
              </span>

              <span className="text-[#2dd4bf]">
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

            {/* PRIORITY TAG */}
            <div className="mt-2">
              <span className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/50">
                ⚡ {d.priority}
              </span>
            </div>

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

      {/* INSIGHT */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-5">

        <h3 className="text-white font-semibold">
          📊 Insight logístico IA
        </h3>

        <p className="text-xs text-white/50 mt-2">
          El 72% de las entregas se concentran en comida, farmacia y ecommerce local en tiempo real.
        </p>

      </div>

    </div>
  );
}