import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../css/base.css";

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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
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

function Home() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
