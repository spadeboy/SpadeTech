import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spade Dropship | Premium Automated Store",
  description: "Next Generation Automated E-Commerce",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SalesBanner from "@/components/SalesBanner";
import SalesPopup from "@/components/SalesPopup";
import { CartProvider } from "@/lib/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <SalesBanner />
          <Navbar />
          <main className="flex-grow pt-[116px]">
            {children}
          </main>
          <Footer />
          <SalesPopup />
        </CartProvider>
      </body>
    </html>
  );
}
