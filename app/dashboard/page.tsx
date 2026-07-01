import AppShell from "../components/AppShell";
import TrendBar from "../components/TrenBar";
import BusinessFeed from "../components/BusinessFeed";

export default function DashboardPage() {
  return (

    
    <AppShell>

      {/* SOLO CONTENIDO (NO HEADER DUPLICADO) */}
      

      <div className="p-4 rounded-2xl border border-gray-800 bg-black/40">
        <TrendBar />
      </div>

      <BusinessFeed />

    </AppShell>
  );
}