import { render } from '@testing-library/react'
import { CartProvider } from '../context/CartContext'
import React from 'react'

export const renderWithProvider = (ui: React.ReactElement) => {
    return render(
        <CartProvider>
            {ui}
        </CartProvider>
    )
}
