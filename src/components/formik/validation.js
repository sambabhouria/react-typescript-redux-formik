import React from "react";

import CustomeValidation from "./validation-forms/custom-validation";

const Validation = () => {
  return (
    <div>
      <div>
        <h3 style={{ fontWeight: "bold", color: "red" }}>Validation</h3>
        While our contact form works, it's not quite feature-complete. While
        users can submit it, it doesn't tell them which (if any) fields are
        required
        <br />
        If we are okay with using the browser's built-in HTML input validation,
        you could add a required prop to each of our inputs, specify
        minimum/maximum lengths (maxlength and minlength), and/or add a pattern
        prop for regex validation for each of these inputs.
        <br />
        These are great if you can get away with them. However, HTML validation
        has its limitations. First, it only works in the browser! So this
        clearly is not viable for React Native. Second, it's hard/impossible to
        show custom error messages to our user. Third, it's very janky. <br />
        As mentioned earlier, Formik keeps track of not only your form's values,
        but also its error messages and validation. To add validation with JS,
        let's specify a custom validation function and pass it as validate to
        the useFormik() hook.
        <br />
        If an error exists, this custom validation function should produce an
        error object with a matching shape to our values/initialValues.
        Again...symmetry...yes... <br />
      </div>
      <CustomeValidation /> <br />
      formik.errors is populated via the custom validation function. By default,
      Formik will validate after each keystroke (change event), each input's
      blur event, as well as prior to submission. It will only proceed with
      <br />
      executing the onSubmit function we passed to useFormik() if there are no
      errors (i.e. if our validation function returned {}).
    </div>
  );
};

export default Validation;
