import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TodoAppEntryPoint from "../components/todos-redux-typescript/index";
import ReactReduxTypeScriptCrud from "../components/react-redux-typescript-crud/index";

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
                <Link to="/">To-Do-App</Link>
              </li>
              <li>
                <Link to="/react-redux-ts-crud">react-redux-ts-crud</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <TodoAppEntryPoint />
            </Route>
            <Route path="/react-redux-ts-crud">
              <ReactReduxTypeScriptCrud />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
