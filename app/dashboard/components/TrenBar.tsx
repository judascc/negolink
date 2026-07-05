"use client";

import { useState } from "react";

const trends = [
  { label: "Tendencias", icon: "📊" },
  { label: "Ofertas", icon: "🔥" },
  { label: "Lo nuevo", icon: "✨" },
  { label: "Viralidad", icon: "⚡" },
  { label: "Top negocios", icon: "🏆" },
  { label: "IA Market", icon: "🧠" },
];

const feedData: Record<string, any[]> = {
  Tendencias: [
    { title: "Cafeterías en auge", desc: "Negocios creciendo en Duitama", icon: "☕" },
    { title: "Servicios digitales", desc: "Alta demanda local", icon: "💻" },
    { title: "Comida rápida", desc: "Top ventas", icon: "🍔" },
    { title: "Transporte", desc: "Nuevas rutas", icon: "🚗" },
    { title: "Moda urbana", desc: "Tendencia activa", icon: "👕" },
  ],

  Ofertas: [
    { title: "50% cafés", desc: "Promoción activa", icon: "🔥" },
    { title: "Hosting barato", desc: "Desde $5", icon: "💾" },
    { title: "Publicidad gratis", desc: "Starter plan", icon: "📢" },
    { title: "Cursos IA", desc: "Acceso limitado", icon: "🧠" },
    { title: "Delivery gratis", desc: "Hoy solo", icon: "📦" },
  ],

  "Lo nuevo": [
    { title: "App IA local", desc: "Nuevo lanzamiento", icon: "🚀" },
    { title: "Fintech startup", desc: "En crecimiento", icon: "💡" },
    { title: "Marketplace beta", desc: "Nuevo ecosistema", icon: "🛒" },
    { title: "Pagos digitales", desc: "Actualización", icon: "💳" },
    { title: "Chat negocios", desc: "Nuevo sistema", icon: "💬" },
  ],

  Viralidad: [
    { title: "Negocio viral", desc: "TikTok boost", icon: "📈" },
    { title: "Producto trending", desc: "Alta demanda", icon: "🔥" },
    { title: "Campaña viral", desc: "Marketing fuerte", icon: "⚡" },
    { title: "Influencers", desc: "Impulso local", icon: "🎥" },
    { title: "Contenido top", desc: "Engagement alto", icon: "💥" },
  ],

  "Top negocios": [
    { title: "Restaurantes", desc: "Ranking activo", icon: "🏆" },
    { title: "Servicios elite", desc: "Mejor reputación", icon: "⭐" },
    { title: "Empresas top", desc: "2026 ranking", icon: "🏢" },
    { title: "Freelancers", desc: "Alta demanda", icon: "🧑‍💻" },
    { title: "Proveedores", desc: "Líderes locales", icon: "📊" },
  ],

  "IA Market": [
    { title: "IA negocios", desc: "Automatización", icon: "🤖" },
    { title: "Recomendador", desc: "Smart system", icon: "🧠" },
    { title: "Predicción ventas", desc: "AI analytics", icon: "📈" },
    { title: "Chatbots", desc: "Auto atención", icon: "💬" },
    { title: "Optimización", desc: "IA performance", icon: "⚙️" },
  ],
};

export default function TrendBarMinimal() {
  const [active, setActive] = useState("Tendencias");

  return (
    <div className="space-y-3">

      {/* ================= CHIPS ================= */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">

        {trends.map((item) => {
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs
                border transition whitespace-nowrap
                hover:scale-[1.02] active:scale-95
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#a449a3] to-[#2dd4bf] text-black font-semibold border-transparent"
                    : "bg-black/30 text-white/70 border-white/10 hover:bg-white/10"
                }
              `}
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </button>
          );
        })}

      </div>
      <div className="border-t border-white/10 my-1" />

      {/* ================= FEED ================= */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">

        {feedData[active].map((item, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-white/10 bg-black/30 hover:bg-black/50 transition"
          >

            <div className="text-lg">{item.icon}</div>

            <h3 className="text-white text-xs font-semibold mt-1">
              {item.title}
            </h3>

            <p className="text-white/40 text-[10px] mt-1 leading-tight">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}