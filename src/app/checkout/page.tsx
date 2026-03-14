"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { CheckCircle2, CreditCard, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  if (cartItems.length === 0 && !isSuccess) {
    router.push("/cart");
    return null;
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-screen flex flex-col items-center justify-center font-serif">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-emerald-50 text-emerald-600 p-6 rounded-full mb-8"
        >
          <CheckCircle2 size={64} />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-950">Payment Successful</h1>
        <p className="text-xl text-primary-800/80 mb-12">
          Thank you for your simulated purchase! Your order has been placed.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
        >
          Return to Home <ArrowRight size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#fdfdf9] font-serif min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary-950">Secure Checkout</h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
        <div className="flex-1">
          <form id="checkout-form" onSubmit={handleCheckout} className="glass-panel p-8 rounded-3xl bg-white space-y-6">
            <h2 className="text-2xl font-bold text-primary-950 mb-6 flex items-center gap-2">
              <CreditCard className="text-primary-700" /> Payment Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-primary-900 mb-2">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-[#fbfbf8]" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-primary-900 mb-2">Card Information</label>
                <div className="relative">
                  <input required type="text" placeholder="Card number" className="w-full px-4 py-3 rounded-xl rounded-b-none border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-[#fbfbf8] z-10 relative" />
                  <div className="flex -mt-px">
                    <input required type="text" placeholder="MM / YY" className="w-1/2 px-4 py-3 rounded-bl-xl border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-[#fbfbf8] relative z-0 feature-input-left" />
                    <input required type="text" placeholder="CVC" className="w-1/2 px-4 py-3 rounded-br-xl border border-primary-200 border-l-0 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-[#fbfbf8] relative z-0 feature-input-right" />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <label className="block text-sm font-bold text-primary-900 mb-2">Name on Card</label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-[#fbfbf8]" />
              </div>
            </div>
          </form>
        </div>

        <div className="lg:w-96 shrink-0">
          <div className="glass-panel p-8 rounded-3xl bg-white sticky top-28">
            <h2 className="text-xl font-bold text-primary-950 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-primary-800">
                  <span className="truncate pr-4">{item.quantity} x {item.name}</span>
                  <span className="font-bold shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              
              <div className="h-px bg-primary-200 my-4" />
              
              <div className="flex justify-between text-primary-800 text-base">
                <span>Subtotal</span>
                <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-primary-800 text-base">
                <span>Shipping</span>
                <span className="text-emerald-600 font-bold">Free Checkout</span>
              </div>
              
              <div className="h-px bg-primary-200 my-4" />
              
              <div className="flex justify-between text-primary-950 text-xl font-black">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="submit"
              form="checkout-form"
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 ${
                isProcessing ? "bg-primary-400 cursor-not-allowed" : "bg-primary-800 hover:bg-primary-900 hover:shadow-[0_0_20px_rgba(132,104,79,0.2)]"
              }`}
            >
              {isProcessing ? "Processing..." : (
                <>Pay ${cartTotal.toFixed(2)} <Lock size={16} /></>
              )}
            </button>
            <p className="text-xs text-center text-primary-600 mt-4 flex items-center justify-center gap-1">
              <Lock size={12} /> Payments are secure and encrypted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
