"use client";

import React from "react";
import { ShoppingCart, User, Store, Home, Search, Bell } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useCart } from "@/context/CartContext";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { cartCount } = useCart();

  const navItems = [
    { id: "home", icon: Home, label: "Home", href: "/" },
    { id: "store", icon: Store, label: "Store", href: "/store" },
    { id: "search", icon: Search, label: "Search", href: "/search" },
    { id: "notifications", icon: Bell, label: "Alerts", href: "/notifications" },
    { id: "cart", icon: ShoppingCart, label: "Cart", href: "/cart", badge: cartCount > 0 ? cartCount.toString() : undefined },
    { id: "profile", icon: User, label: "Profile", href: "/profile" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

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
          <Link key={item.id} href={item.href}>
            <motion.div
              className="relative flex items-center justify-center w-12 h-12 rounded-full transition group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background for active state */}
              {isActive(item.href) && (
                <motion.div
                  className="absolute inset-0 bg-black/5 rounded-full"
                  layoutId="navbar-bg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Icon */}
              <item.icon
                size={20}
                className={`relative z-10 transition ${isActive(item.href)
                  ? "text-accent"
                  : "text-neutral-400 group-hover:text-black"
                  }`}
              />

              {/* Badge */}
              {item.badge && (
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {item.badge}
                </motion.div>
              )}

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 px-3 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
                {item.label}
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Status Bar */}
      <motion.div
        className="glass-panel mt-4 px-6 py-2 text-center text-xs tech-text text-neutral-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-accent">●</span> System Operational
      </motion.div>
    </div>
  );
};

export default Navbar;
