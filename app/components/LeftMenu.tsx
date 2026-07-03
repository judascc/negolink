"use client";

import { useState } from "react";

const menu = [
  {
    title: "Negocios",
    items: ["Restaurantes", "Panaderías", "Supermercados", "Tiendas"],
  },
  {
    title: "Salud",
    items: ["Farmacias", "Clínicas", "Odontología"],
  },
  {
    title: "Servicios",
    items: [
      "Salones de belleza",
      "Barberías",
      "Servicios profesionales",
    ],
  },
  {
    title: "Movilidad",
    items: ["Transporte", "Taxis", "Buses", "Domicilios"],
  },
  {
    title: "Turismo",
    items: ["Hoteles", "Eventos"],
  },
  {
    title: "Información",
    items: ["Noticias", "Educación", "Tecnología"],
  },
];

export default function LeftMenu() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-3">

      {/* TITLE */}
      <div className="text-xs uppercase tracking-widest text-white/40 mb-3">
        Categorías
      </div>

      {/* MENU */}
      {menu.map((section) => {
        const isOpen = open === section.title;

        return (
          <div key={section.title} className="space-y-1">

            {/* CATEGORY */}
            <button
              onClick={() =>
                setOpen(isOpen ? null : section.title)
              }
              className="
                w-full flex justify-between items-center
                p-2 rounded-lg
                bg-black/20
                hover:bg-white/10
                transition
                text-left
              "
            >
              <span className="text-gray-200 font-medium text-sm">
                {section.title}
              </span>

              <span className="text-white/40 text-xs">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* SUBMENU */}
            {isOpen && (
              <div className="ml-3 border-l border-white/10 pl-3 space-y-1">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="
                      text-sm text-gray-400
                      hover:text-white
                      cursor-pointer
                      transition
                      p-1 rounded
                      hover:bg-white/5
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}

          </div>
        );
      })}

    </div>
  );
}