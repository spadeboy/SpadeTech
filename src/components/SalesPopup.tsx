"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import { generatedProducts } from "@/lib/products";

const cities = ["London", "New York", "Paris", "Tokyo", "Berlin", "Sydney", "Toronto", "Dubai", "Los Angeles", "Singapore"];

export default function SalesPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [productIdx, setProductIdx] = useState(0);
  const [cityIdx, setCityIdx] = useState(0);
  const [timeAgo, setTimeAgo] = useState(1);

  useEffect(() => {
    const showPopup = () => {
      setProductIdx(Math.floor(Math.random() * generatedProducts.length));
      setCityIdx(Math.floor(Math.random() * cities.length));
      setTimeAgo(Math.floor(Math.random() * 59) + 1);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay before first popup
    const initialDelay = setTimeout(showPopup, 3000);

    // Random interval for subsequent popups (10-20 seconds)
    const interval = setInterval(() => {
      if (!isVisible) {
        showPopup();
      }
    }, Math.random() * 10000 + 10000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isVisible]);

  const product = generatedProducts[productIdx];
  const city = cities[cityIdx];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-4 p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] glass-panel border border-primary-200/50 max-w-sm w-[calc(100%-3rem)] sm:w-auto"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm text-primary-400 hover:text-primary-800 transition-colors"
          >
            <X size={14} />
          </button>
          
          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#eae7db] shrink-0">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover mix-blend-multiply" 
            />
          </div>
          
          <div className="flex flex-col pr-2">
            <div className="flex items-center gap-1 text-xs text-primary-600 mb-1">
              <ShoppingBag size={12} />
              <span>Someone in <strong>{city}</strong> just bought</span>
            </div>
            <span className="font-bold text-primary-950 text-sm line-clamp-1">{product.name}</span>
            <span className="text-xs text-primary-500 mt-1">{timeAgo} minutes ago</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
