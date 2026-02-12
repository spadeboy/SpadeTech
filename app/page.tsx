"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="dot-matrix text-6xl md:text-7xl font-bold text-white mb-4 fade-in-up">
            NOTHING
          </h1>
          <p className="tech-text text-sm text-white/60 text-center max-w-md mb-8 mx-auto">
            The future of transparent engineering
          </p>
          <div className="flex gap-4 justify-center">
            <button className="glass-panel px-8 py-3 text-white hover-glow rounded-lg transition">
              Explore Store
            </button>
            <button className="glass-panel px-8 py-3 text-nothing-red hover-glow border border-nothing-red/50 rounded-lg transition">
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="dot-matrix text-4xl md:text-5xl font-bold text-white mb-4">
            PRODUCT CATALOG
          </h2>
          <p className="tech-text text-white/60 mb-2">
            Transparent Engineering Meets Modern Design
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-nothing-red to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Phone Pro", spec: "12GB RAM" },
              { title: "Ear Buds", spec: "32h Battery" },
              { title: "Watch Pro", spec: "14 Days" },
              { title: "Case", spec: "Premium Glass" },
              { title: "Hub", spec: "140W USB-C" },
              { title: "Kit", spec: "8 Types" },
            ].map((product, idx) => (
              <motion.div
                key={idx}
                className="glass-panel p-6 rounded-lg hover-glow transition cursor-pointer h-48 flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <h3 className="dot-matrix text-xl text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="tech-text text-nothing-red text-xs mb-4">
                    {product.spec}
                  </p>
                </div>
                <button className="tech-text text-white/60 hover:text-nothing-red transition text-sm">
                  Add to Cart →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <h4 className="dot-matrix text-lg text-white">NOTHING STORE</h4>
              <p className="tech-text text-white/60 text-sm">
                Transparent engineering meets minimalist design.
              </p>
            </motion.div>

            <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h4 className="dot-matrix text-lg text-white">QUICK LINKS</h4>
              <ul className="space-y-2">
                {["Products", "Support", "Warranty", "Feedback"].map((link) => (
                  <li key={link}>
                    <a href="#" className="tech-text text-white/60 hover:text-nothing-red text-sm transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h4 className="dot-matrix text-lg text-white">CONNECT</h4>
              <div className="flex gap-3">
                {["X", "IG", "YT"].map((platform) => (
                  <button key={platform} className="glass-panel w-10 h-10 rounded-full flex items-center justify-center tech-text text-white/60 hover:text-nothing-red transition text-xs">
                    {platform}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="tech-text text-white/40 text-xs">
              © 2025 Nothing Inc. • Transparent Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Dock */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          className="glass-pill p-3 flex items-center gap-2 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {["Home", "Store", "Search", "Alerts", "Cart", "Profile"].map((item) => (
            <motion.button
              key={item}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white/60 hover:text-nothing-red transition text-xs"
              whileHover={{ scale: 1.1 }}
            >
              {item[0]}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
