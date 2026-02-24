'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
    "INITIALIZING SECURE CONNECTION...",
    "RESOLVING ASSETS... PRD_001 TO PRD_045",
    "DECRYPTING ARCHIVAL DATABASE",
    "ESTABLISHING METADATA SYNC",
    "LOADING CORE MODULES: SUCCESS",
    "BYPASSING RENDER CACHE",
    "SYSTEM ONLINE.",
];

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [currentLog, setCurrentLog] = useState(0);

    useEffect(() => {
        // Disable scroll during preloader
        document.body.style.overflow = 'hidden';

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setLoading(false);
                        document.body.style.overflow = '';
                    }, 800); // Hold at 100% briefly
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 100);

        const logInterval = setInterval(() => {
            setCurrentLog(prev => (prev < bootLogs.length - 1 ? prev + 1 : prev));
        }, 400);

        return () => {
            clearInterval(interval);
            clearInterval(logInterval);
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col items-center justify-center font-mono text-[#c4c4c4] uppercase tracking-widest text-xs"
                >
                    {/* Grid Background in Preloader too */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="z-10 w-full max-w-sm px-6">
                        <div className="flex justify-between mb-2">
                            <span>SYSTEM BOOT</span>
                            <span>[{progress}%]</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-[1px] bg-white/20 relative mb-8">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-white"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Terminal Logs */}
                        <div className="h-20 overflow-hidden flex flex-col justify-end opacity-60">
                            {bootLogs.slice(0, currentLog + 1).map((log, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="truncate"
                                >
                                    &gt; {log}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
