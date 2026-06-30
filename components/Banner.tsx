export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Texto */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold">
          Haz crecer tu negocio en Duitama con Negolink
        </h2>

        <p className="mt-2 text-white/80">
          Conectamos negocios locales, clientes y oportunidades en toda Boyacá.
        </p>

        <div className="mt-4 flex gap-3">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
            Conectar
          </button>
          <button className="border border-white px-4 py-2 rounded-lg">
            Explorar
          </button>
        </div>
      </div>

      {/* Imagen placeholder */}
      <div className="md:w-1/2 bg-white/20 h-40 w-full rounded-xl flex items-center justify-center">
        <span className="text-white/70">Imagen ilustrativa</span>
      </div>

    </section>
  );
}