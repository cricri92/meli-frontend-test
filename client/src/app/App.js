import React from 'react';
import {Route, Switch} from "react-router-dom";

import routes from "routes";

import AppHeader from "components/AppHeader";

import 'app/App.scss';

function App() {
  return (
    <>
      <AppHeader />
      <div className="app">
        <Switch>
          {
            routes.map(({path, Component}) => (
              <Route exact path={path} key={path}>
                <Component/>
              </Route>
            ))
          }
        </Switch>
      </div>
    </>
  );
}

export default App;
