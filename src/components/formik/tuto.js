import React from "react";

const Tuto = () => {
  return (
    <div>
      <h3 style={{ fontWeight: "bold", color: "red" }}>Before we start</h3>
      <h5 style={{ fontWeight: "bold", color: "red" }}>
        What are we building?
      </h5>
      In this tutorial, we'll show how to build a complex newsletter signup form
      with React and Formik.
      <br />
      <h3 style={{ fontWeight: "bold", color: "red" }}>Prerequisites</h3>
      You'll need to have familiarity with HTML, CSS, modern JavaScript, and
      React (and React Hooks) to fully understand Formik and how it works. In{" "}
      <br />
      this tutorial, we're using arrow functions, let, const, spread syntax,
      destructuring, computed property names, and async/await . You can use the
      <br />
      Babel REPL to check what ES6 code compiles to.
      <br />
      <h3 style={{ fontWeight: "bold", color: "red" }}>
        Setup for the Tutorial
      </h3>
      There are two ways to complete this tutorial: you can either write the
      code in your browser, or you can set up a local development environment on
      your computer. <br />
      <h3 style={{ fontWeight: "bold" }}>
        Setup Option 1: Write Code in the Browser
      </h3>{" "}
      <br />
      <h3 style={{ fontWeight: "bold" }}>
        Setup Option 2: Local Development Environment
      </h3>{" "}
      <br />
      This setup requires more work but allows you to complete the tutorial
      using an editor of your choice. Here are the steps to follow:
      <ul>
        <li>Make sure you have a recent version of Node.js installed.</li>
        <li>
          Follow the installation instructions for Create React App to make a
          new project. ==> npx create-react-app my-app
        </li>
      </ul>
      <h3 style={{ fontWeight: "bold", color: "red" }}>
        Overview: What is Formik?
      </h3>{" "}
      <br />
      Formik is a small group of React components and hooks for building forms
      in React and React Native. It helps with the three most annoying parts:
      <br />
      <ul>
        <li>Getting values in and out of form state</li>
        <li>Validation and error messages</li>
        <li>Handling form submission</li>
      </ul>
      By colocating all of the above in one place, Formik keeps things
      organized--making testing, refactoring, and reasoning about your forms a
      breeze.
    </div>
  );
};

export default Tuto;
