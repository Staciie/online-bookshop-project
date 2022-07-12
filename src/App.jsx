import React from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { Cart, Contacts, Home, Login, Item } from "./Pages";
import { ROUTES } from "./constants/Routes";
import { history } from "./store/history";
import ScrollToTop from "./settings/ScrollToTop";
import { CheckoutForm } from "./Components/CheckoutForm/CheckoutForm";

function App() {
  return (
    <HashRouter history={history} basename={process.env.PUBLIC_URL}>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path={ROUTES.homePath} exact component={Home} />
          <Route path={ROUTES.contactsPath} component={Contacts} />
          <Route path={ROUTES.loginPath} component={Login} />
          <Route path={ROUTES.itemPath} component={Item} />
          <Route path={ROUTES.cartPath}>
            <Cart />
            <Route path={ROUTES.checkoutPath} component={CheckoutForm} />
          </Route>
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
