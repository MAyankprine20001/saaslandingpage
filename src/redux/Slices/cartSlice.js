import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState : [],//this is state
    reducers :{
        // action.payload as ek hi param tha jada hot to actio.payload.id isse krte
        add : (state , action) =>{
            !state.some((obj)=> obj.id === action.payload.id) && state.push(action.payload);
            // console.log(state);
        },
        remove : (state , action)=> {
            return state.filter( (item) => item.id !== action.payload )
        },
        clearAll : (state,action)=>{
            state.length = 0;//empty the data  
        }
    }
});

// reducer funtion take two things 1 state and second action

// funcitonality provide karege
export const {add , remove , clearAll} = cartSlice.actions;
export default cartSlice.reducer;

// Action are plain javaSctipt object -> only tell what to do 