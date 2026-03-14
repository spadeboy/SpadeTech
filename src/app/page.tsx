"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, ShieldCheck, CheckCircle2, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredProducts, Product } from "@/lib/products";

// Toast Notification System
function Toast({ message, type = "success", onClose }: { message: string, type?: "success" | "info", onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border ${
        type === "success" 
          ? "glass-panel border-emerald-600/30" 
          : "glass-panel border-primary-500/30"
      }`}
    >
      {type === "success" ? <CheckCircle2 className="text-emerald-700" /> : <Zap className="text-primary-700" />}
      <span className="font-medium text-primary-950">{message}</span>
    </motion.div>
  );
}

export default function Home() {
  const [totalProfit, setTotalProfit] = useState(0);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [toasts, setToasts] = useState<{ id: number, message: string, type: "success"|"info" }[]>([]);

  const addToast = (message: string, type: "success"|"info" = "success") => {
    setToasts(prev => [...prev, { id: Date.now(), message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleFulfill = (product: Product) => {
    if (processingId) return;
    
    setProcessingId(product.id);
    addToast(`Processing proxy order for ${product.name}...`, "info");
    
    // Simulate automatic fulfillment API
    setTimeout(() => {
      const profitNum = parseFloat(product.profitMargin.replace(/[^0-9.]/g, ''));
      setTotalProfit(prev => prev + profitNum);
      setProcessingId(null);
      addToast(`Order Automatically Fulfilled! +$${profitNum.toFixed(2)} Profit Sent to Bank!`, "success");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen font-serif bg-[#fdfdf9]">
      {/* Total Profit Tracker Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-24 left-6 z-40 glass-panel px-6 py-4 rounded-2xl flex flex-col items-start gap-1 border-emerald-600/20 shadow-md"
      >
        <span className="text-xs text-primary-800/80 uppercase tracking-wider font-bold">Total Automated Profit</span>
        <div className="flex items-center text-emerald-700 text-3xl font-black">
          <DollarSign size={28} />
          {totalProfit.toFixed(2)}
        </div>
      </motion.div>

      <AnimatePresence>
        {toasts.map(t => (
          <Toast key={t.id} message={t.message} type={t.type} onClose={() => removeToast(t.id)} />
        ))}
      </AnimatePresence>

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
            <Zap size={16} className="text-primary-700" /> Fully Automated Dropshipping
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-primary-950"
          >
            The Future of E-Commerce <br />
            <span className="text-gradient">Is Fully Automated</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-primary-800/80 max-w-2xl mx-auto mb-12"
          >
            We handle the products, the scaling, and the fulfillment. You just collect the profits. Start simulating our premium automated flow below.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link href="#products" className="bg-primary-800 hover:bg-primary-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(132,104,79,0.2)] flex items-center justify-center gap-2">
              Simulate Orders <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="border-y border-primary-200 bg-[#fbfbf8]/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "1-Click Sourcing", desc: "Products are automatically imported to your store." },
            { icon: ShieldCheck, title: "Automated Fulfillment", desc: "Orders are processed and shipped absolutely automatically." },
            { icon: TrendingUp, title: "Direct to Bank", desc: "The margin is extracted and deposited immediately." }
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-950">Live Product Feed</h2>
              <p className="text-primary-800/80">Automatically synchronized items with max profit margins.</p>
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
                      onClick={() => handleFulfill(product)}
                      disabled={processingId !== null}
                      className={`w-full py-4 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 ${
                        processingId === product.id 
                          ? "bg-primary-400 animate-pulse cursor-not-allowed" 
                          : "bg-primary-800 hover:bg-primary-900 hover:shadow-[0_0_20px_rgba(132,104,79,0.2)]"
                      }`}
                    >
                      {processingId === product.id ? (
                        <>Processing...</>
                      ) : (
                        <><Zap size={18} /> Simulate Auto-Fulfill</>
                      )}
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
      </section>
    </div>
  );
}
