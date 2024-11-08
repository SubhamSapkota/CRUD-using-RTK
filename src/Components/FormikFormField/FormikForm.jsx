// formik component use
//yup validation
//regex with yup validation



import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTeaxtArea";
import FormikSelect from "./FormikSelect";
import FormikRadio from "./FormikRadio";
import FormikCheckBox from "./FormikCheckBox";

const FormikForm = () => {
  //Each field has three thing
  //value
  //error
  //touch
  let initialValues = {
    fullName: "",
    Password: "",
    Email: "",
    country:"",
    gender:"",
    isMarried:false
  };

  let onSubmit = (value, other) => {
    console.log(value);
  };

  //validation will run only if
  //onChange event is fire
  //onBlur(touched) event is fire
  //onSubmit event is fire
  let validationSchema = yup.object({
    fullName: yup.string().required("Fullname field is required"),
    Password: yup.string().required("Password field is required"),
    Email: yup.string().required("Email field is required"),
  });

  let country = [
    {
      value: "nepal",//item.value
      label: "Nepal",//item.label
    },
    {
      value: "india",
      label: "India",
    },
    {
      value: "pakistan",
      label: "Pakistan",
    },
  ]

  let genderOptions = [
    {
      value: "male", //item.value
      label: "Male", //item.label
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "other",
      label: "Other",
    },
  ];
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
                name="fullName"
                label="Full Name: "
                type="text"
                onChange={(e)=>{
                  formik.setFieldValue("fullName", e.target.value)
                }}
                required={true}
                placeholder="Enter full name"
                // style={{backgroundColor:"red"}}
              ></FormikInput>
              {/* <Field name="fullName">
                {({ field, form, meta }) => {
                  // meta={
                  //   value
                  //   error
                  //   touch
                  // }
                  return (
                    <div>
                      <label htmlFor="fullname">Fullname</label>
                      <input
                      {...field}
                        type="text"
                        id="fullname"
                        value={meta.value}
                        onChange={(e) => {
                          // setFullName(e.target.value);
                          formik.setFieldValue("fullName", e.target.value)
                        }}
                      />
                      {meta.touched && meta.error?<div style={{color:"red"}}>{meta.error}</div>:null}
                      {/* <div style={{color:"red"}}>{meta.error}</div> */}
              {/* </div> */}
              {/* ); */}
              {/* }} */}
              {/* </Field> */}

              <FormikInput
                name="Password"
                label="Password: "
                type="password"
                onChange={(e)=>{
                  formik.setFieldValue("Password", e.target.value)
                }}
                required={true}
              ></FormikInput>

              <FormikInput
                name="Email"
                label="Email: "
                type="email"
                onChange={(e)=>{
                  formik.setFieldValue("Email", e.target.value)
                }}
                required={true}
              ></FormikInput>

              <FormikTextArea
              name="description"
              label="Description: "
              type="text"
              ></FormikTextArea>

                <FormikSelect 
                name="country"
                label="Country"
                
                onChange={(e)=>{
                  formik.setFieldValue("country", e.target.value)
                }}
               options={
                country
               }
               ></FormikSelect>
              
              <FormikRadio
              name="gender"
              label="Gender"
              onChange={(e)=>{
                formik.setFieldValue("gender", e.target.value)
              }}
              options={genderOptions}
              ></FormikRadio>

              <FormikCheckBox
              name="isMarried"
              label="Is Married:"
              onChange={(e)=>{
                formik.setFieldValue("isMarried", e.target.checked)
              }}
              ></FormikCheckBox>

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;

/* 

*/
