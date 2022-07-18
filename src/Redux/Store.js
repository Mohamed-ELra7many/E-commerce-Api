import { configureStore  } from "@reduxjs/toolkit"
import CartSlice from "./CartSlice/CartSlice"

export const Store = configureStore ({
    reducer:{
        Cart: CartSlice
    }
})