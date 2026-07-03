"use client";

import { useState } from "react";

const businesses = [
  { id: 1, name: "Negocio Alfa", category: "Ecommerce" },
  { id: 2, name: "Negocio Beta", category: "Servicios" },
  { id: 3, name: "Negocio Gamma", category: "Tecnología" },
];

export default function BusinessFeed() {
  const [likes, setLikes] = useState<number[]>([]);
  const [dislikes, setDislikes] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikes((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    setDislikes((prev) => prev.filter((x) => x !== id));
  };

  const toggleDislike = (id: number) => {
    setDislikes((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    setLikes((prev) => prev.filter((x) => x !== id));
  };

  return (
    <div className="space-y-4">

      {businesses.map((b, i) => {
        const liked = likes.includes(b.id);
        const disliked = dislikes.includes(b.id);

        return (
          <div
            key={b.id}
            className={`
              relative rounded-2xl p-4 border backdrop-blur transition-all duration-300
              bg-black/40 hover:bg-black/60
              ${
                liked
                  ? "border-[#2dd4bf]"
                  : disliked
                  ? "border-red-500/50"
                  : "border-gray-800"
              }
            `}
          >

            {/* HEADER BADGE */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white">
                {b.name}
              </h3>

              <span className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/60">
                #{i + 1} ranking
              </span>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

              {/* IMAGE */}
              <div className="md:col-span-2">
                <div className="w-full h-24 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white/30 text-xs">
                  IMG
                </div>
              </div>

              {/* INFO */}
              <div className="md:col-span-3 space-y-1">
                <p className="text-xs text-gray-400">
                  Categoría: {b.category}
                </p>
                <p className="text-xs text-gray-500">📍 Duitama</p>
                <p className="text-xs text-[#2dd4bf]">⭐ 4.8 rating</p>
              </div>

              {/* METRICS */}
              <div className="md:col-span-3 text-xs text-gray-300 space-y-1">
                <p>💰 Ventas: 1.2K</p>
                <p>👁 Visitas: 8.4K</p>
                <p className="text-green-400">⚡ Activo ahora</p>
              </div>

              {/* SOCIAL */}
              <div className="md:col-span-4 flex flex-wrap gap-2 justify-center">
                {["WA", "IG", "FB", "X", "WEB"].map((r) => (
                  <span
                    key={r}
                    className="text-[10px] px-2 py-1 rounded-full border border-gray-700 hover:border-[#a449a3] cursor-pointer transition"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BAR */}
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-800 text-xs">

              {/* LIKE */}
              <button
                onClick={() => toggleLike(b.id)}
                className={`flex items-center gap-1 transition ${
                  liked ? "text-[#2dd4bf]" : "text-gray-400 hover:text-white"
                }`}
              >
                ❤️ Like
              </button>

              {/* DISLIKE (NUEVO) */}
              <button
                onClick={() => toggleDislike(b.id)}
                className={`flex items-center gap-1 transition ${
                  disliked ? "text-red-500" : "text-gray-400 hover:text-white"
                }`}
              >
                👎 No me interesa
              </button>

               {/*  Comentarios */}
              <button className="text-gray-400 hover:text-white transition">
                 Comentar
              </button>

              {/* SHARE */}
              <button className="text-gray-400 hover:text-white transition">
                🔁 Compartir
              </button>
            </div>

          </div>
        );
      })}
    </div>
  );
}