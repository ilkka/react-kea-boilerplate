import React from 'react'
import ReactDOM from "react-dom";
import { resetContext, Provider } from "kea";
import App from "./App";

resetContext({
  createStore: {},
  plugins: []
})

ReactDOM.render(
  <Provider><App /></Provider>,
  document.getElementById('root')
)
