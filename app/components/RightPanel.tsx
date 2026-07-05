"use client";

import { useRouter, usePathname } from "next/navigation";

const menu = [
  
  { name: "🏠 Inicio", path: "/dashboard" },
  { name: "📣 Marketing Digital / Publicidad", path: "/dashboard/marketing-digital" },
  { name: "🛒 Ecommerce / Paginas Web", path: "/dashboard/ecommerce" },
  { name: "📦 Dropshipping / Marketplace / Tienda", path: "/dashboard/dropshipping" },
  { name: "🚚 Domicilios", path: "/dashboard/domicilios" },
  { name: "📰 Noticias", path: "/dashboard/noticias" },
  { name: "🎉 Eventos", path: "/dashboard/eventos" },
  
];



export default function RightPanel() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col">

      {/* TITLE */}
      <div className="text-xs uppercase tracking-widest text-white/40 mb-3">
        Panel Inteligente
      </div>

      

      {/* MENU */}
      <div className="space-y-2 overflow-y-auto flex-1 pr-1">

        {menu.map((item) => {
          const active = pathname === item.path;

          return (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`
                w-full text-left p-2 rounded-lg border transition
                text-xs
                ${
                  active
                    ? "bg-white/20 border-white/30 text-white"
                    : "bg-transparent border-white/10 text-gray-300 hover:bg-white/10"
                }
              `}
            >
              {item.name}
            </button>
          );
        })}

      </div>

      {/* STATUS FOOTER */}
      <div className="mt-3 space-y-1 text-[10px] text-white/40 border-t border-white/10 pt-3">

        <div>
          📍 Ruta: <span className="text-white">{pathname}</span>
        </div>

        <div>
          ⚡ Estado: <span className="text-[#2dd4bf]">Activo</span>
        </div>

        <div>
          🧠 IA: <span className="text-[#a449a3]">Conectada</span>
        </div>

      </div>

    </div>
  );
}