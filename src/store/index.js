import { configureStore } from "@reduxjs/toolkit";
import userslice from './slices/Userslice';
import cartslice from './slices/Cartslice';
import productslice from "./slices/Productslice";


const store=configureStore({
    reducer:{
        users:userslice,
        cart:cartslice,
        products:productslice
    }
});

export default store;