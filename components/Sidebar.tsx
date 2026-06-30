import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-[20%] bg-white border-r flex-col p-4">
      
      {/* Logo */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Negolink</h1>
        <p className="text-sm text-gray-500">
          Conectamos tu negocio
        </p>
      </div>

      {/* Menu principal */}
      <nav className="flex flex-col gap-2 mb-6">
        <p className="text-xs text-gray-400 uppercase">Menú</p>

        <Link href="#">Inicio</Link>
        <Link href="#">Directorio</Link>
        <Link href="#">Tendencias</Link>
        <Link href="#">Negocios</Link>
        <Link href="#">Eventos</Link>
        <Link href="#">Noticias</Link>
      </nav>

      {/* Negocio */}
      <nav className="flex flex-col gap-2 mb-6">
        <p className="text-xs text-gray-400 uppercase">Mi negocio</p>

        <Link href="#">Experiencia</Link>
        <Link href="#">Mensajes</Link>
        <Link href="#">Configuración</Link>
      </nav>
    </aside>
  );
}