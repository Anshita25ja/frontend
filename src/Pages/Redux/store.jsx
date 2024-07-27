import { configureStore } from "@reduxjs/toolkit";

import courseSliceReducer from "../Redux/Slices/courseSlice";



const store = configureStore({
  reducer: {

    course: courseSliceReducer,
  
  },
});

export default store;