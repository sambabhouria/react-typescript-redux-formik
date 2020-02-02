import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TodoAppEntryPoint from "../components/todos-redux-typescript/index";
import ReactReduxTypeScriptCrud from "../components/react-redux-typescript-crud/index";
import { FormikEntryPoint } from "../components/formik/index";

import "../css/base.css";
import "../css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/"> TypeScript React Redux CRUD</Link>
              </li>
              <li>
                <Link to="/add-todo">TypeScript To Do App</Link>
              </li>

              <li>
                <Link to="/formik">Formik</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <ReactReduxTypeScriptCrud />
            </Route>
            <Route path="/add-todo">
              <TodoAppEntryPoint />
            </Route>
            <Route path="/formik">
              <FormikEntryPoint />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
