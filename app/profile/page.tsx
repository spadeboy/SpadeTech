"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Settings, CreditCard, Package, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Profile() {
    const menuItems = [
        { icon: Package, label: "Orders", val: "2 Active" },
        { icon: CreditCard, label: "Payment Methods", val: "**** 4242" },
        { icon: Settings, label: "Preferences", val: "" },
        { icon: LogOut, label: "Log Out", val: "" },
    ];

    return (
        <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white pb-32">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 brightness-100 contrast-150" />

            <div className="relative z-10 max-w-xl mx-auto px-6 pt-24">
                <div className="flex items-center gap-6 mb-12">
                    <div className="w-20 h-20 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                        <User size={32} className="text-neutral-400" />
                    </div>
                    <div>
                        <h1 className="font-dot text-2xl font-bold">SPADE MEMBER</h1>
                        <p className="font-tech text-sm text-neutral-500">ID: #99283-AX</p>
                    </div>
                </div>

                <div className="space-y-2">
                    {menuItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex justify-between items-center p-5 border border-neutral-100 bg-white hover:border-black rounded-lg cursor-pointer transition-colors group"
                        >
                            <div className="flex items-center gap-4">
                                <item.icon className="text-neutral-400 group-hover:text-black transition-colors" size={20} />
                                <span className="font-medium">{item.label}</span>
                            </div>
                            {item.val && <span className="font-tech text-xs text-neutral-400">{item.val}</span>}
                        </motion.div>
                    ))}
                </div>
            </div>
            <Navbar />
        </main>
    );
}
