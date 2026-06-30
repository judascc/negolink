const trends = [
  "Negocios más buscados en Duitama",
  "Restaurantes tendencia Boyacá",
  "Emprendimientos digitales",
  "Servicios más recomendados",
];

export default function Trends() {
  return (
    <section className="mt-6">
      
      <h2 className="text-xl font-bold mb-3">
        Tendencias en Duitama y Boyacá
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trends.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4"
          >
            <h3 className="font-semibold">{t}</h3>

            <div className="h-20 bg-gray-200 rounded-lg mt-2 flex items-center justify-center text-gray-500">
              Ficha tendencia
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}