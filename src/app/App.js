import React from 'react';
import 'app/App.scss';
import {Route, Switch} from "react-router-dom";
import routes from "routes";
import AppHeader from "components/AppHeader";

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
