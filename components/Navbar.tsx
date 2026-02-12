"use client";

import React, { useState } from "react";
import { ShoppingCart, User, Store, Home, Search, Bell } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("store");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "store", icon: Store, label: "Store" },
    { id: "search", icon: Search, label: "Search" },
    { id: "notifications", icon: Bell, label: "Alerts" },
    { id: "cart", icon: ShoppingCart, label: "Cart", badge: "3" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
      {/* Main Navbar */}
      <motion.div
        className="glass-pill p-3 flex items-center gap-2 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background for active state */}
            {activeTab === item.id && (
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full"
                layoutId="navbar-bg"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Icon */}
            <item.icon
              size={20}
              className={`relative z-10 transition ${
                activeTab === item.id
                  ? "text-nothing-red"
                  : "text-white/60 group-hover:text-white"
              }`}
            />

            {/* Badge */}
            {item.badge && (
              <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 bg-nothing-red rounded-full flex items-center justify-center text-white text-xs font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                {item.badge}
              </motion.div>
            )}

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
              {item.label}
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Floating Status Bar */}
      <motion.div
        className="glass-panel mt-4 px-6 py-2 text-center text-xs tech-text text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-nothing-red">●</span> Live · Premium Support Active
      </motion.div>
    </div>
  );
};

export default Navbar;
