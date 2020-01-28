import React from "react";

const Overview = () => {
  return (
    <div>
      <h3 style={{ fontWeight: "bold", color: "red" }}>Overview</h3>
      Let's face it, forms are really verbose in React. To make matters worse,
      most form helpers do wayyyy too much magic and often <br />
      have a significant performance cost associated with them. Formik is a
      small library that helps you with the 3 most annoying parts:
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
      <span style={{ fontWeight: "bold" }}>NPM</span>npm install formik --save{" "}
      <br />
      <span style={{ fontWeight: "bold" }}>YARN</span>yarn add formik
      <br />
    </div>
  );
};

export default Overview;
