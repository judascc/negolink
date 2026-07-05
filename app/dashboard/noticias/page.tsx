"use client";

import { useMemo, useState, useEffect } from "react";

type Impact = "alto" | "medio" | "bajo";

type NewsItem = {
  title: string;
  category: string;
  time: string;
  impact: Impact;
};

const baseNews: NewsItem[] = [
  {
    title: "Nuevo crecimiento de negocios digitales en Duitama",
    category: "Economía local",
    time: "Hace 2h",
    impact: "alto",
  },
  {
    title: "Aumenta el uso de IA en pequeños comercios",
    category: "Tecnología",
    time: "Hace 4h",
    impact: "alto",
  },
  {
    title: "Nuevas oportunidades para emprendedores en Boyacá",
    category: "Emprendimiento",
    time: "Hace 6h",
    impact: "medio",
  },
  {
    title: "Transporte local mejora su digitalización en 2026",
    category: "Movilidad",
    time: "Hace 1 día",
    impact: "medio",
  },
];

const categories = [
  "Todo",
  "Economía",
  "Tecnología",
  "Emprendimiento",
  "Movilidad",
  "Salud",
];

export default function NewsPage() {
  const [active, setActive] = useState<string>("Todo");
  const [tick, setTick] = useState(0);

  // ⚡ simulación tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 🧠 filtro inteligente
  const filteredNews = useMemo(() => {
    if (active === "Todo") return baseNews;

    return baseNews.filter((n) =>
      n.category.toLowerCase().includes(active.toLowerCase())
    );
  }, [active]);

  // 🧠 scoring seguro (FIX DEL ERROR)
  const impactScore: Record<Impact, number> = {
    alto: 3,
    medio: 2,
    bajo: 1,
  };

  // 🧠 orden inteligente
  const sortedNews = useMemo(() => {
    return [...filteredNews].sort((a, b) => {
      return impactScore[b.impact] - impactScore[a.impact];
    });
  }, [filteredNews, tick]);

  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
        <h1 className="text-xl font-bold text-white">
          🧠 Radar Económico IA
        </h1>
        <p className="text-xs text-white/50 mt-1">
          Detecta oportunidades de negocio en tiempo real
        </p>
      </div>

      {/* STATUS */}
      <div className="flex justify-between text-xs text-white/40">
        <span>⚡ Live feed activo</span>
        <span className="text-[#2dd4bf]">● en línea</span>
      </div>

      {/* CATEGORIES */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = active === c;

          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`
                px-3 py-1 text-xs rounded-full border transition
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#a449a3] to-[#2dd4bf] text-black border-transparent"
                    : "bg-black/40 border-white/10 text-white/60 hover:text-white"
                }
              `}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* FEED */}
      <div className="space-y-3">

        {sortedNews.map((item, i) => (
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
            <div className="flex justify-between mb-2">

              <span className="text-[10px] text-white/40">
                {item.category}
              </span>

              <span
                className={`
                  text-[10px] px-2 py-1 rounded-full border
                  ${
                    item.impact === "alto"
                      ? "text-red-400 border-red-400/30"
                      : item.impact === "medio"
                      ? "text-[#2dd4bf] border-[#2dd4bf]/30"
                      : "text-white/40 border-white/10"
                  }
                `}
              >
                {item.impact === "alto"
                  ? "🚨 Alta señal"
                  : item.impact === "medio"
                  ? "📊 Señal media"
                  : "⚪ Baja señal"}
              </span>

            </div>

            {/* TITLE */}
            <h2 className="text-white font-semibold">
              {item.title}
            </h2>

            {/* FOOTER */}
            <div className="flex justify-between mt-3 text-xs text-white/40">
              <span>{item.time}</span>
              <button className="hover:text-white transition">
                Analizar →
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* INSIGHT */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#a449a3]/10 to-[#2dd4bf]/10 p-5">

        <h3 className="text-white font-semibold">
          🧠 IA Insight Engine
        </h3>

        <p className="text-xs text-white/60 mt-2">
          Detectamos señales económicas en tiempo real para identificar oportunidades de negocio antes del mercado.
        </p>

      </div>

    </div>
  );
}