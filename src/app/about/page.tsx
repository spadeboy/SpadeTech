"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Server } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#fdfdf9] font-serif">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-950">About Nexus Drop</h1>
        <p className="text-xl text-primary-800/80">
          The world's most advanced automated dropshipping infrastructure.
        </p>
      </motion.div>

      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl bg-white shadow-sm border-primary-200"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-200/60 rounded-xl text-primary-800">
              <Zap size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary-950">100% Automated Workflow</h2>
          </div>
          <p className="text-primary-800/80 leading-relaxed">
            Nexus Drop removes the middleman and the manual labor. Our advanced API infrastructure connects directly with suppliers, updating inventory, processing orders, and securing profits instantly without requiring a single click from you. This is true hands-off e-commerce.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl bg-white shadow-sm border-primary-200"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-200/60 rounded-xl text-primary-800">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary-950">Premium Old Money Architecture</h2>
          </div>
          <p className="text-primary-800/80 leading-relaxed">
            Built from scratch on Next.js 15, we enforce an elegant, fully responsive "old money" design language. The subtle beige and charcoal aesthetic captures a high-ticket, premium buyer intent, increasing conversion rates by projecting luxury and trust.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl bg-white shadow-sm border-primary-200"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-200/60 rounded-xl text-primary-800">
              <Server size={28} />
            </div>
            <h2 className="text-2xl font-bold text-primary-950">Resilient Infrastructure</h2>
          </div>
          <p className="text-primary-800/80 leading-relaxed">
            We use cutting-edge edge networking and automated scaling to handle immense amounts of traffic. The site is optimized to score perfectly on core web vitals and provide an instantaneous feedback loop for customers navigating the product feed.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
