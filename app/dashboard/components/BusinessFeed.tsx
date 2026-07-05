"use client";

import { useState } from "react";

const businesses = [
  { id: 1, name: "Panadería La Espiga", category: "Panadería" },
  { id: 2, name: "Restaurante Donde Toño", category: "Restaurante" },
  { id: 3, name: "Farmacia San José", category: "Salud" },
  { id: 4, name: "TecnoCell Duitama", category: "Tecnología" },
  { id: 5, name: "Supermercado El Ahorro", category: "Supermercado" },

  { id: 6, name: "Ferretería Central", category: "Ferretería" },
  { id: 7, name: "Domicilios Express Boyacá", category: "Domicilios" },
  { id: 8, name: "Taxis Duitama YA", category: "Transporte" },
  { id: 9, name: "Bus Intermunicipal Boyacá", category: "Transporte" },
  { id: 10, name: "Hotel Monteverde", category: "Hotelería" },

  { id: 11, name: "Salón Glam Studio", category: "Belleza" },
  { id: 12, name: "Barbería Elite Cuts", category: "Belleza" },
  { id: 13, name: "Clínica Vida Sana", category: "Salud" },
  { id: 14, name: "OdontoPlus Duitama", category: "Salud" },
  { id: 15, name: "Tienda Moda Urbana", category: "Moda" },

  { id: 16, name: "Ecommerce Boyacá Store", category: "Ecommerce" },
  { id: 17, name: "Digital Marketing Pro", category: "Marketing" },
  { id: 18, name: "Agencia Creativa 360", category: "Marketing" },
  { id: 19, name: "Academia IA Learning", category: "Educación" },
  { id: 20, name: "Universidad Virtual Boyacá", category: "Educación" },

  { id: 21, name: "Constructora Andina", category: "Construcción" },
  { id: 22, name: "Inmobiliaria Norte", category: "Bienes Raíces" },
  { id: 23, name: "Cafe Ruta Andina", category: "Restaurante" },
  { id: 24, name: "Heladería Polar", category: "Alimentos" },
  { id: 25, name: "Pizza Fast Duitama", category: "Restaurante" },

  { id: 26, name: "Lavandería Clean Express", category: "Servicios" },
  { id: 27, name: "Veterinaria PetCare", category: "Mascotas" },
  { id: 28, name: "Gimnasio PowerFit", category: "Deporte" },
  { id: 29, name: "Eventos Boyacá Live", category: "Eventos" },
  { id: 30, name: "Startup IA NegoLink Labs", category: "Tecnología" },
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
                {["WA", "FB", "IG", "X", "TT", "Lnk", "Goo", "YT", "Tg", "WEB"].map((r) => (
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