import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://y-nine-roan.vercel.app/api/v1' }),
  endpoints: (builder) => ({
   
    getProduct: builder.query({
     
      query: () => ({
        url: 'product',
        method: 'GET',
      }),
    }),
    getSinglrProduct: builder.query({
     
      query: (productId) => ({
        url:`product/${productId}`,
        method: 'GET',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery, useGetSinglrProductQuery } = baseApi;