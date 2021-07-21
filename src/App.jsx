import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Cart, Contacts, Home, Login } from "./Pages";
import { Routes } from "./constants/Routes";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={Routes.homePath} component={Home} />
          <Route path={Routes.contactsPath} component={Contacts} />
          <Route path={Routes.loginPath} component={Login} />
          <Route path={Routes.cartPath} component={Cart} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
