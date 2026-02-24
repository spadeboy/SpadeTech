'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import Link from 'next/link';
import productsData from '@/data/products.json';

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<typeof productsData>([]);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const q = query.toLowerCase();
        const filtered = productsData.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        ).slice(0, 10); // Limit to 10 results

        setResults(filtered);
    }, [query]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col items-center justify-start pt-32 px-6 font-mono text-white"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-12 right-12 hover:text-white/50 transition-colors"
                    >
                        [ <X className="inline w-6 h-6" /> CLOSE ]
                    </button>

                    <div className="w-full max-w-4xl relative">
                        <div className="flex items-center border-b-2 border-white pb-4 mb-12">
                            <span className="text-2xl mr-4">//////</span>
                            <input
                                type="text"
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="SEARCH ARCHIVE..."
                                className="w-full bg-transparent text-4xl md:text-6xl font-display outline-none placeholder:text-white/20 uppercase"
                            />
                        </div>

                        {query && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="w-full"
                            >
                                <p className="text-xs text-[#a3a3a3] mb-8 tracking-widest uppercase">
                                    [ RESULTS: {results.length} ]
                                </p>

                                {results.length > 0 ? (
                                    <ul className="space-y-4">
                                        {results.map(product => (
                                            <li key={product.id}>
                                                <Link
                                                    href={`/store/${product.id}`}
                                                    onClick={onClose}
                                                    className="group flex justify-between items-end border-b border-white/10 pb-4 hover:border-white transition-colors"
                                                >
                                                    <div>
                                                        <span className="text-[10px] text-[#a3a3a3] block mb-2 tracking-widest uppercase">ID: {product.id.padStart(4, '0')} | {product.category}</span>
                                                        <span className="text-xl md:text-2xl font-display group-hover:text-[#a3a3a3] transition-colors">{product.name}</span>
                                                    </div>
                                                    <span className="text-sm">${product.price}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-[#a3a3a3] tracking-widest uppercase mt-12 text-center text-sm">
                                        [ NO ENTRIES FOUND IN ARCHIVE ]
                                    </p>
                                )}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
