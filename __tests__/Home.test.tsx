import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import { describe, it, expect } from 'vitest'

describe('Home', () => {
    it('renders the main heading', () => {
        render(<Home />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeDefined()
        expect(heading.textContent).toContain('SPADE TECH')
    })

    it('renders the product catalog section', () => {
        render(<Home />)
        const catalogHeading = screen.getByText(/LATEST DROPS/i)
        expect(catalogHeading).toBeDefined()
    })
})
