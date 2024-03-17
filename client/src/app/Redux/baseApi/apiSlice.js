"use client"

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice= createApi({
  reducerPath: 'api',
  
  baseQuery: fetchBaseQuery({
    
    baseUrl: "https://duaserver.ishrakhasin.com",
   
 


}),

 
  endpoints:(builder)=> ({}),
})

