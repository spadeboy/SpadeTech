import { screen } from '@testing-library/react'
import Home from '../app/page'
import { describe, it, expect } from 'vitest'
import { renderWithProvider } from './utils'


describe('Home', () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([
                    {
                        id: "p1",
                        name: "CYBERBANK",
                        price: 89,
                        tag: "POWER",
                        specs: "100W",
                        image: "test.jpg"
                    }
                ])
            })
        ) as any;
    });

    it('renders the main heading', () => {
        renderWithProvider(<Home />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeDefined()
        expect(heading.textContent).toContain('SPADE TECH')
    })

    it('renders the product catalog section', async () => {
        renderWithProvider(<Home />)
        const product = await screen.findByText(/CYBERBANK/i)
        expect(product).toBeDefined()
    })
})
