import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const makeOf2Decimal=(data)=>{
    let i=0;
    for(i=0;i<data.length;i++){
      data[i].price=Math.round(data[i].price);
    }
    return data;
  }

export const productData = createAsyncThunk("productdata",async()=>{
    const productdata=await axios("https://fakestoreapi.com/products");
    const data=makeOf2Decimal(productdata.data);
    return data;
})

const productslice = createSlice({
    name:"products",
    initialState:{
        isloading:false,
        data:[],
        err:false
    },
    extraReducers:(builder)=>{
        builder.addCase(productData.pending,(state,action)=>{
            state.isloading=true;
            state.err=false;
        })

        builder.addCase(productData.fulfilled,(state,action)=>{
            state.isloading=false;
            state.err=false
            state.data=action.payload;
            
        })

        builder.addCase(productData.rejected,(state,action)=>{
            state.isloading=false;
            state.err=action.error.message;
            console.log("err:",action.error);
        })
    },
    reducers:{

    }
})

export default productslice.reducer

