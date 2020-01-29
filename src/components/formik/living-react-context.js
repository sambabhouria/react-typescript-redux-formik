import React from "react";

import LivingReactContextForm from "./living-react-context/living-react-context";
import ReusableInputPrimitiveFormik from "./living-react-context/reusable-input-primitive";

const LivingReactContext = () => {
  return (
    <div>
      <h3 style={{ fontWeight: "bold", color: "red" }}>
        Leveraging React Context
      </h3>
      To save you even more time, Formik comes with React Context-powered
      API/component make life easier and less verbose: Formik />, Form />,{" "}
      'Field /, and ErrorMessage />. More explicitly, they use React Context
      implicitly to connect to the parent Formik /> state/methods.
      <br />
      Since these components use React Context, we need to render a React
      Context Provider that holds our form state and helpers in our tree. If you
      did this yourself, it would look like:
      <br />
      <LivingReactContextForm />
      <hr />
      <h3 style={{ fontWeight: "bold", color: "red" }}>
        Abstraction with Formik
      </h3>
      With Formik, you can and should build reusable input primitive components
      that you can share around your application.
      <br />
      <ReusableInputPrimitiveFormik />
    </div>
  );
};

export default LivingReactContext;
