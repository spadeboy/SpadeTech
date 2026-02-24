'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md text-white transition-all duration-300">
                <div className="w-full px-6 md:px-12 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="text-3xl font-bold tracking-tighter flex items-center gap-2 group font-display uppercase">
                            SPADEDROP
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-1 justify-center">
                        <nav className="flex gap-12 text-xs uppercase tracking-widest text-[#a3a3a3]">
                            <Link href="/store" className="hover:text-white transition-colors relative group">
                                <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity">┌</span>
                                Store
                                <span className="absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity">┐</span>
                            </Link>
                            <Link href="/about" className="hover:text-white transition-colors relative group">
                                <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity">┌</span>
                                About
                                <span className="absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity">┐</span>
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-[#a3a3a3]">
                        <Link href="/auth/signin" className="hover:text-white transition-colors uppercase tracking-widest hidden md:block group relative">
                            [ SIGN IN ]
                        </Link>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="hover:text-white transition-colors uppercase tracking-widest hidden md:block"
                        >
                            [ Search ]
                        </button>
                        <button
                            className="hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2 group"
                            onClick={() => setIsCartOpen(true)}
                        >
                            [ Cart {cartCount > 0 && <span className="text-white">({cartCount})</span>} ]
                        </button>
                        <button className="md:hidden text-white shrink-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 top-24 z-30 bg-[#0a0a0a] border-t border-white/10 text-white flex flex-col font-mono uppercase tracking-widest">
                    <nav className="flex flex-col p-8 gap-8 text-sm text-[#a3a3a3]">
                        <Link href="/store" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors border-b border-white/10 pb-4 flex justify-between"><span>01</span> STORE</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors border-b border-white/10 pb-4 flex justify-between"><span>02</span> ABOUT</Link>
                        <button onClick={() => { setIsSearchOpen(true); setIsMenuOpen(false); }} className="hover:text-white transition-colors border-b border-white/10 pb-4 flex justify-between uppercase"><span>03</span> SEARCH</button>
                        <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors border-b border-white/10 pb-4 flex justify-between uppercase"><span>04</span> SIGN IN</Link>
                    </nav>
                </div>
            )}

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
