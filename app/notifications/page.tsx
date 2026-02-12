"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Notifications() {
    const alerts = [
        { title: "ORDER SHIPPED", desc: "Your order #9928 has been dispatched.", time: "2h ago", type: "system" },
        { title: "PRICE DROP", desc: "Neuro Buds are now $129 (was $149).", time: "5h ago", type: "promo" },
        { title: "WELCOME", desc: "Welcome to Spade Tech priority access.", time: "1d ago", type: "system" },
    ];

    return (
        <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white pb-32">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 brightness-100 contrast-150" />

            <div className="relative z-10 max-w-lg mx-auto px-6 pt-24">
                <header className="mb-8 flex justify-between items-end">
                    <h1 className="font-dot text-4xl font-bold">ALERTS</h1>
                    <span className="font-tech text-xs bg-black text-white px-2 py-1 rounded-full">3 NEW</span>
                </header>

                <div className="space-y-4">
                    {alerts.map((alert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 border border-neutral-200 bg-white rounded-lg hover:border-black transition-colors cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-tech text-xs uppercase tracking-wider text-neutral-500">{alert.type}</span>
                                <span className="font-tech text-xs text-neutral-400">{alert.time}</span>
                            </div>
                            <h3 className="font-bold mb-1">{alert.title}</h3>
                            <p className="text-sm text-neutral-600">{alert.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Navbar />
        </main>
    );
}
