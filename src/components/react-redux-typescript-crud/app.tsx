import React, { useEffect } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "../../history";
import PostsList from "../../containers/posts-list";
import PostsNew from "../../containers/posts-new";
const App = () => {
  useEffect(() => {
    history.push("/react-redux-ts-crud");
  }, []);

  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <Link to={"/react-redux-ts-crud"} className="navbar-brand">
              Go to main
            </Link>
          </nav>
          <p>
            <Link
              to={"/posts/new"}
              className="btn btn-primary"
              style={{ marginTop: "15px" }}
            >
              Create new post
            </Link>
          </p>

          <Switch>
            <Route path="/react-redux-ts-crud" exact component={PostsList} />
            <Route path="/posts" exact component={PostsList} />
            <Route path="/posts/new" exact component={PostsNew} />
            {/* <Route path="/posts/edit/:id" exact component={PostEdit} />
            <Route path="/posts/delete/:id" exact component={PostDelete} />
            <Route path="/posts/:id" exact component={PostShow} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
