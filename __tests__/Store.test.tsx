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

    it('renders product items', () => {
        renderWithProvider(<Store />)
        const product = screen.getByText(/CYBERBANK 20K/i)
        expect(product).toBeDefined()
    })
})
