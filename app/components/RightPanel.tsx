export default function RightPanel() {
  return (
    <div className="p-4 space-y-6 text-sm">
      {/* Noticias */}
      <div>
        <h3 className="font-bold mb-2">📰 Noticias</h3>
        <p className="text-gray-400">2 noticias del día...</p>
      </div>

      {/* Eventos */}
      <div>
        <h3 className="font-bold mb-2">🎉 Eventos</h3>
        <p className="text-gray-400">Eventos de la semana...</p>
      </div>

      {/* Domicilios */}
      <div>
        <h3 className="font-bold mb-2">🚚 Domicilios</h3>
        <p className="text-gray-400">Estado de pedidos...</p>
      </div>
    </div>
  );
}