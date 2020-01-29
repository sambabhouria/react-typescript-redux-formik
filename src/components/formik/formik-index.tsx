import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as burgerFunction from "./side-bar-utility";
import "./formikStyle.css";
import "./styles-custom.css";

import Overview from "./overview";
import Tuto from "./tuto";
import Basic from "./basic";
import Validation from "./validation";
import VisitedField from "./visited-fields";

const routes = [
  {
    path: "/formik",
    exact: true,
    sidebar: () => <></>,
    main: () => <Overview />
  },
  {
    path: "/tuto",
    sidebar: () => <></>,
    main: () => <Tuto />
  },
  {
    path: "/thebasic",
    sidebar: () => <></>,
    main: () => <Basic />
  },
  {
    path: "/validation",
    sidebar: () => <></>,
    main: () => <Validation />
  },
  {
    path: "/visitedfield",
    sidebar: () => <></>,
    main: () => <VisitedField />
  },
  {
    path: "/c",
    sidebar: () => <></>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default function FormikEntryPoint() {
  return (
    <Router>
      <div>
        <div
          className="w3-sidebar w3-bar-block w3-card w3-animate-left"
          style={{ display: "none" }}
          id="mySidebar"
        >
          <button
            onClick={() => burgerFunction.w3_close()}
            className="w3-bar-item w3-button w3-large"
          >
            Close &times;
          </button>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/formik" className="w3-bar-item w3-button">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/tuto" className="w3-bar-item w3-button">
                Tuto
              </Link>
            </li>
            <li>
              <Link to="/thebasic" className="w3-bar-item w3-button">
                The Basics
              </Link>
            </li>
            <li>
              <Link to="/validation" className="w3-bar-item w3-button">
                Validation
              </Link>
            </li>
            <li>
              <Link to="/visitedfield" className="w3-bar-item w3-button">
                Visited Field Validation
              </Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div id="main">
          <div className="w3-teal">
            <button
              id="openNav"
              className="w3-button w3-teal w3-xlarge"
              onClick={() => burgerFunction.w3_open()}
            >
              ☰ <span>Formik 2.1.2</span>
            </button>
          </div>

          <div className="w3-container">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
