"use client";

import React from "react";
import GlassCard from "./GlassCard";

const ProductGrid: React.FC = () => {
  const products = [
    {
      title: "Phone Pro",
      category: "Communications",
      colSpan: 2,
      rowSpan: 1,
      specs: [
        { label: "Processor", value: "Snapdragon 8" },
        { label: "RAM", value: "12GB LPDDR5" },
        { label: "Display", value: "6.7\" AMOLED" },
        { label: "Battery", value: "5000mAh" },
      ],
    },
    {
      title: "Ear Buds",
      category: "Audio",
      colSpan: 1,
      rowSpan: 1,
      specs: [
        { label: "Driver", value: "12mm" },
        { label: "Noise Cancel", value: "ANC 40dB" },
        { label: "Battery", value: "32h Total" },
        { label: "Weight", value: "4.3g" },
      ],
    },
    {
      title: "Watch Pro",
      category: "Wearables",
      colSpan: 1,
      rowSpan: 1,
      specs: [
        { label: "Heart Rate", value: "24/7" },
        { label: "GPS", value: "Multi-band" },
        { label: "Water Resist", value: "100m" },
        { label: "Battery", value: "14 days" },
      ],
    },
    {
      title: "Transparent Case",
      category: "Accessories",
      colSpan: 1,
      rowSpan: 1,
      specs: [
        { label: "Material", value: "Premium Glass" },
        { label: "Drop Test", value: "3m Certified" },
        { label: "Thickness", value: "1.2mm" },
        { label: "Clarity", value: "99.8%" },
      ],
    },
    {
      title: "Charging Hub",
      category: "Power",
      colSpan: 1,
      rowSpan: 2,
      specs: [
        { label: "Input", value: "140W USB-C" },
        { label: "Ports", value: "6x Multi" },
        { label: "Efficiency", value: "98.5%" },
        { label: "Thermal", value: "Smart Cooling" },
      ],
    },
    {
      title: "Connector Kit",
      category: "Connectivity",
      colSpan: 2,
      rowSpan: 1,
      specs: [
        { label: "Standard", value: "USB 3.1 Gen 2" },
        { label: "Speed", value: "10Gbps" },
        { label: "Variants", value: "8 Types" },
        { label: "Cable Length", value: "1.5m" },
      ],
    },
    {
      title: "Screen Protector",
      category: "Protection",
      colSpan: 1,
      rowSpan: 1,
      specs: [
        { label: "Hardness", value: "9H" },
        { label: "Oleophobic", value: "Yes" },
        { label: "Thickness", value: "0.3mm" },
        { label: "Clarity", value: "Crystal" },
      ],
    },
  ];

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="dot-matrix text-4xl md:text-5xl font-bold text-white mb-4">
          PRODUCT CATALOG
        </h2>
        <p className="tech-text text-white/60 mb-2">
          Transparent Engineering Meets Modern Design
        </p>
        <div className="h-1 w-32 bg-gradient-to-r from-nothing-red to-transparent" />
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
          {products.map((product, idx) => (
            <GlassCard
              key={idx}
              title={product.title}
              category={product.category}
              specs={product.specs}
              colSpan={product.colSpan}
              rowSpan={product.rowSpan}
            />
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <button className="glass-panel px-12 py-4 text-lg tech-text text-white hover-glow transition inline-block">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
