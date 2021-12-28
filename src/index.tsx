import ReactDOM from "react-dom";
import { getContext, resetContext } from "kea";
import { Provider } from "react-redux";
import App from "./App";

resetContext({
  createStore: {},
  plugins: []
})

ReactDOM.render(
  <Provider store={getContext().store}><App /></Provider>,
  document.getElementById('root')
)
