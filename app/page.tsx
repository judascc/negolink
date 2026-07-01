import AppShell from "./components/AppShell";
import TrendBar from "./components/TrenBar";
import BusinessFeed from "./components/BusinessFeed";

export default function Page() {
  return (
    <AppShell>

      {/* HEADER ÚNICO */}
      <div className="flex flex-col md:flex-row justify-between gap-4 p-4 rounded-2xl border border-gray-800 bg-black/40">

        <h1 className="text-2xl font-bold">
          <span className="text-[#a449a3]">Nego</span>
          <span className="text-[#2dd4bf]">Link</span>
        </h1>

        <input
          className="flex-1 px-4 py-2 rounded-xl bg-black border border-gray-800"
          placeholder="Buscar..."
        />

        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl border border-gray-700">
            Ingresar
          </button>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#a449a3] to-[#2dd4bf]">
            Registrarse
          </button>
        </div>
      </div>

      {/* CONTENIDO */}
      <TrendBar />
      <BusinessFeed />

    </AppShell>
  );
}