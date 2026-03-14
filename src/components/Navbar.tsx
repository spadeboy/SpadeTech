"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fdfdf9]/80 backdrop-blur-md border-b border-primary-400/20 shadow-[0_4px_30px_rgba(132,104,79,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="h-6 w-6 text-primary-700 group-hover:text-primary-600 transition-colors" />
            <span className="text-2xl font-bold text-gradient tracking-tight">
              NEXUS DROP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Products", "Trending", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-primary-900 hover:text-primary-600 transition-colors font-medium text-sm tracking-wide"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <button className="relative group p-2">
              <ShoppingBag className="h-5 w-5 text-primary-900 group-hover:text-primary-600 transition-colors" />
              <span className="absolute top-0 right-0 bg-primary-700 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-[#fdfdf9]">
                0
              </span>
            </button>
            <button
              className="md:hidden text-primary-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#fbfbf8] border-b border-primary-200"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            {["Products", "Trending", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-primary-900 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
