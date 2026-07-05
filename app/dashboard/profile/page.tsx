"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [edit, setEdit] = useState(false);

  const [user, setUser] = useState({
    name: "Usuario",
    lastname: "Negocios",
    level: "Pro",
    email: "usuario@email.com",
    phone: "+57 300 000 0000",
    location: "Duitama, Boyacá",
    bio: "Usuario activo dentro del ecosistema NegoLink",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">

      {/* HEADER PRINCIPAL */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-8">

        <div className="flex items-center justify-between gap-6">

          {/* AVATAR + NOMBRE */}
          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#a449a3] to-[#2dd4bf]" />

            <div className="space-y-1">

              {!edit ? (
                <>
                  <h1 className="text-white text-2xl font-bold">
                    {user.name} {user.lastname}
                  </h1>

                  <p className="text-white/50 text-sm">
                    Nivel: {user.level}
                  </p>

                  <p className="text-white/40 text-xs">
                    {user.location}
                  </p>
                </>
              ) : (
                <div className="space-y-2">
                  <input
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/10 text-white px-3 py-2 rounded-lg w-full"
                  />

                  <input
                    name="lastname"
                    value={user.lastname}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/10 text-white px-3 py-2 rounded-lg w-full"
                  />

                  <input
                    name="location"
                    value={user.location}
                    onChange={handleChange}
                    className="bg-black/40 border border-white/10 text-white px-3 py-2 rounded-lg w-full"
                  />
                </div>
              )}

            </div>

          </div>

          {/* EDIT BUTTON */}
          <button
            onClick={() => setEdit(!edit)}
            className="px-5 py-2 rounded-xl border border-white/10 text-white hover:border-white/30 transition"
          >
            {edit ? "Cancelar" : "Editar perfil"}
          </button>

        </div>

      </div>

      {/* BIO PERSONAL */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-8 space-y-4">

        <h2 className="text-white font-semibold">🧾 Información personal</h2>

        {!edit ? (
          <p className="text-white/60 text-sm leading-relaxed">
            {user.bio}
          </p>
        ) : (
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 text-white px-3 py-3 rounded-lg"
          />
        )}

      </div>

      {/* CONTACTO */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 space-y-2">
          <h3 className="text-white font-semibold">📧 Correo</h3>

          {!edit ? (
            <p className="text-white/50 text-sm">{user.email}</p>
          ) : (
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 text-white px-3 py-2 rounded-lg"
            />
          )}
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 space-y-2">
          <h3 className="text-white font-semibold">📱 Teléfono</h3>

          {!edit ? (
            <p className="text-white/50 text-sm">{user.phone}</p>
          ) : (
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 text-white px-3 py-2 rounded-lg"
            />
          )}
        </div>

      </div>

      {/* SAVE BUTTON */}
      {edit && (
        <div className="flex justify-end">
          <button
            onClick={() => setEdit(false)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#a449a3] to-[#2dd4bf] text-black font-semibold hover:scale-105 transition"
          >
            Guardar cambios
          </button>
        </div>
      )}

    </div>
  );
}