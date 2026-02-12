"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white">
      {/* Background Noise/Texture */}
      <div className="fixed inset-0 bg-noise opacity-50 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center p-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="mb-2">
            <span className="font-tech text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
              Est. 2025
            </span>
          </div>
          <h1 className="font-dot text-7xl md:text-9xl font-bold mb-6 tracking-tighter leading-none">
            NOTHING
          </h1>
          <p className="font-sans text-sm md:text-base text-white/50 max-w-sm mx-auto leading-relaxed mb-10">
            Essential dropshipping. No clutter. Just products.
            <br />
            The future of transparent commerce.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="glass-panel px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300 w-full md:w-auto min-w-[160px]">
              SHOP ALL
            </button>
            <button className="px-8 py-4 text-sm font-medium tracking-wide text-[var(--accent)] hover:text-white transition-colors duration-300 flex items-center gap-2 group">
              READ MANIFESTO
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Product Highlight Section */}
      <section className="relative w-full py-32 px-6 md:px-12 max-w-8xl mx-auto z-10">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
          <h2 className="font-dot text-3xl md:text-4xl">LATEST ARRIVALS</h2>
          <span className="font-tech text-xs text-white/40 hidden md:block">
            BATCH_001 // Q1_2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {[
            { name: "PHONE (1)", price: "$299", tag: "BESTSELLER" },
            { name: "EAR (stick)", price: "$99", tag: "NEW" },
            { name: "POWER (45W)", price: "$35", tag: "ESSENTIAL" },
            { name: "CASE (clear)", price: "$25", tag: "ACCESSORY" },
            { name: "WATCH (pro)", price: "$69", tag: "SMART" },
            { name: "CABLE (c-c)", price: "$15", tag: "UTILITY" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-white/5 border border-white/10 rounded-sm mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 font-tech text-[10px] bg-black/50 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                  {item.tag}
                </div>
                {/* Placeholder for Product Image */}
                <div className="w-full h-full flex items-center justify-center text-white/10 font-dot text-6xl group-hover:scale-105 transition-transform duration-700">
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="bg-[var(--accent)] text-white p-3 rounded-full hover:bg-red-600 transition-colors">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-tech text-xs text-white/50">
                    TRANSPARENT EDITION
                  </p>
                </div>
                <span className="font-tech text-sm">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-20 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-dot text-2xl mb-2">NOTHING STORE</h4>
            <p className="font-tech text-xs text-white/40">
              © 2026 • LONDON • DESIGNED BY SPADE
            </p>
          </div>
          <div className="flex gap-8 font-tech text-xs text-white/60">
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">CONTACT</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
