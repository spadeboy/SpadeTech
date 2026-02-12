"use client";

import React from "react";

export default function TestPage() {
  return (
    <main className="w-full bg-[#0a0a0a] min-h-screen">
      <section className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center">
        <h1 className="dot-matrix text-6xl text-white mb-4">NOTHING</h1>
        <p className="text-white/60 max-w-md text-center mb-8">
          Transparent engineering meets minimalist design.
        </p>
        <div className="flex gap-4">
          <button className="glass-panel px-8 py-3 text-white">
            Explore Store
          </button>
          <button className="glass-panel px-8 py-3 text-nothing-red border border-nothing-red/50">
            View Details
          </button>
        </div>
      </section>

      <section className="w-full py-24 px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="dot-matrix text-5xl text-white mb-4">PRODUCTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="glass-panel p-6 rounded-lg flex items-center justify-center min-h-48"
              >
                <p className="text-white/60">Product {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-8 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="tech-text text-white/40 text-xs">
            © 2025 Nothing Inc. • Transparent Engineering
          </p>
        </div>
      </section>
    </main>
  );
}
