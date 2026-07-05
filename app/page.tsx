import TrendBar from "./components/TrenBar";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-6 p-4">

      {/* HERO HEADER */}
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

          {/* CTA */}
          <div className="flex gap-3">

            <Link
              href="/auth/login"
              className="px-5 py-2.5 rounded-xl border border-white/15 text-white hover:border-white/30 transition"
            >
              Ingresar
            </Link>

            <Link
              href="/auth/register"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#a449a3] to-[#2dd4bf] text-black font-semibold hover:scale-105 transition"
            >
              Crear cuenta
            </Link>

          </div>

        </div>

        {/* SEARCH IA */}
        <div className="mt-6">
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

      </div>

      {/* TREND BAR */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-black/40 via-black/20 to-black/40 p-4">

        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-semibold">
            🔥 Tendencias en tiempo real
          </h2>
          <span className="text-xs text-white/40">IA + comunidad activa</span>
        </div>

        <div className="p-2 rounded-xl bg-black/40 border border-white/10">
          <TrendBar />
        </div>

      </div>

      {/* VALUE PROPOSITION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <h3 className="text-white font-semibold">👤 Usuarios</h3>
          <p className="text-white/60 text-sm mt-2">
            Encuentra negocios, servicios y soluciones en tu ciudad en segundos.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <h3 className="text-white font-semibold">🏪 Proveedores</h3>
          <p className="text-white/60 text-sm mt-2">
            Publica tu negocio y consigue clientes reales con visibilidad inteligente.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <h3 className="text-white font-semibold">⚡ IA NegoLink</h3>
          <p className="text-white/60 text-sm mt-2">
            Conectamos oferta y demanda automáticamente en tiempo real.
          </p>
        </div>

      </div>

      {/* CTA FINAL */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/20 p-6 md:p-10 text-center">

        <h2 className="text-2xl font-bold text-white">
          Empieza a conectar con oportunidades reales
        </h2>

        <p className="text-white/60 mt-3 max-w-xl mx-auto">
          Únete a NegoLink y transforma la forma en la que encuentras o vendes servicios en tu región.
        </p>

        <div className="mt-6 flex justify-center gap-3">

          <Link
            href="/auth/register"
            className="px-5 py-3 rounded-xl bg-[#2dd4bf] text-black font-semibold hover:opacity-90 transition"
          >
            Empezar gratis
          </Link>

          <Link
            href="/auth/login"
            className="px-5 py-3 rounded-xl border border-white/15 text-white hover:border-white/30 transition"
          >
            Ya tengo cuenta
          </Link>

        </div>

      </div>

    </div>
  );
}