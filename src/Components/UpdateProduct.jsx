import React, { useEffect, useState } from "react";
// import { Form } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import hitApi from "../services/hitApi";
import ProductForm from "./ProductForm";

/* 
Create product form
hit api onSubmit
*/
const UpdateProduct = () => {
  let params = useParams();
  let [products, setProducts] = useState({});
  let navigate = useNavigate();
 


  const getProducts = async()=>{
    try {
      let output = await hitApi({
        method:"get",
        url:`/products/${params.id}`,
      })
      setProducts(output.result)
    } catch (error) {
      console.log(error.message)
    }
  }
  //we cannot use async keyword in useEffect
  useEffect(() => {
    getProducts()
  },[])

  let onSubmit = async(values, other) => {
    // console.log(value);
    // hit api
 try {
   let output = await  hitApi({
       method:"patch",
       url:`/products/${params.id}`,
       data:values
     })
     navigate(`/products/${params.id}`)
 } catch (error) {
  console.log(error.message)
 }
  };


  return (
    <div>
      <ProductForm
      buttonName="Update Product"
      onSubmit={onSubmit}
      products={products}
      ></ProductForm>
    </div>
  );
};

export default UpdateProduct;

