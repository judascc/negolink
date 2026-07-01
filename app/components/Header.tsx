export default function Header() {
  return (
    <div className="w-full border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">NegoLink</h1>
        <p className="text-xs text-gray-400">
          Economía digital en tiempo real
        </p>
      </div>

      <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl border border-gray-700">
            Ingresar
          </button>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#a449a3] to-[#2dd4bf]">
            Registrarse
          </button>
        </div>
    </div>
  );
}