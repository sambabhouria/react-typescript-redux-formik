import React from "react";

import SchemaYouValidation from "./schema-validation-yup/schema-yup-validation";
import ReducingBoilerPlateGetFieldProps from "./schema-validation-yup/reducing-boilerplate-get-field-props";

const SchemaValidationWithYoup = () => {
  return (
    <div>
      <h3 style={{ fontWeight: "bold", color: "red" }}>
        Schema Validation with Yup
      </h3>
      Formik's authors/a large portion of its users use Jason Quense's library
      Yup for object schema validation. <br />
      Formik has a special configuration option / prop for Yup called
      validationSchema which will automatically transform Yup's validation
      errors messages into a pretty object whose keys match <br />
      values/initialValues/touched (just like any custom validation function
      would have to). Anyways, you can install Yup from NPM/yarn like so...
      <ul>
        <li>Getting values in and out of form state</li>
        <li>Validation and error messages</li>
        <li>Handling form submissio</li>
      </ul>
      <h3 style={{ fontWeight: "bold", color: "red" }}>Influences</h3>
      Formik started by expanding on this little higher order component by Brent
      Jackson, some naming conventions from Redux-Form, and (most recently) the
      render props <br />
      approach popularized by React-Motion and React-Router 4. Whether you have
      used any of the above or not, Formik only takes a few minutes to get
      started with.
      <br />
      <h3 style={{ fontWeight: "bold", color: "red" }}>Installation</h3> <br />
      <span style={{ fontWeight: "bold" }}>NPM==> </span>npm install formik
      --save <br />
      <span style={{ fontWeight: "bold" }}>YARN==> </span>yarn add formik
      <br />
      <SchemaYouValidation />
      <hr />
      <h3 style={{ fontWeight: "bold", color: "red" }}>
        {" "}
        Reducing Boilerplate
      </h3>
      useFormik() returns a helper method called formik.getFieldProps() to make
      it faster to wire up inputs. <br />
      <ReducingBoilerPlateGetFieldProps />
    </div>
  );
};

export default SchemaValidationWithYoup;
