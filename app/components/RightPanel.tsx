"use client";

import { useState } from "react";

const menu = [
  "Dropshipping / Tienda",
  "Noticias",
  "Eventos",
  "Marketing",
  "Ecommerce",
  "Domicilios",
];

export default function RightPanel() {
  const [active, setActive] = useState("Dropshipping / Tienda");

  return (
    <div className="
      h-full
      flex flex-col
      p-4
      text-sm text-gray-200
      overflow-hidden
    ">

      {/* TITLE */}
      <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">
        Panel Inteligente
      </div>

      {/* MENU (FIX SCROLL) */}
      <div className="
        space-y-2
        overflow-y-auto
        pr-1
        flex-1
        max-h-[30vh] md:max-h-none
      ">

        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`
              w-full text-left p-2 rounded-lg border transition
              ${
                active === item
                  ? "bg-white/20 border-white/30 text-white"
                  : "bg-transparent border-white/10 text-gray-300 hover:bg-white/10"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      {/* CONTENT (SCROLLABLE AREA) */}
      <div className="
        mt-4
        flex-1
        overflow-y-auto
        space-y-3
        pr-1
      ">

        {/* DROPSHIPPING */}
        {active === "Dropshipping / Tienda" && (
          <div className="space-y-2">
            <div className="text-xs text-gray-400">Productos rápidos</div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              👗 Blusa dama — $35.000 COP<br />
              🏪 ModaStyle Duitama
            </div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              👟 Zapatos deportivos — $120.000 COP<br />
              🏪 SportLine
            </div>
          </div>
        )}

        {/* NOTICIAS */}
        {active === "Noticias" && (
          <div className="space-y-2">
            <div className="text-xs text-gray-400">Duitama hoy</div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              📰 Nuevas rutas de transporte en Duitama
            </div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              📰 Crecimiento del comercio digital en Boyacá
            </div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              💱 USDCOP: $3,950 COP
            </div>
          </div>
        )}

        {/* EVENTOS */}
        {active === "Eventos" && (
          <div className="space-y-2">
            <div className="text-xs text-gray-400">Fin de semana</div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              🎉 Feria gastronómica Duitama
            </div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              🎶 Concierto cultural Boyacá
            </div>
          </div>
        )}

        {/* MARKETING */}
        {active === "Marketing" && (
          <div className="space-y-2">
            <div className="text-xs text-gray-400">Plan sugerido</div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              📈 Plan básico redes + anuncios<br />
              💰 Desde $150.000 COP
            </div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              🚀 Plan pro branding + automatización<br />
              💰 Desde $450.000 COP
            </div>
          </div>
        )}

        {/* ECOMMERCE */}
        {active === "Ecommerce" && (
          <div className="space-y-2">
            <div className="text-xs text-gray-400">Webs y tiendas</div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              🌐 Tienda online en 3 días<br />
              💡 pagos + catálogo + panel
            </div>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              🚀 Landing page para negocios
            </div>
          </div>
        )}

        {/* DOMICILIOS */}
        {active === "Domicilios" && (
          <div className="space-y-3">

            <button className="
              w-full p-2 rounded-lg
              bg-green-500/20 border border-green-400/30
              text-green-300 hover:bg-green-500/30
              transition
            ">
              🚀 Solicitar domicilio
            </button>

            <div className="p-2 bg-white/5 rounded border border-white/10">
              ⏱ 25 - 40 min<br />
              📍 Duitama centro
            </div>

          </div>
        )}

      </div>

      {/* FOOTER */}
      <div className="mt-3 text-xs text-gray-500">
        Activo: <span className="text-white">{active}</span>
      </div>

    </div>
  );
}