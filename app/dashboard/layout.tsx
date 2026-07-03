"use client";

import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import RightPanel from "../components/RightPanel";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#0b0f19] text-white">

      {/* HEADER FULL WIDTH */}
      <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
        <Header />
      </header>

      {/* OVERLAY MOBILE */}
      {(leftOpen || rightOpen) && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => {
            setLeftOpen(false);
            setRightOpen(false);
          }}
        />
      )}

      {/* BODY LAYOUT */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT PANEL */}
        <aside
          className={`
            fixed md:static top-0 left-0 h-full
            w-64 md:w-[18%]
            bg-[#0f172a]
            border-r border-white/10
            z-50 md:z-auto
            transform transition-transform duration-300
            ${leftOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
            flex flex-col justify-between
          `}
        >
          {/* TOP MENU */}
          <div className="p-4 overflow-y-auto flex-1">
            <LeftMenu />
          </div>

          {/* FOOTER DEL PANEL IZQUIERDO */}
          <div className="p-4 border-t border-white/10 text-xs text-white/40">
            © 2026 NegoLink<br />
            Economía digital en tiempo real
          </div>
        </aside>

        {/* CENTER */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#0b0f19] space-y-4">

        

          {/* CONTENT */}
          <div className="space-y-4">
            {children}
          </div>

        </main>

        {/* RIGHT PANEL */}
        <aside
          className={`
            fixed md:static top-0 right-0 h-full
            w-64 md:w-[22%]
            bg-[#0f172a]
            border-l border-white/10
            z-50 md:z-auto
            transform transition-transform duration-300
            ${rightOpen ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0
          `}
        >
          <RightPanel />
        </aside>

      </div>

      {/* MOBILE BUTTONS */}
      <button
        onClick={() => setLeftOpen(!leftOpen)}
        className="md:hidden fixed left-3 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/10"
      >
        N
      </button>

      <button
        onClick={() => setRightOpen(!rightOpen)}
        className="md:hidden fixed right-3 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/10"
      >
        L
      </button>

    </div>
  );
}