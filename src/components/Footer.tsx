import Link from "next/link";
import { Sparkles, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fbfbf8] border-t border-primary-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary-700" />
              <span className="text-xl font-bold text-gradient">NEXUS DROP</span>
            </Link>
            <p className="text-primary-800/80 max-w-sm mb-6 leading-relaxed text-sm">
              The premier automated dropshipping platform. We handle the fulfillment, you collect the profit. Built for the modern entrepreneur.
            </p>
            <div className="flex space-x-4 text-primary-700">
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-primary-900 font-semibold mb-6 tracking-wide text-sm uppercase">Shop</h3>
            <ul className="space-y-4">
              {["All Products", "Trending", "New Arrivals", "Discounts"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-primary-800/80 hover:text-primary-600 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary-900 font-semibold mb-6 tracking-wide text-sm uppercase">Support</h3>
            <ul className="space-y-4">
              {["FAQ", "Shipping Returns", "Contact Us", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-primary-800/80 hover:text-primary-600 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-800/60">
          <p>&copy; {new Date().getFullYear()} Nexus Drop Automated Store. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span>Powered by Automation</span>
            <span>•</span>
            <span>Expert Level Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
