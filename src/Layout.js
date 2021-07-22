import React from "react";
import PropTypes from "prop-types";

import { Header, Footer } from "./components";

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
