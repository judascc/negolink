import AppShell from "../components/AppShell";
import TrendBar from "../components/TrenBar";
import BusinessFeed from "../components/BusinessFeed";

export default function DashboardPage() {
  return (
    <AppShell>

      {/* CONTENIDO (MISMO ESTILO, SOLO ORDENADO) */}
      <div className="p-4 space-y-4">

        {/* BLOQUE TREND (igual tu estilo) */}
        <div className="p-4 rounded-2xl border border-gray-800 bg-black/40">
          <TrendBar />
        </div>

        {/* FEED */}
        <div className="p-4 rounded-2xl border border-gray-800 bg-black/40">
          <BusinessFeed />
        </div>

      </div>

    </AppShell>
  );
}