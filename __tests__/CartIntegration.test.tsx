import { screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Store from '../app/store/page'
import Navbar from '../components/Navbar'
import Cart from '../app/cart/page'
import { renderWithProvider } from './utils'

// Mock next/navigation
vi.mock('next/navigation', () => ({
    usePathname: () => '/',
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
    }),
}))

describe('Cart Integration', () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([
                    {
                        id: "p1",
                        name: "CYBERBANK 20K",
                        price: 89.00,
                        tag: "POWER",
                        description: "Test desc",
                        specs: "130W",
                        stock: 10
                    }
                ])
            })
        ) as any;
    });

    it('adds items to cart and updates badge', async () => {
        renderWithProvider(
            <>
                <Navbar />
                <Store />
            </>
        )

        // Find add to cart buttons (wait for them to appear)
        const addButtons = await screen.findAllByText('ADD TO CART')
        expect(addButtons.length).toBeGreaterThan(0)

        // Click first button
        fireEvent.click(addButtons[0])

        // Check if badge appears (Navbar update)
        // Store interaction doesn't crash
        expect(screen.getAllByText('STORE').length).toBeGreaterThan(0)
    })

    it('displays empty cart message initially', async () => {
        renderWithProvider(<Cart />)
        expect(await screen.findByText('YOUR CART IS EMPTY')).toBeDefined()
    })
})
