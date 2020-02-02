import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import ErrorMessageContent from "./error-message/error-message";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

export const ErrorMessageForm = () => (
  <div>
    <div>
      <ErrorMessageContent />
      <br />
    </div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: "",
        email: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="firstName">Name</label>
          <Field name="name" type="text" />
          {/* {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null} */}
          <ErrorMessage name="name" /> <br />
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          {/* {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null} */}
          <ErrorMessage name="email" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ErrorMessageForm;
