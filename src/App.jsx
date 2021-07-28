/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
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
          <Route
            path={ROUTES.cartPath}
            children={({ match }) => (
              <>
                <Cart />
                <Route
                  path={ROUTES.checkoutPath}
                  children={({ match }) => (
                    <CheckoutForm
                      onClose={history.goBack}
                      open={Boolean(match)}
                    />
                  )}
                />
              </>
            )}
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
