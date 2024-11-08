import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";

//generally
// we provide tags to query (get)
// and we invalidate tags in mutation
export const productApi = createApi({
  //reducerPath must be unique
  reducerPath:"productApi",
  baseQuery: fetchBaseQuery({
    baseUrl:baseUrl,
  }),
  // 1.create tag
  tagTypes: ["readProducts", "readProductById"],

  //query(get) and mutation(post,patch,delete...)
  endpoints: (builder) => ({
    readProducts: builder.query({
      query: () => {
        return {
          url:"/products",
          method:"GET",
        }
      },
      // 2.provide tag
      providesTags: ["readProducts"],
    }),

    readProductById: builder.query({
      query: (id) => {
        return {
          url:`/products/${id}`,
          method:"GET",
        }
      },
      provideTags:["readProductById"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url:`/products/${id}`,
          method:"DELETE",
        }
      },
      // 3. invalidate tag
      invalidatesTags: ["readProducts"],
    }),

    createProduct: builder.mutation({
      query: (body) => {
        return {
          url:"/products",
          method:"POST",
          body:body
        }
      },
      invalidatesTags: ["readProducts"],
      // invalidatesTags: ["readProducts","readProductById"],
    }),

    updateProduct: builder.mutation({
      query: (info) => {
        return {
          url:`/products/${info.id}`,
          method:"PATCH",
          body:info.body
        }
      },
      invalidatesTags: ["readProducts","readProductById"],
    }),

  }),
})

export const {useReadProductsQuery, useDeleteProductMutation, useReadProductByIdQuery, useCreateProductMutation, useUpdateProductMutation} = productApi;