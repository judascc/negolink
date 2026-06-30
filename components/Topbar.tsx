import { Search, Bell, MessageCircle, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="w-full h-16 bg-white border-b flex items-center px-4 justify-between">
      
      {/* Buscador (50%) */}
      <div className="w-[50%]">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Buscar negocios, tendencias..."
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>
      </div>

      {/* Acciones derecha (30%) */}
      <div className="w-[30%] flex justify-end items-center gap-4">

        <button>
          <MessageCircle size={20} />
        </button>

        <button>
          <Bell size={20} />
        </button>

        <button className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
          <User size={18} />
          <span className="text-sm">Perfil</span>
        </button>

      </div>
    </header>
  );
}