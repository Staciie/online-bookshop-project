/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import { React, Component } from "react";

import { ErrorBoundaryContent } from "./ErrorBoundaryContent";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    console.log(error);
  }

  render() {
    return this.state.errorInfo ? (
      <ErrorBoundaryContent />
    ) : (
      this.props.children
    );
  }
}
