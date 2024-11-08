import { Field, Formik } from "formik";
import React from "react";

const FormikTextArea = ({
  name,
  label,
  type,
  onChange,
  required,
  ...props
}) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
          // meta={
          //   value
          //   error
          //   touch
          // }
          return (
            <div>
              <label htmlFor={name}>
                {label}{" "}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <textarea
                {...field}
                {...props}
                type={type}
                id={name}
                value={meta.value}
                onChange={onChange ? onChange : field.onChange}
                // onChange={field.onChange}
                // onChange={(e) => {
                //   // setFullName(e.target.value);
                //   Formik.setFieldValue("fullName", e.target.value)
                // }}
              />
              {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
              ) : null}
              {/* <div style={{color:"red"}}>{meta.error}</div> */}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikTextArea;
