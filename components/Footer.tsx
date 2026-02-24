import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-[#0a0a0a] text-[#c4c4c4] font-mono tracking-widest text-xs uppercase relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="px-6 md:px-12 py-16 flex flex-col relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-black font-display text-white">SPADEDROP.</Link>
                        <p className="max-w-xs leading-loose text-[#a3a3a3]">
                            ELEVATING EVERYDAY LIFE THROUGH CURATED, PRECISION ESSENTIALS. WELCOME TO THE ARCHIVE.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white">////// DIRECTORY</h4>
                        <ul className="space-y-4 text-[#a3a3a3]">
                            <li><Link href="/store" className="hover:text-white transition-colors block">┌ ALL PRODUCTS</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors block">  TECHNOLOGY</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors block">  LIFESTYLE</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6 text-right">
                        <h4 className="text-white">////// SYSTEM</h4>
                        <ul className="space-y-4 text-[#a3a3a3]">
                            <li><Link href="/about" className="hover:text-white transition-colors block">ABOUT US ┐</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors block">CONTACT ┐</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors block">POLICY ┐</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#a3a3a3]">
                    <p>&copy; {new Date().getFullYear()} SPADEDROP ARCHIVE. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-6">
                        <span>NETWORK: SECURE</span>
                        <span>LATENCY: 12MS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
