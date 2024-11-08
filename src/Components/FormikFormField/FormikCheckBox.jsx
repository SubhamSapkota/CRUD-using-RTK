import { Field, Formik } from "formik";
import React from "react";

const FormikCheckBox = ({ name, label, onChange, required, ...props }) => {
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
              <label htmlFor={name}>{label} {required? <span style={{color:"red"}}>*</span>:null}</label>
              <input
                type="checkbox"
                id={name}
                onChange={onChange ? onChange : field.onChange}
                checked={meta.value}
                
              />

              {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikCheckBox;
