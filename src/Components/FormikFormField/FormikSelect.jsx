import { Field, Formik } from "formik";
import React from "react";

const FormikSelect = ({ name, label, onChange, required, options, ...props }) => {
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
              <select
              {...field}
              {...props}
                id={name}
                value={meta.value}
                onChange={onChange?onChange:field.onChange}
              >
                {/* <option value="nepal">Nepal</option>
<option value="pakistan">Pakistan</option>
<option value="india">India</option>
<option value="china">China</option> */}

                {options.map((item, i) => {
                  return (
                    <option value={item.value} key={i}>
                      {item.label}
                    </option>
                  );
                })}
              </select>

              {meta.touched && meta.error?<div style={{color:"red"}}>{meta.error}</div>:null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikSelect;
