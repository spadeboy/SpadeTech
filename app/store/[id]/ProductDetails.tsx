'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductDetails({ product }: { product: any }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        if (product.externalUrl) {
            window.open(product.externalUrl, '_blank');
            return;
        }

        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
        });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="w-full px-6 md:px-12 py-12 text-[#c4c4c4] min-h-screen font-mono uppercase tracking-widest">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-12 flex justify-between items-center border-b border-white/10 pb-6 text-xs"
            >
                <Link href="/store" className="hover:text-white inline-flex items-center gap-4 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> [ RETURN TO ARCHIVE ]
                </Link>
                <div className="opacity-50 hidden md:block">
                    <span>FILE: PRD_{product.id.padStart(4, '0')}</span>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1px bg-white/10 p-[1px] mt-12 bg-[#0a0a0a]">
                {/* Images */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative aspect-square md:aspect-[4/5] bg-black filter grayscale"
                >
                    <div className="absolute inset-0 z-10 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-col p-8 md:p-16 bg-[#0a0a0a] border-l border-white/10"
                >
                    <div className="mb-8 text-[10px] text-[#a3a3a3] flex justify-between">
                        <span>////// SPECIFICATION</span>
                        <span>CLASS: {product.category}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black font-display text-white mb-6 leading-none">
                        {product.name}
                    </h1>

                    <div className="text-2xl font-mono text-white mb-12">${product.price}.00</div>

                    <div className="text-xs text-[#a3a3a3] leading-loose mb-16 max-w-md">
                        <p className="mb-4">
                            {product.description || "PRECISION-MILLED COMPONENTS. DESIGNED FOR EXTREME DURABILITY AND TACTILE FEEDBACK. INTEGRATES SEAMLESSLY INTO THE MODERN HIGH-PERFORMANCE WORKFLOW."}
                        </p>
                        <ul className="space-y-2 mt-8 opacity-70">
                            <li>+ MATERIAL: ANODIZED ALUMINUM</li>
                            <li>+ FINISH: MATTE BLACK DLC</li>
                            <li>+ ORIGIN: ASSEMBLED IN USA</li>
                        </ul>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className={`w-full py-6 text-sm flex items-center justify-center gap-4 transition-all duration-300 relative overflow-hidden group border border-white/20
              ${isAdded
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-white hover:bg-white hover:text-black'
                            }`}
                    >
                        {isAdded ? (
                            <>SYSTEM: LOGGED TO CART</>
                        ) : (
                            <>
                                {product.externalUrl ? <ShoppingBag className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                                {product.externalUrl ? '[ ACCESS EXTERNAL PARTNER ]' : '[ INITIATE PURCHASE ]'}
                            </>
                        )}
                    </button>

                    <div className="mt-auto pt-12 text-[10px] text-[#a3a3a3] flex justify-between opacity-50">
                        <span>STATUS: IN STOCK</span>
                        <span>SHIPPING: 48HRS</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
