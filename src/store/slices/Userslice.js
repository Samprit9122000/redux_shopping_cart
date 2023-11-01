import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)      // all values can be grabbed by action.payload
            // console.log(action.payload);
        },
        deleteUser(state,action){
            const index=action.payload;
            state.splice(index,1);
       
        },
        deleteAllUser(state,action){
            return [];
            
        }
    }
})


export default userSlice.reducer;
export const {addUser,deleteAllUser,deleteUser}=userSlice.actions;