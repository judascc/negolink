"use client";

import { useMemo, useState } from "react";

type Mode = "marketplace" | "dropshipping";

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

export default function CommerceHub() {
  const [mode, setMode] = useState<Mode>("marketplace");

  const [balance] = useState(250000); // 💰 saldo simulado
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [alerts, setAlerts] = useState<string[]>([]);

  // 🔢 TOTAL DEL CARRITO
  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);

  // 🛒 ADD TO CART
  const addToCart = (product: any) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          qty: 1,
        },
      ];
    });

    setAlerts((a) => [...a, `🛒 Agregado: ${product.name}`]);
  };

  // ❤️ FAVORITOS
  const toggleFav = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  const parsePrice = (price: string) =>
    Number(price.replace(/\D/g, ""));

  return (
    <div className="space-y-6">

      {/* HEADER + BALANCE */}
      <div className="flex justify-between items-center p-4 rounded-2xl bg-black/40 border border-white/10">

        <div>
          <h1 className="text-white font-bold text-xl">
            🧠 NegoLink Commerce Hub
          </h1>
          <p className="text-xs text-white/40">
            Marketplace + Proveedores
          </p>
        </div>

        {/* 💰 SALDO */}
        <div className="text-right">
          <p className="text-xs text-white/40">Saldo disponible</p>
          <p className="text-[#2dd4bf] font-bold">
            {balance.toLocaleString()} COP
          </p>
        </div>

      </div>

      {/* MODE */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setMode("marketplace")}
          className={`px-6 py-3 rounded-xl text-sm font-semibold ${
            mode === "marketplace"
              ? "bg-[#2dd4bf] text-black"
              : "bg-white/5 text-white/60"
          }`}
        >
          🟢 Marketplace
        </button>

        <button
          onClick={() => setMode("dropshipping")}
          className={`px-6 py-3 rounded-xl text-sm font-semibold ${
            mode === "dropshipping"
              ? "bg-[#a449a3] text-white"
              : "bg-white/5 text-white/60"
          }`}
        >
          🔵 Dropshipping
        </button>
      </div>

      {/* ================= MARKETPLACE ================= */}
      {mode === "marketplace" && (
        <div className="grid md:grid-cols-3 gap-4">

          {[
            { id: "1", name: "Blusa floral", price: "35000 COP", store: "Moda", rating: 4.8 },
            { id: "2", name: "Almuerzo ejecutivo", price: "15000 COP", store: "Comida", rating: 4.7 },
            { id: "3", name: "Blusa elegante", price: "42000 COP", store: "Moda", rating: 4.9 },
          ].map((p) => {
            const priceNum = parsePrice(p.price);

            return (
              <div key={p.id} className="p-4 rounded-2xl bg-black/40 border border-white/10">

                <h3 className="text-white font-semibold">{p.name}</h3>

                <div className="text-xs text-white/40 mt-1">
                  {p.store} ⭐ {p.rating}
                </div>

                <p className="text-[#2dd4bf] font-bold mt-2">
                  {p.price}
                </p>

                {/* ACTIONS */}
                <div className="flex gap-2 mt-3">

                  <button
                    onClick={() => toggleFav(p.id)}
                    className="px-2 py-1 text-xs rounded bg-white/10"
                  >
                    {favorites.includes(p.id) ? "❤️" : "🤍"}
                  </button>

                  <button
                    onClick={() => addToCart({
                      id: p.id,
                      name: p.name,
                      price: priceNum,
                    })}
                    className="flex-1 py-1 text-xs rounded bg-[#2dd4bf] text-black font-semibold"
                  >
                    🛒 Comprar
                  </button>

                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* ================= DROPSHIPPING ================= */}
      {mode === "dropshipping" && (
        <div className="grid md:grid-cols-3 gap-4">

          {[
            { id: "d1", company: "Global Textiles", product: "Blusas mayoristas", min: 50, price: 5000 },
            { id: "d2", company: "Food Supply", product: "Comida industrial", min: 30, price: 3500 },
          ].map((p) => (
            <div key={p.id} className="p-4 rounded-2xl bg-black/40 border border-white/10">

              <h3 className="text-white font-semibold">
                {p.company}
              </h3>

              <p className="text-xs text-white/40 mt-1">
                {p.product}
              </p>

              <p className="text-[#a449a3] font-bold mt-2">
                {p.price.toLocaleString()} COP
              </p>

              <p className="text-xs text-white/40">
                MOQ: {p.min} unidades
              </p>

              <button className="w-full mt-3 py-2 text-xs rounded bg-[#a449a3] text-white">
                Contactar proveedor
              </button>

            </div>
          ))}

        </div>
      )}

      {/* ================= CART ================= */}
      <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
        <h3 className="text-white font-semibold mb-2">🛒 Carrito</h3>

        {cart.length === 0 ? (
          <p className="text-xs text-white/40">Carrito vacío</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-xs text-white/60">
                <span>{item.name} x{item.qty}</span>
                <span>{(item.price * item.qty).toLocaleString()} COP</span>
              </div>
            ))}

            <div className="mt-3 text-[#2dd4bf] font-bold">
              Total: {total.toLocaleString()} COP
            </div>
          </>
        )}
      </div>

      {/* ================= ALERTS ================= */}
      {alerts.length > 0 && (
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
          <h3 className="text-white font-semibold">🔔 Alertas</h3>

          {alerts.slice(-3).map((a, i) => (
            <p key={i} className="text-xs text-white/50">
              {a}
            </p>
          ))}
        </div>
      )}

    </div>
  );
}