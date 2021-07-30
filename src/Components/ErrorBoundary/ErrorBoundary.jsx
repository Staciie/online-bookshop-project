/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import { React, Component } from "react";

import { ErrorBoundaryContent } from "./ErrorBoundaryContent";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: null };
  }

  static getDerivedStateFromError(error, errorInfo) {
    console.log(errorInfo);
    return {
      error: true,
      errorInfo,
    };
  }

  render() {
    return this.state.error ? <ErrorBoundaryContent /> : this.props.children;
  }
}
