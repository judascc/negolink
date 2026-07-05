export default function DashboardNegociosPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h1 className="text-white text-xl font-bold">🏢 Dashboard de Negocios</h1>
        <p className="text-white/50 text-sm mt-2">
          Administra tus negocios, productos y publicaciones.
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-3 gap-4">

        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <p className="text-white/40 text-xs">Negocios activos</p>
          <h2 className="text-white text-2xl font-bold mt-2">3</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <p className="text-white/40 text-xs">Publicaciones</p>
          <h2 className="text-white text-2xl font-bold mt-2">12</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <p className="text-white/40 text-xs">Clientes potenciales</p>
          <h2 className="text-white text-2xl font-bold mt-2">48</h2>
        </div>

      </div>

      {/* BUSINESS LIST */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6 space-y-4">

        <h2 className="text-white font-semibold">📦 Mis negocios</h2>

        <div className="space-y-3">

          <div className="p-4 rounded-xl border border-white/10 bg-black/30">
            <p className="text-white font-medium">Negocio 1</p>
            <p className="text-white/40 text-sm">Comida rápida en Duitama</p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-black/30">
            <p className="text-white font-medium">Negocio 2</p>
            <p className="text-white/40 text-sm">Servicios tecnológicos</p>
          </div>

        </div>

      </div>

    </div>
  );
}