import AppShell from "./components/AppShell";
import TrendBar from "./components/TrenBar";
import BusinessFeed from "./components/BusinessFeed";

export default function Page() {
  return (
    <AppShell>
      <div className="space-y-6 p-4">

        {/* HERO HEADER (más potente que simple navbar) */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-zinc-950 to-black p-6 md:p-10">

          {/* glow background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#a449a3,transparent_40%),radial-gradient(circle_at_bottom,#2dd4bf,transparent_40%)]" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* BRAND */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="text-[#a449a3]">Nego</span>
                <span className="text-[#2dd4bf]">Link</span>
              </h1>

              <p className="text-white/60 mt-2 max-w-md">
                Plataforma inteligente de negocios, conexiones y oportunidades en tiempo real.
              </p>
            </div>

            {/* SEARCH IA STYLE */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-black/60 border border-white/10">
                <span className="text-white/40">🤖</span>
                <input
                  className="w-full bg-transparent outline-none text-white"
                  placeholder="Describe lo que necesitas... (IA buscará por ti)"
                />
              </div>
              <p className="text-xs text-white/40 mt-2">
                Ej: “negocios de comida en Duitama” · “proveedores tech baratos”
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-xl border border-white/15 hover:border-white/30 transition">
                Ingresar
              </button>

              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#a449a3] to-[#2dd4bf] text-black font-semibold hover:scale-105 transition">
                Crear cuenta
              </button>
            </div>
          </div>
        </div>

        {/* TREND SECTION */}
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white font-semibold">🔥 Tendencias en tiempo real</h2>
            <span className="text-xs text-white/40">IA + comunidad</span>
          </div>
          <TrendBar />
        </div>

        {/* FEED PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* FEED */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-black/30 p-4">
            <h2 className="text-white font-semibold mb-3">
              🧠 Oportunidades destacadas
            </h2>
            <BusinessFeed />
          </div>

          {/* PANEL LATERAL (nuevo valor UX) */}
          <div className="space-y-4">

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <h3 className="text-white font-semibold">⚡ Acciones rápidas</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
                <button className="text-left hover:text-white">+ Publicar negocio</button>
                <button className="text-left hover:text-white">🔎 Buscar proveedores</button>
                <button className="text-left hover:text-white">📊 Ver tendencias</button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#a449a3]/20 to-[#2dd4bf]/10 p-4">
              <h3 className="text-white font-semibold">🧠 IA NegoLink</h3>
              <p className="text-xs text-white/60 mt-2">
                Encuentra negocios, oportunidades y clientes automáticamente.
              </p>
            </div>

          </div>
        </div>

      </div>
    </AppShell>
  );
}