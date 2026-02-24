'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0 }}
            animate={{ clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1 }}
            exit={{ clipPath: 'polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)', opacity: 0 }}
            transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="flex-1 flex flex-col w-full relative"
        >
            {children}
        </motion.div>
    )
}
