import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: (localStorage.getItem('cart-items'))? JSON.parse(localStorage.getItem('cart-items')) : []
}

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            let alreadyAdded = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (alreadyAdded === -1) {
                state.cartItems.push(action.payload)
            } else {
                state.cartItems[alreadyAdded].quantity++
            }
            localStorage.setItem('cart-items', JSON.stringify(state.cartItems))
        },
        remove: (state, action) => {
            let alreadyAdded = state.cartItems.findIndex((item) => item.id === action.payload.id)

            state.cartItems[alreadyAdded].quantity--

            if (state.cartItems[alreadyAdded].quantity === 0) {
                let updated = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = updated;
            }
            
            localStorage.setItem('cart-items', JSON.stringify(state.cartItems))
        },
    }
})

export const { add, remove } = CartSlice.actions
export default CartSlice.reducer