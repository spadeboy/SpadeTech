"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  title: string;
  category: string;
  specs: {
    label: string;
    value: string;
  }[];
  colSpan?: number;
  rowSpan?: number;
  image?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  title,
  category,
  specs,
  colSpan = 1,
  rowSpan = 1,
  image,
}) => {
  const colClass =
    colSpan === 2 ? "md:col-span-2" : colSpan === 3 ? "md:col-span-3" : "";
  const rowClass =
    rowSpan === 2 ? "md:row-span-2" : rowSpan === 3 ? "md:row-span-3" : "";

  return (
    <motion.div
      className={`${colClass} ${rowClass} group`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="glass-panel h-full p-6 flex flex-col justify-between relative overflow-hidden hover-glow cursor-pointer">
        {/* Background image if provided */}
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Top Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="dot-matrix text-xl md:text-2xl font-bold text-white mb-1">
                {title}
              </h3>
              <p className="tech-text text-nothing-red">{category}</p>
            </div>

            {/* SKU/ID in corner */}
            <div className="tech-text text-nothing-red/70 text-right">
              <div>SKU</div>
              <div className="font-bold text-white/60">
                {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4 my-auto py-8">
            {specs.map((spec, idx) => (
              <div key={idx} className="space-y-2">
                <p className="tech-text text-white/50">{spec.label}</p>
                <p className="dot-matrix text-lg text-white">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end pt-6 border-t border-white/10">
            <div>
              <p className="tech-text text-white/50 mb-1">Price</p>
              <p className="dot-matrix text-2xl text-white">$299</p>
            </div>
            <button className="glass-panel px-4 py-2 text-sm tech-text text-white hover-glow transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-nothing-red/50 rounded-bl-2xl group-hover:border-nothing-red transition" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-nothing-red/50 rounded-tr-2xl group-hover:border-nothing-red transition" />
      </div>
    </motion.div>
  );
};

export default GlassCard;
