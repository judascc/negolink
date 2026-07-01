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
    <div className="flex w-full min-h-screen relative overflow-hidden bg-[#0b0f19] text-white">

      {/* OVERLAY */}
      {(leftOpen || rightOpen) && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => {
            setLeftOpen(false);
            setRightOpen(false);
          }}
        />
      )}

      {/* BOTÓN N */}
      <button
        onClick={() => setLeftOpen(!leftOpen)}
        className="
          md:hidden fixed left-3 top-1/2 -translate-y-1/2
          z-50 w-11 h-11
          flex items-center justify-center
          rounded-full
          bg-white/10 hover:bg-white/20
          border border-white/10
          backdrop-blur-md
          transition
        "
      >
        N
      </button>

      {/* BOTÓN L */}
      <button
        onClick={() => setRightOpen(!rightOpen)}
        className="
          md:hidden fixed right-3 top-1/2 -translate-y-1/2
          z-50 w-11 h-11
          flex items-center justify-center
          rounded-full
          bg-white/10 hover:bg-white/20
          border border-white/10
          backdrop-blur-md
          transition
        "
      >
        L
      </button>

      {/* LEFT */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-full
          w-64 md:w-[20%]
          bg-[#0f172a]
          border-r border-white/10
          z-50 md:z-auto
          transform transition-transform duration-300
          ${leftOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <LeftMenu />
      </aside>

      {/* CENTER */}
      <main className="flex-1 md:w-[60%] w-full p-4 md:p-6 bg-[#0b0f19]">

        {/* HEADER ZONE */}
        <div className="mb-4">
          <Header />
        </div>

        {/* CONTENT CARD AREA */}
        <div className="space-y-4">
          {children}
        </div>

      </main>

      {/* RIGHT */}
      <aside
        className={`
          fixed md:static top-0 right-0 h-full
          w-64 md:w-[20%]
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
  );
}