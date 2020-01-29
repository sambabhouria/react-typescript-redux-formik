import React from "react";

import SignupSingleForm from "./basic-forms/signup-single-input-form";
import SignupMultipleForm from "./basic-forms/signup-multiple-input-form";

const Basic = () => {
  return (
    <div>
      <div>
        <h3 style={{ fontWeight: "bold", color: "red" }}>The Basics</h3>
        We're going to start with the most verbose way of using Formik. While
        this may seem a bit long-winded, it's important for you to see how
        Formik builds on itself so you have a full grasp of what's possible and
        a <br />
        complete mental model of how it works.
        <br />
        <h5 style={{ fontWeight: "bold", color: "red" }}>
          A simple newsletter signup form
        </h5>
        Imagine we want to add a newsletter signup form for a hypothetical blog.
        To start, our form will have just one field named email. With Formik,
        this is just a few lines of code.
        <br />
      </div>
      <h5 style={{ fontWeight: "bold", color: "red" }}>Single input (eamil)</h5>
      <SignupSingleForm />
      <hr />
      <h5 style={{ fontWeight: "bold", color: "red" }}>
        multiple input (eamil,firstName,lastName)
      </h5>
      <SignupMultipleForm />
    </div>
  );
};

export default Basic;
