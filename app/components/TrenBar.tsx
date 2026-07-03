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

export default function TrendBar() {
  const [active, setActive] = useState("Tendencias");

  return (
    <div className="flex flex-wrap gap-2 items-center">

      {/* LABEL */}
      <div className="text-xs text-white/40 mr-2 hidden md:block">
        Filtrar:
      </div>

      {trends.map((item) => {
        const isActive = active === item.label;

        return (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm
              border transition-all duration-300
              ${
                isActive
                  ? "bg-gradient-to-r from-[#a449a3] to-[#2dd4bf] text-black font-semibold border-transparent scale-[1.03]"
                  : "bg-black/40 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>

            {/* active glow dot */}
            {isActive && (
              <span className="w-2 h-2 rounded-full bg-black/40 ml-1 animate-pulse" />
            )}
          </button>
        );
      })}

      {/* LIVE INDICATOR */}
      <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-white/40">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Live data
      </div>
    </div>
  );
}