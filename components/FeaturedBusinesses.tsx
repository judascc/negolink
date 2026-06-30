const businesses = [1, 2, 3, 4];

export default function FeaturedBusinesses() {
  return (
    <section className="mt-6">
      
      <h2 className="text-xl font-bold mb-3">
        Negocios destacados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {businesses.map((b) => (
          <div
            key={b}
            className="bg-white rounded-xl shadow p-3"
          >
            {/* Imagen placeholder */}
            <div className="h-24 bg-gray-200 rounded-lg mb-3" />

            <h3 className="font-semibold">Negocio {b}</h3>

            <p className="text-sm text-gray-500">
              Lugar · Horario
            </p>

            <div className="flex justify-between mt-2 text-sm">
              <span>💰 $</span>
              <span>❤️ 120</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}