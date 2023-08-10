import { createSlice } from "@reduxjs/toolkit";




export const   SummaryReducer = createSlice({

    name:"summary",
    initialState:{
        value: []
    },
    reducers:{
        setSummary:(state,action)=>{

            state.value = action.payload;

        }
    }
})


export const  {setSummary} = SummaryReducer.actions;

export default SummaryReducer.reducer