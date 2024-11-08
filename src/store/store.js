import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/infoSlice";
import addressSlice from "../features/addressSlice";
import productSlice from "../features/productSlice";
import blogSlice from "../features/blogSlice";
import { productApi } from "../services/api/productService";

export const store = configureStore({
  reducer:{

    info:counterSlice.reducer,
    address:addressSlice,
    product:productSlice,
    blog:blogSlice,

    [productApi.reducerPath]: productApi.reducer
    //in redux toolkit no nedd to add developer it is automatically added
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    productApi.middleware
  ]),
})