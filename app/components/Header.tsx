"use client";

export default function Header() {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-4">

      {/* BRAND + CONTEXTO */}
      <div className="flex flex-col text-center md:text-left shrink-0">

        <h1 className="text-2xl font-bold tracking-tight leading-none">
          <span className="text-[#a449a3]">Nego</span>
          <span className="text-[#2dd4bf]">Link</span>
        </h1>

        <p className="text-[11px] text-white/50 mt-1">
          Economía digital · Duitama · Dashboard inteligente
        </p>

      </div>

      {/* SEARCH INTELIGENTE */}
      <div className="flex-1 w-full">

        <div className="
          flex items-center gap-2
          px-3 py-2 md:px-4 md:py-2
          rounded-xl
          bg-black/60
          border border-white/10
          focus-within:border-[#2dd4bf]/50
          transition
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

      {/* USER PANEL */}
      <div className="flex items-center justify-between md:justify-end gap-2 w-full md:w-auto">

        {/* NOTIFICACIONES */}
        <button className="
          relative px-3 py-2 rounded-xl
          border border-white/10
          hover:border-white/20
          transition
        ">
          🔔
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* PERFIL */}
        <div className="
          flex items-center gap-2
          px-3 py-2 rounded-xl
          border border-white/10
          bg-black/30
          min-w-[120px]
        ">

          <div className="
            w-8 h-8 rounded-full
            bg-gradient-to-r from-[#a449a3] to-[#2dd4bf]
          " />

          <div className="text-xs leading-tight">
            <p className="text-white font-medium">Usuario</p>
            <p className="text-white/40">Plan Pro</p>
          </div>

        </div>

        {/* ACCIONES */}
        <button className="
          hidden md:block
          px-3 py-2 rounded-xl
          border border-white/10
          hover:bg-white/10
          transition text-xs
        ">
          Dashboard
        </button>

        <button className="
          px-3 py-2 rounded-xl
          bg-gradient-to-r from-[#a449a3] to-[#2dd4bf]
          text-black font-semibold text-xs
          hover:scale-105 transition
        ">
          Publicar
        </button>

      </div>

    </div>
  );
}