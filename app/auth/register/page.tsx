"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // VALIDACIÓN SIMPLE
    if (!form.email || !form.password) {
      alert("Email y password son obligatorios");
      setLoading(false);
      return;
    }

    // INSERT EN SUPABASE
    const { data, error } = await supabase.from("users").insert([
      {
        name: form.name,
        lastname: form.lastname,
        email: form.email,
        password: form.password,
        phone: form.phone,
      },
    ]);

    setLoading(false);

    if (error) {
      console.log("ERROR SUPABASE:", error);
      alert("Error creando usuario ❌");
      return;
    }

    alert("Usuario creado correctamente 🚀");

    router.push("/auth/login");
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
          Crea tu cuenta y entra al ecosistema
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />

          <input
            name="lastname"
            onChange={handleChange}
            type="text"
            placeholder="Apellido"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />

          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />

          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />

          <input
            name="phone"
            onChange={handleChange}
            type="tel"
            placeholder="Teléfono"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#a449a3] to-[#2dd4bf] text-black font-semibold hover:scale-[1.02] transition"
          >
            {loading ? "Creando..." : "Crear cuenta"}
          </button>

        </form>

        {/* LOGIN LINK */}
        <div className="text-center mt-4 text-sm text-white/50">
          ¿Ya tienes cuenta?{" "}
          <Link href="/auth/login" className="text-[#2dd4bf] hover:underline">
            Inicia sesión
          </Link>
        </div>

      </div>
    </div>
  );
}