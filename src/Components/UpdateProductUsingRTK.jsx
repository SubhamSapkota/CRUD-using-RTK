import React, { useEffect, useState } from "react";
// import { Form } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import hitApi from "../services/hitApi";
import ProductForm from "./ProductForm";
import { useUpdateProductMutation } from "../services/api/productService";

/* 
Create product form
hit api onSubmit
*/
const UpdateProductUsingRTK = () => {
  let params = useParams();
  let [products, setProducts] = useState({});
  let navigate = useNavigate();
 
  let [
    updateProduct,
    {
      isLoading: isLoadingUpdateData,
      isSuccess: isSuccessUpdateData,
      isError: isErrorUpdateData,
      error: errorUpdateData,
      data: dataUpdateData,
    },
  ] = useUpdateProductMutation();

  useEffect(()=>{
    if(isSuccessUpdateData){
      console.log("Successfully Updated")
    }
  },[isSuccessUpdateData])
  
  useEffect(()=>{
    if(isErrorUpdateData){
      console.log(errorUpdateData?.error)
    }
  },[isErrorUpdateData,errorUpdateData])

  const getProducts = async()=>{
    try {
      let output = await hitApi({
        method:"get",
        url:`/products`,
      })
      setProducts(output.data.result)
      navigate(`/products/${params.id}`)
    } catch (error) {
      console.log(error.message)
    }
  }
  //we cannot use async keyword in useEffect
  useEffect(() => {
    getProducts()
  },[])

  let onSubmit = async(values, other) => {
   updateProduct({id: params.id, body: values})
   navigate(`/products/${params.id}`)
  };


  return (
    <div>
      <ProductForm
      buttonName="Update Product"
      onSubmit={onSubmit}
      products={products}
      isLoading={isLoadingUpdateData}
      ></ProductForm>
    </div>
  );
};

export default UpdateProductUsingRTK;

