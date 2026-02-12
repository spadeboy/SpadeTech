import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nothing Store - The Future of Retail",
  description: "A futuristic 3D e-commerce experience with industrial minimalist design",
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white overflow-x-hidden">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
