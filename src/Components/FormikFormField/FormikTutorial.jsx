import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "./FormikInput";
import FormikRadio from "./FormikRadio";
import FormikSelect from "./FormikSelect";
import FormikTextArea from "./FormikTeaxtArea";

const FormikTutorial = () => {
  let initialValues = {
    fullName: "",
    email: "",
    password: "",
    gender: "male",
    country: "nepal",
    isMarried: false,
    description: "",
    phoneNumber: "",
    age: 0,
  };

  let onSubmit = (value, other) => {
    console.log(value);
  };

  let validationSchema = yup.object({
    //pattern of fullname (alphabet and space)
    //regex => it defines pattern

    fullName: yup
      .string()
      .required("Full Name is required")
      .min(8, "Must be atleast 8 character.")
      .max(15, "Must be atmost 15 character")
      .matches(/^[a-zA-Z ]*$/, "Only alphabet and spaces are allowed"),
    Email: yup
      .string()
      .required("Email is required")
      .matches(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        "Email is not valid"
      ),
    Password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password msut contain one uppercase one lowercase, one special and must be greater than 8 character"
      ),
    gender: yup.string().required("Gender is required"),
    country: yup.string().required("Country  is required"),
    isMarried: yup.boolean(),
    description: yup.string(),
    phoneNumber: yup.string().min(10,"Phone Number must be 10 number").required("Phone Number is required")
    .min(10,"must be atleast 10 character")
    .max(10,"must be atmost 10 character"),
    age: yup
      .number()
      .required("Age is required")
      .min(18, "Age must be greater or equal to 18"),
  });

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

  let country = [
    {
      value: "nepal", //item.value
      label: "Nepal", //item.label
    },
    {
      value: "india",
      label: "India",
    },
    {
      value: "pakistan",
      label: "Pakistan",
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
                label="Full Name:"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("fullName", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikInput
                name="email"
                label="Email:"
                onChange={(e) => {
                  formik.setFieldValue("email", e.target.value);
                }}
                type="email"
                required={true}
              ></FormikInput>

              <FormikInput
                name="password"
                label="Password:"
                onChange={(e) => {
                  formik.setFieldValue("password", e.target.value);
                }}
                type="password"
                required={true}
              ></FormikInput>

              <FormikRadio
                name="gender"
                label="Gender"
                onChange={(e) => {
                  formik.setFieldValue("gender", e.target.value);
                }}
                required={true}
                options={genderOptions}
              ></FormikRadio>

              <FormikSelect
                name="country"
                label="Country"
                onChange={(e) => {
                  formik.setFieldValue("country", e.target.value);
                }}
                required={true}
                options={country}
              ></FormikSelect>

              <FormikTextArea
                name="description"
                label="Description: "
                type="text"
              ></FormikTextArea>

              <FormikInput
                name="phoneNumber"
                label="Phone Number: "
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("phoneNumber", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikInput
                name="age"
                label="Age: "
                type="number"
                onChange={(e) => {
                  formik.setFieldValue("age", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <button type="Submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikTutorial;
