"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Cart() {
    const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white pb-32">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 brightness-100 contrast-150" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24">
                <h1 className="font-dot text-4xl font-bold mb-12">CART ({items.length})</h1>

                {items.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-neutral-300 rounded-lg">
                        <p className="font-tech text-neutral-500 mb-6">YOUR CART IS EMPTY</p>
                        <Link href="/store">
                            <button className="px-8 py-3 bg-black text-white rounded hover:bg-neutral-800 transition-colors">
                                BROWSE STORE
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-6">
                            <AnimatePresence>
                                {items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex gap-4 p-4 border border-neutral-100 rounded-lg bg-neutral-50"
                                    >
                                        <div className="w-24 h-24 bg-white border border-neutral-200 flex items-center justify-center font-dot text-neutral-300">
                                            {item.tag}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <h3 className="font-bold">{item.name}</h3>
                                                <span className="font-tech">${item.price * item.quantity}</span>
                                            </div>
                                            <p className="text-xs text-neutral-500 mt-1">{item.description}</p>

                                            <div className="flex justify-between items-center mt-4">
                                                <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="text-neutral-400 hover:text-black px-2"
                                                    >-</button>
                                                    <span className="font-tech text-sm w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="text-neutral-400 hover:text-black px-2"
                                                    >+</button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-xs font-tech underline text-neutral-400 hover:text-red-600 transition-colors"
                                                >
                                                    REMOVE
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        <div className="md:col-span-1">
                            <div className="p-6 border border-neutral-200 rounded-lg bg-white sticky top-24">
                                <h2 className="font-bold mb-6">SUMMARY</h2>
                                <div className="space-y-4 text-sm mb-8">
                                    <div className="flex justify-between">
                                        <span className="text-neutral-500">Subtotal</span>
                                        <span className="font-tech">${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-500">Shipping</span>
                                        <span className="font-tech">FREE</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-neutral-100 flex justify-between font-bold text-lg mb-8">
                                    <span>TOTAL</span>
                                    <span>${cartTotal.toFixed(2)}</span>
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
                )}
            </div>
            <Navbar />
        </main>
    );
}
