import { Form, Formik } from "formik";
import React from "react";
// import { Form } from "react-router-dom";
import * as yup from "yup";
import FormikInput from "./FormikFormField/FormikInput";
import FormikCheckBox from "./FormikFormField/FormikCheckBox";
import FormikSelect from "./FormikFormField/FormikSelect";
import axios from "axios";
import { companyOptions } from "../config/config";

/* 
Create product form
hit api onSubmit
*/
const ProductForm = ({buttonName="Create Product", onSubmit=()=>{}, products={},
isLoading=false}) => {
  // let initialValues = {
  //   name: "",
  //   quantity: 0,
  //   price: 0,
  //   feature: false,
  //   productImage: "",
  //   manufactureDate: new Date(),
  //   company: "apple",
  // };

  let initialValues = {
    name: products.name || "",
    quantity: products.quantity || 1,
    price: products.price || 100,
    feature: products.feature || false,
    productImage: products.productImage || "",
    manufactureDate:  new Date(products.manufactureDate) || new Date(),
    company:  products.company || "apple",
  };


  // let onSubmit = async (values, other) => {
  //   // console.log(value);
  //   // hit api
  //   try {
  //     let output = await axios({
  //       method: "post",
  //       url: "https://project-dw.onrender.com/v1/products",
  //       data: values,
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  let validationSchema = yup.object({
    //pattern of fullname (alphabet and space)
    //regex => it defines pattern

    name: yup.string().required("name is required"),
    quantity: yup.number().required("Quantity is required"),
    price: yup.number().required("Price is required"),
    feature: yup.boolean().required("Feature is required"),
    productImage: yup.string().required("Product Image is required"),
    manufactureDate: yup.date().required("Manufacture Date is required"),
    company: yup.string().required("Comapny is Required"),
  });



  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <FormikInput
                name="name"
                label="Name:"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("name", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikInput
                name="quantity"
                label="Quantity"
                onChange={(e) => {
                  formik.setFieldValue("quantity", e.target.value);
                }}
                type="number"
                required={true}
              ></FormikInput>

              <FormikInput
                name="price"
                label="Price:"
                onChange={(e) => {
                  formik.setFieldValue("price", e.target.value);
                }}
                type="number"
                required={true}
              ></FormikInput>

              <FormikCheckBox name="feature" label="Feature">
                {" "}
              </FormikCheckBox>

              <FormikInput
                name="productImage"
                label="Product Image"
                type="text"
                required={true}
              ></FormikInput>

              <FormikInput
                name="manufactureDate"
                label="Manufacture Date"
                type="date"
                required={true}
              ></FormikInput>

              <FormikSelect
                name="company"
                label="Company"
                onChange={(e) => {
                  formik.setFieldValue("company", e.target.value);
                }}
                required={true}
                options={companyOptions}
              ></FormikSelect>

              <button type="submit">
                {isLoading ? <div>{buttonName}...</div> : {buttonName}}</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProductForm;
