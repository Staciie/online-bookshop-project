import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Cart, Contacts, Home, Login, Item } from "./Pages";
import { Routes } from "./Constants/Routes";
import { history } from "./store/history";

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path={Routes.homePath} exact component={Home} />
          <Route path={Routes.contactsPath} component={Contacts} />
          <Route path={Routes.loginPath} component={Login} />
          <Route path={Routes.cartPath} component={Cart} />
          <Route path={Routes.itemPath} component={Item} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
