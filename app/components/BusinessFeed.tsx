const businesses = [1, 2, 3];

export default function BusinessFeed() {
  return (
    <div className="space-y-4">

      {businesses.map((b, i) => (
        <div
          key={i}
          className="bg-black/40 border border-gray-800 rounded-2xl p-4 backdrop-blur hover:border-[#a449a3] transition"
        >

          {/* GRID PRINCIPAL */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

            {/* 🖼 FOTO */}
            <div className="md:col-span-2">
              <div className="w-full h-24 bg-gray-800 rounded-xl" />
            </div>

            {/* 🧠 INFO CENTRAL */}
            <div className="md:col-span-3 text-center md:text-left space-y-1">
              <h3 className="font-bold text-white">Negocio #{i + 1}</h3>
              <p className="text-xs text-gray-400">Categoría: Ecommerce</p>
              <p className="text-xs text-gray-500">📍 Duitama</p>
              <p className="text-xs text-[#2dd4bf]">⭐ 4.8 Rating</p>
            </div>

            {/* 📊 MÉTRICAS */}
            <div className="md:col-span-3 text-center text-xs text-gray-300 space-y-1">
              <p>💰 Ventas: 1.2K</p>
              <p>👁 Visitas: 8.4K</p>
              <p>⚡ Actividad alta</p>
            </div>

            {/* 🌐 REDES (10 ICONOS) */}
            <div className="md:col-span-4 flex flex-wrap justify-center gap-2">
              {[
                "WA",
                "IG",
                "FB",
                "TT",
                "X",
                "YT",
                "TK",
                "LN",
                "TG",
                "WEB",
              ].map((r) => (
                <span
                  key={r}
                  className="text-[10px] px-2 py-1 rounded-full border border-gray-700 hover:border-[#a449a3] cursor-pointer"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* ❤️ INTERACCIONES */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-800 text-xs text-gray-400">

            <button className="hover:text-[#a449a3] transition">
              ❤️ Like
            </button>

            <button className="hover:text-[#2dd4bf] transition">
              💬 Comentarios
            </button>

            <button className="hover:text-white transition">
              🔁 Compartir
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}