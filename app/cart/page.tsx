"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Cart() {
    return (
        <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white pb-32">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 brightness-100 contrast-150" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24">
                <h1 className="font-dot text-4xl font-bold mb-12">CART (3)</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex gap-4 p-4 border border-neutral-100 rounded-lg bg-neutral-50">
                                <div className="w-24 h-24 bg-white border border-neutral-200 flex items-center justify-center font-dot text-neutral-300">
                                    IMG
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <h3 className="font-bold">SPADE PRODUCT 0{i + 1}</h3>
                                        <span className="font-tech">$99.00</span>
                                    </div>
                                    <p className="text-xs text-neutral-500 mt-1">Variant: Black / Matte</p>
                                    <div className="mt-4 flex gap-4 text-xs font-tech underline cursor-pointer text-neutral-400 hover:text-black">
                                        <span>REMOVE</span>
                                        <span>EDIT</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="md:col-span-1">
                        <div className="p-6 border border-neutral-200 rounded-lg bg-white sticky top-24">
                            <h2 className="font-bold mb-6">SUMMARY</h2>
                            <div className="space-y-4 text-sm mb-8">
                                <div className="flex justify-between">
                                    <span className="text-neutral-500">Subtotal</span>
                                    <span className="font-tech">$297.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-500">Shipping</span>
                                    <span className="font-tech">CALCULATED AT NEXT STEP</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-neutral-100 flex justify-between font-bold text-lg mb-8">
                                <span>TOTAL</span>
                                <span>$297.00</span>
                            </div>
                            <button className="w-full py-4 bg-black text-white font-bold rounded hover:bg-neutral-800 transition-colors">
                                CHECKOUT
                            </button>
                            <p className="text-[10px] text-center mt-4 text-neutral-400">
                                SECURE ENCRYPTED CHECKOUT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </main>
    );
}
