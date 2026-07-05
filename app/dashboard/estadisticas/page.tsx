export default function EstadisticasPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h1 className="text-white text-xl font-bold">📊 Estadísticas</h1>
        <p className="text-white/50 text-sm mt-2">
          Rendimiento general de tu actividad en NegoLink.
        </p>
      </div>

      {/* METRICS */}
      <div className="grid md:grid-cols-4 gap-4">

        <div className="p-5 rounded-2xl border border-white/10 bg-black/40">
          <p className="text-white/40 text-xs">Visitas</p>
          <h2 className="text-white text-xl font-bold mt-2">1,240</h2>
        </div>

        <div className="p-5 rounded-2xl border border-white/10 bg-black/40">
          <p className="text-white/40 text-xs">Interacciones</p>
          <h2 className="text-white text-xl font-bold mt-2">320</h2>
        </div>

        <div className="p-5 rounded-2xl border border-white/10 bg-black/40">
          <p className="text-white/40 text-xs">Conversiones</p>
          <h2 className="text-white text-xl font-bold mt-2">78</h2>
        </div>

        <div className="p-5 rounded-2xl border border-white/10 bg-black/40">
          <p className="text-white/40 text-xs">Crecimiento</p>
          <h2 className="text-white text-xl font-bold mt-2">+12%</h2>
        </div>

      </div>

      {/* CHART PLACEHOLDER */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-10 text-center">
        <p className="text-white/40">📈 Aquí irá el gráfico de rendimiento</p>
      </div>

    </div>
  );
}