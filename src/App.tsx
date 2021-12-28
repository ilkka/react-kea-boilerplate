import React from "react";
import { hot } from "react-hot-loader";

export class _App extends React.Component {
  render() {
    return <h1>Hello world!</h1>
  }
}

export const App = hot(_App)
