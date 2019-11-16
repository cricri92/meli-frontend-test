import React from 'react';
import logo2x from 'assets/img/Logo_ML@2x.png';
import 'App.scss';
import {Route, Switch} from "react-router-dom";
import routes from "routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2x} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
        {
          routes.map(({path, Component}) => (
            <Route exact path={path}>
              <Component/>
            </Route>
          ))
        }
      </Switch>
    </div>
  );
}

export default App;
