import React, { useEffect } from "react";
// import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../services/api/productService";
import ProductForm from "./ProductForm";

/* 
Create product form
hit api onSubmit
*/
const CreateProductUsingRTK = () => {
  let navigate = useNavigate();
  let [
    createProduct,
    {
      isLoading: isLoadingCreateData,
      isSuccess: isSuccessCreateData,
      isError: isErrorCreateData,
      error: errorCreateData,
      data: dataCreateData,
    },
  ] = useCreateProductMutation();

  let onSubmit = async (values, other) => {
    let body = values;
   createProduct(body)
   
  };

useEffect(()=>{
  if(isSuccessCreateData){
    console.log("Successfully created")
    navigate("/products")
  }
},[isSuccessCreateData])

useEffect(()=>{
  if(isErrorCreateData){
    console.log(errorCreateData?.error)
  }
},[isErrorCreateData,errorCreateData])
  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onSubmit}
        isLoading={isLoadingCreateData}
      ></ProductForm>
    </div>
  );
};

export default CreateProductUsingRTK;
