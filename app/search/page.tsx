"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Search() {
    const [query, setQuery] = useState("");

    return (
        <main className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white pb-32">
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 brightness-100 contrast-150" />

            <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 text-center">
                <h1 className="font-dot text-4xl mb-8">SEARCH ARCHIVE</h1>

                <div className="relative mb-12">
                    <input
                        type="text"
                        placeholder="Type to search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-transparent border-b-2 border-neutral-200 text-3xl py-4 focus:outline-none focus:border-black font-sans placeholder:text-neutral-200"
                        autoFocus
                    />
                    <SearchIcon className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400" size={32} />
                </div>

                {query && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-left"
                    >
                        <p className="font-tech text-neutral-400 text-sm mb-6">RESULTS FOR "{query}"</p>
                        <div className="p-4 border border-neutral-100 rounded bg-neutral-50 text-neutral-400 text-center py-12">
                            NO RESULTS FOUND IN LOCAL INDEX.
                        </div>
                    </motion.div>
                )}
            </div>
            <Navbar />
        </main>
    );
}
