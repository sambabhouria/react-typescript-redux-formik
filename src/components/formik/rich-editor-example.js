import React from "react";
import { withFormik } from "formik";
import { EditorState } from "draft-js";

import { RichEditorExample } from "./rich-editor-example/rich-editor-example";

const formikEnhancer = withFormik({
  mapPropsToValues: props => ({
    editorState: new EditorState.createEmpty(),
    email: ""
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // you probably want to transform draftjs state to something else, but I'll leave that to you.
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm"
});

const MyForm = ({
  values,
  touched,
  dirty,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  setFieldValue,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="email" style={{ display: "block" }}>
      Email
    </label>
    <input
      id="email"
      placeholder="Enter your email"
      type="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.email && touched.email && (
      <div style={{ color: "red", marginTop: ".5rem" }}>{errors.email}</div>
    )}
    <label htmlFor="email" style={{ display: "block", marginTop: ".5rem" }}>
      Story
    </label>
    <RichEditorExample
      editorState={values.editorState}
      onChange={setFieldValue}
      onBlur={handleBlur}
    />
    <button
      type="button"
      className="outline"
      onClick={handleReset}
      disabled={!dirty || isSubmitting}
    >
      Reset
    </button>
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </form>
);

const MyEnhancedForm = formikEnhancer(MyForm);

export const RicheEditor = () => (
  <div className="app">
    <h1>
      Using{" "}
      <a
        href="https://github.com/jaredpalmer/formik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Formik
      </a>{" "}
      with{" "}
      <a href="https://draftjs.org/" target="_blank" rel="noopener noreferrer">
        Draft.js
      </a>
    </h1>
    <p>
      This example shows to use Formik with Facebook's Draft.js. The Rich Text
      Editor is taken directly from the Draft.js examples directory. The trick
      is to lift editor state up to Formik instead of in the input class
      component and then use Formik's <code>setFieldValue</code> method to make
      state changes.{" "}
    </p>
    <MyEnhancedForm user={{ email: "hello@reason.nyc" }} />
  </div>
);
export default RicheEditor;
