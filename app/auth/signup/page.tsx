'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrambledText } from '@/hooks/useScrambleText';

export default function SignUp() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#c4c4c4] font-mono uppercase tracking-widest flex items-center justify-center p-6 relative overflow-hidden">
            {/* HUD Elements */}
            <div className="absolute top-8 right-8 text-[10px] hidden lg:block opacity-50 text-right">
                <p>REGISTRATION PROTOCOL</p>
                <p>STATUS: AWAITING INPUT</p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md bg-black border border-white/10 p-8 md:p-12 relative"
            >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30"></div>

                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2 font-display tracking-tighter">
                        <ScrambledText text="INITIALIZE_USER" delay={300} />
                    </h1>
                    <p className="text-[10px] opacity-50">ESTABLISH NEW SECURE CONNECTION</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-[10px] opacity-70 flex items-center gap-2">
                            <span className="w-1 h-1 bg-white inline-block"></span>
                            DESIGNATION [NAME]
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                            placeholder="OPERATIVE NAME"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] opacity-70 flex items-center gap-2">
                            <span className="w-1 h-1 bg-white inline-block"></span>
                            IDENTIFIER [EMAIL]
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                            placeholder="USER@NETWORK.COM"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] opacity-70 flex items-center gap-2">
                            <span className="w-1 h-1 bg-white inline-block"></span>
                            ACCESS_KEY [PASSWORD]
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                            placeholder="••••••••"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-4 text-xs bg-white text-black hover:bg-[#c4c4c4] transition-colors mt-8 font-bold relative group"
                    >
                        <span className="absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity">►</span>
                        [ REGISTER_NEW_ENTITY ]
                        <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">◄</span>
                    </motion.button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10 text-center text-[10px]">
                    <p className="opacity-50 mb-2">EXISTING ARCHIVE LOCATED?</p>
                    <Link href="/auth/signin" className="text-white hover:text-[#c4c4c4] transition-colors relative inline-block group">
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                        RETURN_TO_LOGIN
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
