import React from "react";
import { Field, FieldProps } from "formik";
import { OwnInnerFieldProps } from "../post-form/post-form";

const TextField: React.FunctionComponent<OwnInnerFieldProps> = ({
  title,
  field,
  form
}) => {
  const className = `field ${
    form.touched.title && form.errors.title ? "error" : null
  }`;
  return (
    <div className={className}>
      <label htmlFor="title" className="col-sm-2 col-form-label">
        Title
      </label>
      <div className="col-sm-10">
        <Field
          type="text"
          name="title"
          placeholder="Title"
          className="form-control"
        />
      </div>
      {form.touched.title && form.errors.title ? (
        <div className="ui pointing red basic label">{form.errors.title}</div>
      ) : null}
    </div>
  );
};

export default TextField;
