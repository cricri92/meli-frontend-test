import React from 'react';
import 'app/App.scss';
import {Route, Switch} from "react-router-dom";
import routes from "routes";
import AppHeader from "components/AppHeader";
import SearchService from "../services/Search";
import ItemsService from "../services/Items";

function App() {
  async function init() {
    const items = await SearchService.getResults('iphone');
    const item = await ItemsService.getItem('MLA825811914');

    console.log(items,item);
  }

  init();

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
