import React from "react";
import ReactDOM from "react-dom";
import view from "reconfirm";

console.log(view);
const Reconfirm = view.default;
console.log(Reconfirm);
const App = () => (
  <div>
    <Reconfirm />
  </div>
);
console.log(App);
ReactDOM.render(<Reconfirm />, document.getElementById("root"));
