import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { Cart, Contacts, Home, Login, Item } from "./pages";
import { ROUTES } from "./constants/routes";
import { history } from "./store/history";
import ScrollToTop from "./settings/ScrollToTop";

function App() {
  return (
    <Router history={history}>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route path={ROUTES.homePath} exact component={Home} />
          <Route path={ROUTES.contactsPath} component={Contacts} />
          <Route path={ROUTES.loginPath} component={Login} />
          <Route path={ROUTES.cartPath} component={Cart} />
          <Route path={ROUTES.itemPath} component={Item} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
