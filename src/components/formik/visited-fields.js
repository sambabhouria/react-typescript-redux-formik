import React from "react";

import FieldVisited from "./visited-fields/fields-visited";

import TouchErrorMessageField from "./visited-fields/fields-visited";
const VisitedField = () => {
  return (
    <div>
      <div>
        <h3 style={{ fontWeight: "bold", color: "red" }}>
          {" "}
          Immediately Showing Erro to the Use
        </h3>
        Most of the time, we only want to show a field's error message after our
        user is done typing in that field. Like errors and values, Formik can
        keep track of which fields have been visited. It stores this information{" "}
        <br />
        To take advantage of touched, we can pass formik.handleBlur to each
        input's onBlur prop. This function works similarly to
        formik.handleChange in that it uses the name attribute to figure out
        which field to update.
        <br />
      </div>
      <FieldVisited />
      <hr />
      <h3 style={{ fontWeight: "bold", color: "red" }}>
        {" "}
        Tracking Touched Field Tracking
      </h3>

      <TouchErrorMessageField />
    </div>
  );
};

export default VisitedField;
