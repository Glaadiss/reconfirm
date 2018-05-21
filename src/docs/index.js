import React from "react";
import ReactDOM from "react-dom";
import { DialogView, confirm as reconfirm, confirmReducer } from "reconfirm";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
const REVERSE_STATE = "REVERSE_STATE";

const exampleReducer = (state = false, action) => {
  return action.type === REVERSE_STATE ? !state : state;
};

const store = createStore(combineReducers({ exampleReducer, confirmReducer }));

const App = () => (
  <Provider store={store}>
    <div>
      <button
        onClick={() =>
          store.dispatch(
            reconfirm({
              onConfirm: { type: REVERSE_STATE }
            })
          )
        }
      >
        CLICK ME!
      </button>
      <br />
      {store.getState().exampleReducer ? "STATE CHANGED" : ":("}
      <br />
      <DialogView />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
