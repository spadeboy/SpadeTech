import type { Metadata } from 'next'
import { Space_Mono, Syncopate } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import Preloader from '@/components/Preloader'

const mono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono' })
const display = Syncopate({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
    title: 'Spadedrop.',
    description: 'Premium curated dropshipping goods.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${mono.variable} ${display.variable} font-mono min-h-screen flex flex-col antialiased bg-[#0a0a0a] text-[#c4c4c4] relative selection:bg-white selection:text-black`}>
                {/* Technical Dark Grid Background */}
                <div className="fixed inset-0 z-[-2] bg-[#0a0a0a]" />
                <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <Preloader />
                <CustomCursor />

                <SmoothScroll>
                    <CartProvider>
                        <Navbar />
                        <main className="flex-1 flex flex-col w-full z-10 relative">{children}</main>
                        <Footer />
                    </CartProvider>
                </SmoothScroll>
            </body>
        </html>
    )
}
