import { createSlice } from "@reduxjs/toolkit";



const ProfileSlice = createSlice({

    name:"Profile",
    initialState:{
        value:[]
    },
    reducers:{
        SetProfile:(state,action)=>{
      
            state.value = action.payload;

        }
    }
})


export const {SetProfile} = ProfileSlice.actions;

export default ProfileSlice.reducer;