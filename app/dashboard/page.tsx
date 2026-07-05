"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import TrendBar from "../dashboard/components/TrenBar";
import BusinessFeed from "./components/BusinessFeed";

export default function DashboardPage() {

  const handleLogout = () => {
  localStorage.removeItem("user");
  router.push("/auth/login");
};


  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");

    // 🔒 si no hay sesión → fuera
    if (!user) {
      router.push("/auth/login");
      return;
    }

    setLoading(false);
  }, []);

  // evita parpadeo
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Cargando...
      </div>
    );
  }
  
  return (
    <div className="p-4 space-y-4">

      {/* TREND */}
      <div className="p-4 rounded-2xl border border-white/10 bg-black/40">
        <h2 className="text-white font-semibold mb-3">
          🔥 Tendencias
        </h2>
        <TrendBar />
      </div>

      {/* FEED */}
      <div className="p-4 rounded-2xl border border-white/10 bg-black/40">
        <h2 className="text-white font-semibold mb-3">
          🧠 Oportunidades
        </h2>
        <BusinessFeed />
      </div>

    </div>
  );
}