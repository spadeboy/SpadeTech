"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Store() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/products');
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Failed to load products", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white pb-32">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 brightness-100 contrast-150" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
                <header className="mb-12">
                    <h1 className="font-dot text-5xl font-bold mb-4">STORE</h1>
                    <p className="font-tech text-neutral-500">CYBERPUNK COLLECTION // SEASON_001</p>
                </header>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="font-tech text-neutral-400 animate-pulse">LOADING CATALOG_DATA...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="group cursor-pointer border border-neutral-200 bg-white hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden flex flex-col"
                            >
                                <div className="aspect-square bg-neutral-50 relative flex items-center justify-center p-8">
                                    <div className="absolute top-4 left-4 font-tech text-[10px] bg-white px-2 py-1 rounded border border-neutral-100">
                                        {item.tag}
                                    </div>
                                    <div className="w-40 h-40 rounded-full border border-dashed border-neutral-300 flex items-center justify-center text-neutral-300 font-dot text-2xl group-hover:border-black group-hover:text-black transition-colors text-center p-2 break-all overflow-hidden relative">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover rounded-full opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                                            />
                                        ) : (
                                            item.name.split(' ')[0]
                                        )}
                                    </div>
                                    {item.specs && (
                                        <div className="absolute bottom-4 left-4 right-4 font-tech text-[10px] text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                                            {item.specs}
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 border-t border-neutral-200 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                                        <span className="font-tech text-neutral-600">${item.price}</span>
                                    </div>
                                    <p className="text-sm text-neutral-500 mb-4 flex-grow line-clamp-3">{item.description}</p>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="w-full py-3 bg-black text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors active:scale-95 transform disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={item.stock === 0}
                                    >
                                        {item.stock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
            <Navbar />
        </main>
    );
}
