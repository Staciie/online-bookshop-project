import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import App from "./App";
import { store, persistor } from "./store/rootStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
