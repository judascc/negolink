"use client";

import { useState } from "react";

const menu = [
  {
    title: "Negocios",
    icon: "🏪",
    items: ["Restaurantes", "Panaderías", "Supermercados", "Tiendas"],
  },
  {
    title: "Salud",
    icon: "🏥",
    items: ["Farmacias", "Clínicas", "Odontología"],
  },
  {
    title: "Servicios",
    icon: "🛠️",
    items: ["Salones de belleza", "Barberías", "Servicios profesionales"],
  },
  {
    title: "Movilidad",
    icon: "🚚",
    items: ["Transporte", "Taxis", "Buses", "Domicilios"],
  },
  {
    title: "Turismo",
    icon: "🏨",
    items: ["Hoteles", "Eventos"],
  },
  {
    title: "Información",
    icon: "🧠",
    items: ["Noticias", "Educación", "Tecnología"],
  },
];

export default function LeftMenu() {
  const [open, setOpen] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {/* HEADER */}
      <div className="px-2">
        <div className="text-[10px] uppercase tracking-widest text-white/40">
          Ecosistema NegoLink
        </div>

        <div className="text-xs text-white/60 mt-1">
          Explora el mercado en tiempo real
        </div>
      </div>

      {/* MENU */}
      {menu.map((section) => {
        const isOpen = open === section.title;

        return (
          <div
            key={section.title}
            className="rounded-xl border border-white/10 bg-black/20 overflow-hidden"
          >
            {/* CATEGORY */}
            <button
              onClick={() => setOpen(isOpen ? null : section.title)}
              className={`
                w-full flex items-center justify-between
                px-3 py-2
                hover:bg-white/5 transition
              `}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{section.icon}</span>

                <span className="text-sm text-white/80 font-medium">
                  {section.title}
                </span>
              </div>

              <span className="text-white/40 text-xs">
                {isOpen ? "▲" : "▼"}
              </span>
            </button>

            {/* SUBMENU */}
            {isOpen && (
              <div className="px-3 pb-3 pt-1 space-y-1 border-t border-white/10">
                {section.items.map((item) => {
                  const active = activeItem === item;

                  return (
                    <div
                      key={item}
                      onClick={() => setActiveItem(item)}
                      className={`
                        text-sm cursor-pointer rounded-lg px-2 py-1 transition
                        ${
                          active
                            ? "bg-gradient-to-r from-[#a449a3]/20 to-[#2dd4bf]/10 text-white"
                            : "text-white/50 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-white/30">•</span>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* FOOTER MINI INSIGHT */}
      <div className="mt-4 p-3 rounded-xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20">
        <p className="text-[11px] text-white/50">
          🔥 IA detecta nuevas oportunidades cada minuto en tu región
        </p>
      </div>
    </div>
  );
}