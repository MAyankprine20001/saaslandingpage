import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
    name : "wishlist",
    initialState :  [],
    reducers :{
        addTOwishList : (state , action) =>{
            state.push(action.payload)
        },
        removeFromWishList : (state , action)=> {
            return state.filter( (item) => item.id !== action.payload.id )
        },
        clearAllWishList : (state,action)=>{
            state.length = 0;//empty the data  
        }
    }    
});


export const {addTOwishList , removeFromWishList , clearAllWishList} = wishListSlice.actions;
export default wishListSlice.reducer;


