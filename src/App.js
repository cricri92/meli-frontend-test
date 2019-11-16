import React from 'react';
import 'App.scss';
import {Route, Switch} from "react-router-dom";
import routes from "routes";
import AppHeader from "components/AppHeader";

function App() {
  return (
    <>
      <AppHeader />
      <Switch>
        {
          routes.map(({path, Component}) => (
            <Route exact path={path} key={path}>
              <Component/>
            </Route>
          ))
        }
      </Switch>
    </>
  );
}

export default App;
