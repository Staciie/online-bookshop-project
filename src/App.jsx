import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { Cart, Contacts, Home, Login, Item } from "./pages";
import { Routes } from "./constants/routes";
import { history } from "./store/history";
import ScrollToTop from "./settings/ScrollToTop";

function App() {
  return (
    <Router history={history}>
      <Layout>
        <ScrollToTop />
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
