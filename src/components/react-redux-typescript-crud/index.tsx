import React from "react";
import { Provider } from "react-redux";
import { store, RootState } from "../../store";

import Tabs from "../tabs/tabs";

const ReactReduxTypeScriptCrud = () => {
  return (
    <Provider store={store}>
      <Tabs>
        <div id="Table of Contents">
          <h1>react-redux-ts-crud</h1>
          <p>
            Example of how to build CRUD (blog app) using React Redux and
            Typescript
          </p>
          <h3>Quick Start</h3>
          <ul>
            <li>
              La partie frontend de l'application sera créée à l'aide de
              l'application Create React
            </li>
            <li>
              La partie back de l'application sera créée à l'aide de du server
              JSON
            </li>
            <li>Documentation:http://jsonplaceholder.typicode.com/ </li>
            <li>server "start": "json-server --watch db.json --port 3004" </li>
            <li>
              {" "}
              Pour lancer en parallele le client et le server voir fichier
              packagae.json
            </li>
          </ul>
        </div>

        <div id="Exemple Here">fsgfgsfdg</div>
      </Tabs>
    </Provider>
  );
};

export default ReactReduxTypeScriptCrud;
