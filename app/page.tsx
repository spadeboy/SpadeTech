"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data.slice(0, 3)); // Show top 3
      } catch (error) {
        console.error("Failed to load products", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white pb-20">
      {/* Noise Texture */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 brightness-100 contrast-150" />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-tech text-xs tracking-[0.2em] mb-4 text-neutral-400">
            SYSTEM_READY // V.2.0.4
          </div>
          <h1 className="font-dot text-7xl md:text-9xl font-bold mb-6 tracking-tighter leading-none text-black">
            SPADE TECH
          </h1>
          <p className="font-sans text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed mb-10">
            Engineered for minimalist commerce.
            <br />
            Clean lines. Responsive design. Pure functionality.
          </p>
        </motion.div>
      </section>

      {/* Product Grid Section */}
      <section className="relative w-full py-24 px-6 md:px-12 max-w-8xl mx-auto z-10 bg-[#fafafa]">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-200 pb-6">
          <h2 className="font-dot text-3xl md:text-4xl text-black">LATEST DROPS</h2>
          <div className="flex gap-4 font-tech text-xs text-neutral-500">
            <span>// NEW_ARRIVALS</span>
            <span>// SEASON_001</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-[4/5] bg-neutral-100 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-dot text-neutral-300 text-4xl">
                    {item.tag}
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />

                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-4 bg-black text-white font-bold text-sm hover:bg-neutral-800 transition-colors"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="font-tech text-xs text-neutral-500">{item.specs?.split('/')[0]}</p>
                </div>
                <span className="font-tech text-sm">${item.price}</span>
              </div>
            </div>
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
          <div className="flex gap-8 text-xs font-tech text-neutral-500">
            <a href="#" className="hover:text-black transition-colors">TWITTER</a>
            <a href="#" className="hover:text-black transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-black transition-colors">DISCORD</a>
          </div>
        </div>
      </footer>
      <Navbar />
    </main>
  );
}
