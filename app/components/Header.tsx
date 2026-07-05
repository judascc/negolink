"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const [user, setUser] = useState<any>(null);

useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 w-full">

      {/* BRAND */}
      <div className="flex flex-col text-center md:text-left shrink-0">

        <h1 className="text-2xl font-bold tracking-tight leading-none">
          <span className="text-[#a449a3]">Nego</span>
          <span className="text-[#2dd4bf]">Link</span>
        </h1>

        <p className="text-[11px] text-white/50 mt-1">
          Economía digital · Duitama · Dashboard inteligente
        </p>

      </div>

      {/* SEARCH */}
      <div className="flex-1 w-full">
        <div className="
          flex items-center gap-2
          px-3 py-2 md:px-4 md:py-2
          rounded-xl bg-black/60 border border-white/10
          focus-within:border-[#2dd4bf]/50 transition
        ">

          <span className="text-white/40">🤖</span>

          <input
            className="w-full bg-transparent outline-none text-white text-sm placeholder:text-white/30"
            placeholder="Buscar negocios, productos, eventos o oportunidades..."
          />

          <span className="text-[10px] text-white/30 hidden md:block">
            CTRL + K
          </span>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center gap-2">

        {/* NOTIFICATIONS */}
        <button className="relative px-3 py-2 rounded-xl border border-white/10 hover:border-white/20 transition">
          🔔
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* MESSAGES */}
        <button className="relative px-3 py-2 rounded-xl border border-white/10 hover:border-white/20 transition">
          💬
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* CTA */}
        <button className="
          px-3 py-2 rounded-xl
          bg-gradient-to-r from-[#a449a3] to-[#2dd4bf]
          text-black font-semibold text-xs
          hover:scale-105 transition
        ">
          Publicar
        </button>

        {/* PROFILE DROPDOWN */}
        <div className="relative">

          {/* TRIGGER */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-black/30"
          >

            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#a449a3] to-[#2dd4bf]" />

            <div className="text-left text-xs leading-tight hidden md:block">
              <p className="text-white font-medium">
                  {user ? `${user.name} ${user.lastname}` : "Usuario"}
                </p>
              <p className="text-white/40">Nivel Pro</p>
            </div>

            <span className="text-white/50 text-xs">
              {open ? "▲" : "▼"}
            </span>

          </button>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl p-2 z-50">

              

              {/* ✅ FIXED ROUTE */}

              {/* INFO */}
              <div className="px-3 py-2 text-xs text-white/40">
                <p className="text-white font-medium">
                  {user ? `${user.name} ${user.lastname}` : "Usuario"}
                </p>
                <p>Nivel: Pro</p>
              </div>

              <div className="border-t border-white/10 my-1" />

              <Link
                href="/dashboard/profile"
                className="w-full text-left px-3 py-2 text-sm hover:bg-white/10 rounded-lg block"
              >
                👤 Perfil
              </Link>

              <div className="border-t border-white/10 my-1" />              

              <Link
                href="/dashboard/dashboard-negocios"
                 className="w-full text-left px-3 py-2 text-sm hover:bg-white/10 rounded-lg">
                🏢 Dashboard negocio
              </Link>

              <div className="border-t border-white/10 my-1" />    

              <Link
                href="/dashboard/estadisticas"
              className="w-full text-left px-3 py-2 text-sm hover:bg-white/10 rounded-lg">
                📊 Estadísticas
              </Link>
              <div className="border-t border-white/10 my-1" />

              <Link
                href="/dashboard/configuracion"
              className="w-full text-left px-3 py-2 text-sm hover:bg-white/10 rounded-lg">
                ⚙️ Configuración
              </Link>

              <div className="border-t border-white/10 my-1" />

              {/* LOGOUT REAL */}
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg"
              >
                🚪 Cerrar sesión
              </button>

            </div>
          )}

        </div>

        

      </div>

    </div>
  );
}