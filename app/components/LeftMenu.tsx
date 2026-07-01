const menu = [
  "Dashboard",
  "Marketing Digital",
  "Ecommerce",
  "Dropshipping",
  "Domicilios",
  "Eventos",
  "Noticias",
];

export default function LeftMenu() {
  return (
    <div className="p-4 space-y-3 text-sm">
      {menu.map((item) => (
        <div
          key={item}
          className="p-2 rounded hover:bg-gray-900 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
}