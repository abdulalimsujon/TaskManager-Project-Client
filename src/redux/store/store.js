
import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "../stateSlice/setting-slice";
import TaskSlice from "../stateSlice/TaskSlice";
import summarySlice from "../stateSlice/summary-slice";




export default configureStore({

    reducer:{
        settings:settingSlice,
        task:TaskSlice,
        summary:summarySlice

        
    }

})