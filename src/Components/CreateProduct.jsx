import { Form, Formik } from "formik";
import React from "react";
// import { Form } from "react-router-dom";
import * as yup from "yup";
import FormikInput from "./FormikFormField/FormikInput";
import FormikCheckBox from "./FormikFormField/FormikCheckBox";
import FormikSelect from "./FormikFormField/FormikSelect";
import axios from "axios";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import { bUrl } from "../constant";
import hitApi from "../services/hitApi";

/* 
Create product form
hit api onSubmit
*/
const CreateProduct = () => {
 let navigate = useNavigate()

  let onSubmit = async (values, other) => {
    // console.log(value);
    // hit api
    try {
      let output = await hitApi({
        method: "post",
        url: `/products`,
        data: values,
      });

      navigate("/products");
    } catch (error) {
      console.log(error.message);
    }
  };

 

  

  return (
    <div>
     <ProductForm buttonName="Create Product" 
     onSubmit={onSubmit}></ProductForm>
    </div>
  );
};

export default CreateProduct;
