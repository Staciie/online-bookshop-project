import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { Cart, Contacts, Home, Login, Item } from "./pages";
import { ROUTES } from "./constants/routes";
import { history } from "./store/history";
import ScrollToTop from "./settings/ScrollToTop";
import { CheckoutForm } from "./components/CheckoutForm/CheckoutForm";

function App() {
  return (
    <Router history={history}>
      <Layout>
        <ScrollToTop />
        <Switch>
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
    </Router>
  );
}

export default App;
