'use client'

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrambledText } from '@/hooks/useScrambleText';
import { useRef } from 'react';

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="flex flex-col min-h-screen text-[#c4c4c4] font-mono uppercase tracking-widest relative overflow-hidden">
            {/* HUD Elements */}
            <div className="absolute top-8 left-8 text-[10px] hidden lg:block opacity-50">
                <p>COORD: 34.0522° N, 118.2437° W</p>
                <p>SYS.VER: 2.0.4 [STABLE]</p>
            </div>
            <div className="absolute bottom-8 right-8 text-[10px] hidden lg:block opacity-50 text-right">
                <p>CONNECTION: SECURE</p>
                <p>LATENCY: 12MS</p>
            </div>

            {/* Hero Section */}
            <section ref={containerRef} className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 mt-12 overflow-hidden">

                <motion.div style={{ y, opacity }} className="z-10 text-center flex flex-col items-center justify-center w-full max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                        className="mb-8 text-xs opacity-50 flex items-center gap-4"
                    >
                        <span>////// <ScrambledText text="MANIFESTO" delay={1200} /></span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                        className="text-5xl md:text-8xl lg:text-[140px] leading-[0.8] font-black font-display text-white mb-12 tracking-tighter mix-blend-difference"
                    >
                        <ScrambledText text="ARCHIVE" delay={1400} /><br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                            <ScrambledText text="SYSTEM." delay={1600} />
                        </span>
                    </motion.h1>

                    <p className="text-xs md:text-sm max-w-lg mx-auto mb-16 leading-loose">
                        <ScrambledText text="PRECISION-ENGINEERED GOODS FOR THE MODERN VISIONARY. SHIFTING FROM CONSUMERISM TO ON-CHAIN PARTICIPATION." delay={2000} duration={1500} />
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
                        className="flex gap-6 relative"
                    >
                        <Link href="/store" className="group flex items-center justify-center px-8 py-4 text-xs bg-white text-black hover:bg-[#c4c4c4] transition-colors relative overflow-hidden">
                            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black"></span>
                            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black"></span>
                            [ ACCESS CATALOG ]
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
