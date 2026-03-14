"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp } from "lucide-react";
import Image from "next/image";
import { featuredProducts } from "@/lib/products";

// Filtering only trending products
const trendingProducts = featuredProducts.filter(p => p.trending);

export default function TrendingPage() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#fdfdf9] font-serif">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-950">Trending Now</h1>
        <p className="text-primary-800/80 max-w-2xl mx-auto">
          The highest-converting, most profitable items currently moving through our automated dropshipping pipeline.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trendingProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 4) * 0.1 }}
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
              <div className="absolute top-4 left-4 bg-primary-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                🔥 Hot
              </div>
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
                  className="w-full py-4 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 bg-primary-800 hover:bg-primary-900 hover:shadow-[0_0_20px_rgba(132,104,79,0.2)]"
                >
                  <Zap size={18} /> Simulate Auto-Fulfill
                </button>
                <p className="text-sm text-center text-emerald-700 mt-4 font-bold flex items-center justify-center gap-1">
                  <TrendingUp size={14} /> {product.profitMargin}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
