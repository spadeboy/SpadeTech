"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, ShieldCheck, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredProducts, Product } from "@/lib/products";
import { useCart } from "@/lib/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen font-serif bg-[#fdfdf9]">

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,158,124,0.15)_0,rgba(253,253,249,1)_100%)] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 text-sm text-primary-800 font-medium border border-primary-400/30 shadow-[0_0_15px_rgba(132,104,79,0.1)]"
          >
            <Star size={16} className="text-primary-700" /> Premium Curated Selection
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 text-primary-950"
          >
            Elevate Your Lifestyle <br />
            <span className="text-gradient">With Our Collection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-800/80 max-w-2xl mx-auto mb-10 md:mb-12 px-4"
          >
            Discover meticulously sourced tech, home, and lifestyle essentials that blend aesthetic design with everyday utility.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link href="#products" className="bg-primary-800 hover:bg-primary-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(132,104,79,0.2)] flex items-center justify-center gap-2">
              Shop Now <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="border-y border-primary-200 bg-[#fbfbf8]/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: CheckCircle2, title: "Curated Quality", desc: "Every item is hand-selected and verified to meet our highest standards." },
            { icon: ShieldCheck, title: "Secure Checkout", desc: "Your purchases are processed securely with encrypted checkout." },
            { icon: Star, title: "Customer Obsessed", desc: "We provide dedicated support to ensure a seamless experience." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-3xl hover:bg-white transition-colors border border-transparent hover:border-primary-200 shadow-sm hover:shadow-md"
            >
              <div className="p-3 rounded-2xl bg-primary-200/60 text-primary-800">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-950 mb-1">{feature.title}</h3>
                <p className="text-primary-800/80 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Feed */}
      <section id="products" className="py-24 relative">
        <div className="absolute top-1/2 left-0 w-full h-96 bg-primary-200/30 blur-[120px] rounded-full point-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-950">Featured Items</h2>
              <p className="text-primary-800/80">Our most requested and highly-rated products.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass-panel rounded-3xl overflow-hidden hover:border-primary-400/50 transition-all shadow-md hover:shadow-[0_10px_40px_rgba(132,104,79,0.15)] flex flex-col bg-white"
              >
                <div className="relative aspect-square overflow-hidden bg-[#eae7db]">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100 mix-blend-multiply"
                  />
                  {product.trending && (
                    <div className="absolute top-4 left-4 bg-primary-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      🔥 Top Seller
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-primary-700 font-bold tracking-wider uppercase mb-2">{product.category}</div>
                  <h3 className="text-lg font-bold text-primary-950 mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-2xl font-black text-primary-950">${product.price}</span>
                    <span className="text-sm text-primary-800/60 line-through pb-1">${product.originalPrice}</span>
                  </div>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full py-4 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 bg-primary-800 hover:bg-primary-900 hover:shadow-[0_0_20px_rgba(132,104,79,0.2)]"
                    >
                      <ShoppingCart size={18} /> Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
