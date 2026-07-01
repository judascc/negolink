const menu = [
  "Dashboard",
  "Restaurantes",
  "Panaderías",
  "Ferreterías",
  "Supermercados",
  "Tiendas",
  "Farmacias",
  "Clínicas",
  "Odontología",
  "Salones de belleza",
  "Barberías",
  "Transporte",
  "Taxis",
  "Buses",
  "Domicilios",
  "Hoteles",
  "Eventos",
  "Noticias",
  "Educación",
  "Tecnología",
  "Servicios profesionales",
];

export default function LeftMenu() {
  return (
    <div className="p-4 space-y-2 text-sm text-gray-200">

      {/* TITLE */}
      <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">
        Categorías
      </div>

      {/* MENU */}
      {menu.map((item) => (
        <div
          key={item}
          className="
            p-2 rounded-lg
            hover:bg-white/10
            cursor-pointer
            transition
            text-gray-300
            hover:text-white
          "
        >
          {item}
        </div>
      ))}

    </div>
  );
}