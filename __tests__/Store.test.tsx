import { screen } from '@testing-library/react'
import Store from '../app/store/page'
import { describe, it, expect } from 'vitest'
import { renderWithProvider } from './utils'

describe('Store', () => {
    it('renders the store heading', () => {
        renderWithProvider(<Store />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeDefined()
        expect(heading.textContent).toContain('STORE')
    })


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

    it('renders product items from api', async () => {
        renderWithProvider(<Store />)
        const product = await screen.findByText(/CYBERBANK 20K/i)
        expect(product).toBeDefined()
    })
})
