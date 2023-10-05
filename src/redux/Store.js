import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import wishListSlice from "./Slices/wishListSlice";

export const store = configureStore(
    {
        reducer:{
            cart : cartSlice,
            wishlist : wishListSlice
        }
    }
)