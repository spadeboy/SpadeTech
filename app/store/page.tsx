"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Store() {
    const products = [
        { name: "SPADE PHONE", price: "$699", tag: "FLAGSHIP" },
        { name: "NEURAL BUDS", price: "$149", tag: "AUDIO" },
        { name: "POWER CORE", price: "$89", tag: "ENERGY" },
        { name: "GLASS SHELL", price: "$49", tag: "PROTECTION" },
        { name: "WRIST OS", price: "$299", tag: "WEARABLE" },
        { name: "DATA CABLE", price: "$29", tag: "CONNECT" },
        { name: "DESK MAT", price: "$49", tag: "WORKSPACE" },
        { name: "SCREEN GUARD", price: "$19", tag: "PROTECTION" },
        { name: "CHARGER (65W)", price: "$59", tag: "ENERGY" },
    ];

    return (
        <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white pb-32">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 brightness-100 contrast-150" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
                <header className="mb-12">
                    <h1 className="font-dot text-5xl font-bold mb-4">STORE</h1>
                    <p className="font-tech text-neutral-500">FULL CATALOG // SEASON_001</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group cursor-pointer border border-neutral-200 bg-white hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden"
                        >
                            <div className="aspect-square bg-neutral-50 relative flex items-center justify-center p-8">
                                <div className="absolute top-4 left-4 font-tech text-[10px] bg-white px-2 py-1 rounded border border-neutral-100">
                                    {item.tag}
                                </div>
                                <div className="w-40 h-40 rounded-full border border-dashed border-neutral-300 flex items-center justify-center text-neutral-300 font-dot text-2xl group-hover:border-black group-hover:text-black transition-colors">
                                    IMG_0{i + 1}
                                </div>
                            </div>
                            <div className="p-6 border-t border-neutral-200">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <span className="font-tech text-neutral-600">{item.price}</span>
                                </div>
                                <button className="w-full mt-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors">
                                    ADD TO CART
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Navbar />
        </main>
    );
}
