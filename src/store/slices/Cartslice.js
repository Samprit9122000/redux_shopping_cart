import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        data:[],
        totalPrice:0
    },
    reducers:{
        addToCart(state,action){
            state.data.push(action.payload);
        },
        removeToCart(state,action){
            const index=action.payload;
            state.data.splice(index,1);
        },
        getTotalPrice(state,action){
            const products=state.data;
            let price=0;
            for(let i=0;i<products.length;i++){
                price=price+products[i].price;
            }
            return {...state,totalPrice:price};
            // state.totalPrice=price
        },
        deductPrice(state,action){
            const index=action.payload;
            const lessPrice=state.data[index].price;
            console.log(lessPrice)
            state.totalPrice=state.totalPrice-lessPrice;
        }
    }
});

export default cartSlice.reducer;
export const {addToCart,removeToCart,getTotalPrice,deductPrice}=cartSlice.actions;