import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

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
      <SignupForm />
    </div>
  );
};

export default Basic;
