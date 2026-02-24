'use client';

import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartSidebar() {
    const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/80 z-[60] transition-opacity cursor-pointer"
                onClick={() => setIsCartOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-[#0a0a0a] border-l border-white/20 z-[60] shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 text-[#c4c4c4] font-mono tracking-widest uppercase">
                <div className="flex items-center justify-between p-8 border-b border-white/20">
                    <h2 className="text-sm font-bold flex items-center gap-4">
                        [ CART ] <span className="opacity-50">ITEMS: {items.length}</span>
                    </h2>
                    <button onClick={() => setIsCartOpen(false)} className="hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-[#a3a3a3] space-y-4 text-xs">
                            <p>////// CART IS EMPTY</p>
                        </div>
                    ) : (
                        <ul className="space-y-8">
                            {items.map((item) => (
                                <li key={item.id} className="flex gap-6 group">
                                    <div className="relative w-28 h-28 bg-[#0a0a0a] border border-white/10 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start text-xs border-b border-white/10 pb-2 mb-2">
                                            <h3 className="font-display pr-4 text-white leading-tight">{item.name}</h3>
                                            <button onClick={() => removeFromCart(item.id)} className="text-[#a3a3a3] hover:text-white transition-colors">
                                                [ REMOVE ]
                                            </button>
                                        </div>
                                        <p className="text-sm mt-1 text-white">${item.price}</p>

                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-4 text-xs border border-white/20 px-2 py-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="hover:text-white transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="font-bold w-4 text-center select-none">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="hover:text-white transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <span className="text-[10px] text-[#a3a3a3]">ID: {item.id.padStart(4, '0')}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-8 border-t border-white/20 bg-[#0a0a0a]">
                        <div className="flex justify-between items-end mb-8">
                            <span className="text-[10px] text-[#a3a3a3]">////// SUBTOTAL</span>
                            <span className="font-display text-3xl text-white">${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-white text-black py-5 text-sm font-bold border border-white hover:bg-black hover:text-white transition-colors duration-300 group relative">
                            [ SECURE CHECKOUT ]
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
