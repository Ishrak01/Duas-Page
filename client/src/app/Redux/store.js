import { configureStore } from "@reduxjs/toolkit"

import duaSliceReducer from "../Features/Dua/duaSlice"
import { apiSlice } from "./baseApi/apiSlice"

const store= configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

   
    dua:duaSliceReducer
   
   
  },

  devTools: !process.env.NODE_ENV ==="production",

  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
