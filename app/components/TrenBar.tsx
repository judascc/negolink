const trends = [
  "Tendencias",
  "Ofertas",
  "Lo nuevo",
  "Viralidad",
  "Top negocios",
  "IA Market",
];

export default function TrendBar() {
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {trends.map((item) => (
        <button
          key={item}
          className="px-3 py-1 text-sm rounded-full bg-gray-900 border border-gray-800 hover:bg-gray-800"
        >
          {item}
        </button>
      ))}
    </div>
  );
}