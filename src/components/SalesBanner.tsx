import React from "react";
import { Zap } from "lucide-react";

export default function SalesBanner() {
  return (
    <div className="bg-primary-950 text-white w-full py-2 z-[60] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
        <Zap size={14} className="text-primary-400" />
        <span className="animate-pulse">🔥 HUGE SALE: UP TO 50% OFF EVERYTHING TODAY ONLY!</span>
        <Zap size={14} className="text-primary-400" />
      </div>
    </div>
  );
}
