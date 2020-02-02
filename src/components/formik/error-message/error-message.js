import React from "react";

const ErrorMessage = () => {
  return (
    <div>
      <h3 style={{ fontWeight: "bold", color: "red" }}>ErrorMessage</h3>
      ErrorMessage is a component that renders the error message of a given
      field if that field has been visited (i.e.touched[name] === true) (and
      there is an error message present). It expects that all error messages are
      stored for a given field as a string. Like Field , FastField , and{" "}
      FieldArray , lodash-like dot path and bracket syntax is supported.
    </div>
  );
};

export default ErrorMessage;
