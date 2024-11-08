import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import hitApi from "../services/hitApi";
import { useReadProductByIdQuery } from "../services/api/productService";

//hit api=>data=> display

//delete product
const ViewProduct = () => {
  let navigate = useNavigate();
  let params = useParams();

  let {
    isLoading: isLoadingViewProduct,
    isSuccess: isSuccessViewProduct,
    isError: isErrorViewProduct,
    error: errorViewProduct,
    data: dataViewProduct,
  } = useReadProductByIdQuery(params.id);
  // console.log(dataViewProduct?.result)
  let products = dataViewProduct?.result || {};

  useEffect(()=>{
    if(isErrorViewProduct){
      console.log(errorViewProduct?.error)
    }
  },[errorViewProduct,isErrorViewProduct])

  return (
    <div>
      {isLoadingViewProduct ? <h3>Loading...</h3>:<div>
        <h1>Product Details</h1>
        <img
          src="{products.productImage}"
          alt="product image"
          style={{ width: "200px", height: "200px" }}
        />
        <p>Name: {products.name}</p>
        <p>Company: {products.company}</p>
        <p>Featured: {products.feature ? "yes" : "no"}</p>
        <p>Price: {products.price}</p>
        <p>Quantity: {products.quantity}</p>
        <p>
          Manufacture Date: {new Date(products.manufactureDate).toDateString()}
        </p>
      </div>}
      
    </div>
  );
};

export default ViewProduct;
