import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: [],
    cartTotalQouantity: 0,
    cartTotalAmount: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //___________function Addtocart
        AddToCart: (state, action) => {
            const ItemFind = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (ItemFind >= 0) {
                state.cartItems[ItemFind].cartQouantity += 1
                
            } else {
                const Temp = { ...action.payload, cartQouantity: 1 }
                state.cartItems.push(Temp)
                
            }
        },
        //___________function RemoveFromCart
        RemoveFromCart: (state, action) => {
            const Remove = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = Remove

        },
        //___________function Decrees

        Decrees: (state, action) => {
            const ItemFind = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (state.cartItems[ItemFind].cartQouantity > 1) {
                state.cartItems[ItemFind].cartQouantity -= 1

            } else if (state.cartItems[ItemFind].cartQouantity === 1) {
                const Remove = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = Remove

            }

        },
        //___________function clearCart

        clearCart: (state, action) => {
            state.cartItems = [];
        },
        //___________function getTotals

        getTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQouantity } = cartItem;
                    const itemTotal = price * cartQouantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQouantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQouantity = quantity;
            state.cartTotalAmount = total;
        },
    }

})
export const { AddToCart, RemoveFromCart, Decrees, clearCart, getTotals } = CartSlice.actions
export default CartSlice.reducer