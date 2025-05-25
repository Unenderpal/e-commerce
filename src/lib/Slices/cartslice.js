import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    item:[]
}

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
       addTocard: (state , action )=>{
        const itemTOAdd =action.payload;
        state.item.push({
            product:itemTOAdd,
            quantity: 1
        })
       }
    }
})
export const {} = cartSlice.actions;
export default cartSlice.reducer;