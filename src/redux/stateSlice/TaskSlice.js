import { createSlice } from "@reduxjs/toolkit";



export const TaskSliceReducer = createSlice({
    name:"task",
    initialState:{
        cancel:[],
        complete:[],
        progress:[],
        new:[]

    },
    reducers:{
        CancelTask:(state,action)=>{
            state.cancel = action.payload
        },
        CompleteTask:(state,action)=>{
            state.complete = action.payload
        },
        ProgressTask:(state,action)=>{
            state.progress = action.payload
        },
        NewTask:(state,action)=>{
            state.new = action.payload
        }
    }
})


export const {CancelTask,CompleteTask,ProgressTask,NewTask} = TaskSliceReducer.actions;

export default TaskSliceReducer.reducer;