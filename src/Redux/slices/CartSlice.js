import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
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
        },
        remove: (state, action) => {
            let alreadyAdded = state.cartItems.findIndex((item) => item.id === action.payload.id)

            state.cartItems[alreadyAdded].quantity--

            if (state.cartItems[alreadyAdded].quantity === 0) {
                let updated = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = updated;
            }
        },
    }
})

export const { add, remove } = CartSlice.actions
export default CartSlice.reducer