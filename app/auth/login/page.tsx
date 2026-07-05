"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", form.email)
      .eq("password", form.password)
      .single();

    setLoading(false);

    if (error || !data) {
      console.log("LOGIN ERROR:", error);
      alert("Credenciales incorrectas ❌");
      return;
    }

    // guardar sesión simple
    localStorage.setItem("user", JSON.stringify(data));

    alert("Bienvenido 🚀");

    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">

        {/* BRAND */}
        <h1 className="text-2xl font-bold text-center mb-2">
          <span className="text-[#a449a3]">Nego</span>
          <span className="text-[#2dd4bf]">Link</span>
        </h1>

        <p className="text-white/50 text-center text-sm mb-6">
          Inicia sesión para acceder a tu ecosistema de negocios
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">

          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />

          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Contraseña"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#a449a3] to-[#2dd4bf] text-black font-semibold hover:scale-[1.02] transition"
          >
            {loading ? "Entrando..." : "Ingresar"}
          </button>

        </form>

        {/* LINKS */}
        <div className="text-center mt-4 text-sm text-white/50">
          ¿No tienes cuenta?{" "}
          <Link href="/auth/register" className="text-[#2dd4bf] hover:underline">
            Regístrate
          </Link>
        </div>

      </div>
    </div>
  );
}