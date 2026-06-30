const categories = [
  "Restaurantes",
  "Tecnología",
  "Educación",
  "Moda",
  "Salud",
  "Belleza",
  "Turismo",
  "Construcción",
  "Automotriz",
  "Deportes",
  "Finanzas",
  "Marketing",
  "Inmobiliaria",
  "Eventos",
  "Agricultura",
];

export default function Categories() {
  return (
    <section className="mt-6">
      
      <h2 className="text-xl font-bold mb-3">
        Explora categorías en Duitama
      </h2>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <span
            key={c}
            className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer"
          >
            {c}
          </span>
        ))}
      </div>

    </section>
  );
}