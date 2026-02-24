'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="w-full px-6 md:px-12 py-16 text-[#c4c4c4] min-h-screen font-mono uppercase tracking-widest">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8"
            >
                <div>
                    <p className="text-xs mb-4">////// CLASSIFIED INTELLIGENCE</p>
                    <h1 className="text-5xl md:text-8xl font-black font-display text-white">
                        ABOUT US
                    </h1>
                </div>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-16 text-sm leading-loose text-[#a3a3a3]">
                <section>
                    <h2 className="text-2xl text-white font-display mb-6">THE ARCHIVE PROTOCOL</h2>
                    <p>
                        SPADEDROP OPERATES AT THE INTERSECTION OF FUNCTIONAL DESIGN AND NETWORKED COMMERCE. WE DO NOT SIMPLY RETAIL PRODUCTS; WE CURATE HARDWARE AND NEURAL APPAREL ENGINEERED FOR THE 2026 BASELINE.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl text-white font-display mb-6">SUPPLY CHAIN ARCHITECTURE</h2>
                    <p>
                        OUR INFRASTRUCTURE UTILIZES DECENTRALIZED AFFILIATE NETWORKS TO SOURCE HIGH-PRECISION INSTRUMENTS DIRECTLY FROM MANUFACTURERS. ITEMS MARKED [ ACCESS EXTERNAL PARTNER ] ARE ROUTED THROUGH SECURE PROTOCOLS TO ENSURE AUTHENTICITY AND FULFILLMENT.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                    <div>
                        <span className="block text-white mb-2">////// FOUNDED</span>
                        <span>2026.01.01</span>
                    </div>
                    <div>
                        <span className="block text-white mb-2">////// LOCATION</span>
                        <span>DECENTRALIZED NODE</span>
                    </div>
                    <div>
                        <span className="block text-white mb-2">////// STATUS</span>
                        <span className="text-green-500">SYSTEM ONLINE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
