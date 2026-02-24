'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import productsData from '@/data/products.json';

// Assume 300 products in JSON
const ALL_PRODUCTS = productsData;
const ITEMS_PER_PAGE = 24;

export default function StorePage() {
    const [displayedProducts, setDisplayedProducts] = useState(ALL_PRODUCTS.slice(0, ITEMS_PER_PAGE));
    const [page, setPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState('ALL');

    const categories = ['ALL', ...Array.from(new Set(ALL_PRODUCTS.map(p => p.category)))];

    useEffect(() => {
        let filtered = ALL_PRODUCTS;
        if (activeFilter !== 'ALL') {
            filtered = ALL_PRODUCTS.filter(p => p.category === activeFilter);
        }
        setDisplayedProducts(filtered.slice(0, page * ITEMS_PER_PAGE));
    }, [page, activeFilter]);

    const handleLoadMore = () => {
        setPage(prev => prev + 1);
    };

    const handleFilter = (cat: string) => {
        setActiveFilter(cat);
        setPage(1); // Reset pagination on filter change
    };

    return (
        <div className="w-full px-6 md:px-12 py-16 text-[#c4c4c4] min-h-screen font-mono uppercase tracking-widest">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8"
            >
                <div>
                    <p className="text-xs mb-4">////// INVENTORY</p>
                    <h1 className="text-5xl md:text-8xl font-black font-display text-white">
                        CATALOG
                    </h1>
                </div>
                <p className="text-xs max-w-sm">
                    BROWSE OUR COMPLETE ARCHIVE OF METICULOUSLY DESIGNED ESSENTIALS FOR THE MODERN ERA.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-16">
                {/* Filters sidebar */}
                <motion.aside
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-48 flex-shrink-0 text-xs text-[#a3a3a3]"
                >
                    <div className="sticky top-32 space-y-8">
                        <div>
                            <p className="mb-6 opacity-50">FILTER BY</p>
                            <ul className="space-y-4">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => handleFilter(cat)}
                                            className={`transition-all block ${activeFilter === cat ? 'text-white flex items-center gap-2' : 'hover:text-white'}`}
                                        >
                                            {activeFilter === cat ? `┌ ${cat}` : `  ${cat}`}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/10 p-[1px] mb-12">
                        {displayedProducts.map((product, i) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#0a0a0a]"
                            >
                                <Link href={`/store/${product.id}`} className="group flex flex-col h-full bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-300 block relative overflow-hidden p-6 border border-transparent hover:border-white/20">
                                    <div className="flex justify-between items-start mb-6 text-[10px] text-[#a3a3a3] z-10 relative">
                                        <span>ID: {product.id.padStart(4, '0')}</span>
                                        <span>{product.category}</span>
                                    </div>

                                    <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-black filter grayscale transition-all duration-700 group-hover:grayscale-0">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="flex justify-between items-end z-10 relative mt-auto border-t border-white/10 pt-4">
                                        <h3 className="text-sm text-white group-hover:text-white leading-tight font-display">{product.name}</h3>
                                        <span className="text-sm text-white">${product.price}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {displayedProducts.length < (activeFilter === 'ALL' ? ALL_PRODUCTS.length : ALL_PRODUCTS.filter(p => p.category === activeFilter).length) && (
                        <div className="flex justify-center mt-12 pb-12 border-b border-white/10">
                            <button
                                onClick={handleLoadMore}
                                className="px-8 py-4 text-xs bg-white text-black hover:bg-[#c4c4c4] transition-colors relative overflow-hidden group"
                            >
                                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black"></span>
                                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black"></span>
                                [ LOAD MORE ARCHIVES ]
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
