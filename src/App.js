import React from 'react';
import logo2x from 'assets/img/Logo_ML@2x.png';
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
            <Route exact path={path}>
              <Component/>
            </Route>
          ))
        }
      </Switch>
    </>
  );
}

export default App;
