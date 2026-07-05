"use client";

import { useState } from "react";

export default function ConfiguracionPage() {
  const [name, setName] = useState("Usuario");
  const [email, setEmail] = useState("usuario@email.com");
  const [theme, setTheme] = useState("dark");

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h1 className="text-white text-xl font-bold">⚙️ Configuración</h1>
        <p className="text-white/50 text-sm mt-2">
          Ajusta tu cuenta y preferencias.
        </p>
      </div>

      {/* FORM */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6 space-y-4">

        <div>
          <p className="text-white/50 text-xs mb-1">Nombre</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white"
          />
        </div>

        <div>
          <p className="text-white/50 text-xs mb-1">Correo</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white"
          />
        </div>

        <div>
          <p className="text-white/50 text-xs mb-1">Tema</p>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white"
          >
            <option value="dark">Oscuro</option>
            <option value="light">Claro</option>
          </select>
        </div>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#a449a3] to-[#2dd4bf] text-black font-semibold hover:scale-105 transition">
          Guardar cambios
        </button>

      </div>

    </div>
  );
}