"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white">

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center p-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="mb-4">
            <span className="font-tech text-xs tracking-[0.2em] text-neutral-400 uppercase">
              Est. 2026 • Premium Dropshipping
            </span>
          </div>
          <h1 className="font-dot text-7xl md:text-9xl font-bold mb-6 tracking-tighter leading-none text-black">
            SPADE TECH
          </h1>
          <p className="font-sans text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed mb-10">
            Engineered for minimalist commerce.
            <br />
            Clean lines. Responsive design. Pure functionality.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-neutral-800 transition-all duration-300 w-full md:w-auto min-w-[160px] rounded-lg shadow-lg">
              SHOP COLLECTION
            </button>
            <button className="px-8 py-4 text-sm font-medium tracking-wide text-neutral-600 hover:text-black transition-colors duration-300 flex items-center gap-2 group">
              LEARN MORE
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Product Grid Section */}
      <section className="relative w-full py-24 px-6 md:px-12 max-w-8xl mx-auto z-10 bg-[#fafafa]">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-200 pb-6">
          <h2 className="font-dot text-3xl md:text-4xl text-black">LATEST DROPS</h2>
          <span className="font-tech text-xs text-neutral-400 hidden md:block">
            SEASON_001 // SPADE_TECH
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {[
            { name: "SPADE PHONE", price: "$699", tag: "FLAGSHIP" },
            { name: "NEURAL BUDS", price: "$149", tag: "AUDIO" },
            { name: "POWER CORE", price: "$89", tag: "ENERGY" },
            { name: "GLASS SHELL", price: "$49", tag: "PROTECTION" },
            { name: "WRIST OS", price: "$299", tag: "WEARABLE" },
            { name: "DATA CABLE", price: "$29", tag: "CONNECT" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100"
            >
              <div className="aspect-square bg-neutral-100 relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-4 left-4 font-tech text-[10px] bg-white px-2 py-1 rounded text-neutral-500 border border-neutral-200 shadow-sm z-10">
                  {item.tag}
                </div>
                {/* Placeholder Visualization */}
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center text-neutral-300 font-dot text-4xl group-hover:scale-110 group-hover:border-black group-hover:text-black transition-all duration-500">
                  S{(i + 1)}
                </div>

                {/* Quick Add - appears on hover */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-black text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-black group-hover:text-neutral-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-tech text-sm font-medium text-neutral-800">{item.price}</span>
                </div>
                <p className="font-sans text-sm text-neutral-400">
                  Minimalist engineering. High performance.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-20 px-6 border-t border-neutral-200 bg-white z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-dot text-2xl mb-2 text-black">SPADE TECH</h4>
            <p className="font-tech text-xs text-neutral-400">
              © 2026 • DESIGNED BY SPADE
            </p>
          </div>
          <div className="flex gap-8 font-tech text-xs text-neutral-500">
            <a href="#" className="hover:text-black transition-colors">TERMS</a>
            <a href="#" className="hover:text-black transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-black transition-colors">CONTACT</a>
          </div>
        </div>
      </footer>

      <Navbar />
    </main>
  );
}
