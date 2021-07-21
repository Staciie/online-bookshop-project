/* eslint-disable react/prop-types */

import React from "react";
import { Header, Footer } from "./Components";

export function Layout(props) {
  return (
    <>
      <Header />
      {props.children}

      <Footer />
    </>
  );
}
