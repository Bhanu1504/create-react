import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    carts:[]
}
//card slice
const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        //add to cart
        addToCart:(state,actions)=>{
            const ItemIndex = state.carts.findIndex((item)=>item.id === actions.payload.id);
            if(ItemIndex >=0){
                state.carts[ItemIndex].qnty+=1;

            }else{
                const temp ={...actions.payload,qnty:1}
                state.carts = [...state.carts,temp]
            }
            //state.carts = [...state.carts,actions.payload]
            
        },
        removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id!==action.payload)
            state.carts=data;
        },
        //remove single items
        removeSingleItems:(state,actions)=>{
            const ItemIndex_dec = state.carts.findIndex((item)=>item.id === actions.payload.id);

            if(state.carts[ItemIndex_dec].qnty >=1){
                state.carts[ItemIndex_dec].qnty-=1
            }
        },
        //clear cart
        emptyCartItem:(state,action)=>{
            state.carts = []
        }

    }
    //remove particular items
});
export const {addToCart,removeToCart,removeSingleItems,emptyCartItem}=cartSlice.actions;
export default cartSlice.reducer;

