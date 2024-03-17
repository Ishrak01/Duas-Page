import { apiSlice } from "@/app/Redux/baseApi/apiSlice"


export const duaApi= apiSlice.injectEndpoints({

  tagTypes: ['Category', 'Duas', 'DuasByCategory'],


  endpoints: (builder)=> ({
   category: builder.query({
      query:(data)=> ({
        url: "/category",
        method:'GET',
      
       
      }),
      providesTags: ['Category',],
     
    }),

   

    duasByCategory:builder.query({
      query:({cat_id})=>({
        url:`/duas/${cat_id}`,
        method:'GET'
      }),
      providesTags: ['DuasByCategory'],
      invalidatesTags: ['DuasByCategory'],
    })


  }),
  

})

export const{useCategoryQuery, useDuasByCategoryQuery}=duaApi