import ReactDOM from "react-dom";
import { getContext, resetContext } from "kea";
import { Provider } from "react-redux";

resetContext({
  createStore: {},
  plugins: []
})

ReactDOM.render(
  <Provider store={getContext().store}></Provider>,
  document.getElementById('root')
)
