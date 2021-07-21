import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Cart, Contacts, Home, Login } from "./Pages";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/books" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
