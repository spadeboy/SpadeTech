import { render, screen } from '@testing-library/react'
import Store from '../app/store/page'
import { describe, it, expect } from 'vitest'

describe('Store', () => {
    it('renders the store heading', () => {
        render(<Store />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeDefined()
        expect(heading.textContent).toContain('STORE')
    })

    it('renders product items', () => {
        render(<Store />)
        const product = screen.getByText(/SPADE PHONE/i)
        expect(product).toBeDefined()
    })
})
