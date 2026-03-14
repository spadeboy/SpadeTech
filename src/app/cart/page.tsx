"use client";

import { motion } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#fdfdf9] font-serif min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-950">Your Cart</h1>
        {cartItems.length > 0 && (
          <p className="text-primary-800/80">
            Review your items before proceeding to checkout.
          </p>
        )}
      </motion.div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 glass-panel rounded-3xl">
          <p className="text-2xl text-primary-800 mb-8">Your cart is currently empty.</p>
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
          >
            Continue Shopping <ArrowRight size={20} />
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 glass-panel bg-white rounded-3xl items-center sm:items-stretch relative"
              >
                <div className="relative w-full sm:w-32 h-40 sm:h-32 rounded-2xl overflow-hidden bg-[#eae7db] shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover mix-blend-multiply" />
                </div>
                
                <div className="flex-1 text-center sm:text-left flex flex-col justify-center w-full">
                  <h3 className="text-xl font-bold text-primary-950 mb-1">{item.name}</h3>
                  <div className="text-sm text-primary-700 uppercase tracking-wider mb-2">{item.category}</div>
                  <div className="text-xl font-black text-primary-950">${item.price.toFixed(2)}</div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0">
                  <div className="flex items-center gap-3 bg-primary-100 rounded-full px-4 py-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-primary-800 hover:text-primary-950 disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-primary-950 min-w-[20px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-primary-800 hover:text-primary-950"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 shrink-0">
            <div className="glass-panel p-8 rounded-3xl bg-white sticky top-28">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-primary-800">
                  <span>Subtotal</span>
                  <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-primary-800">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-bold">Free</span>
                </div>
                <div className="h-px bg-primary-200 my-4" />
                <div className="flex justify-between text-primary-950 text-xl font-black">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <Link 
                href="/checkout"
                className="w-full py-4 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 bg-primary-800 hover:bg-primary-900 hover:shadow-[0_0_20px_rgba(132,104,79,0.2)]"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
