import React from "react";
import ReactDOM from "react-dom";
import { DialogView as Reconfirm } from "reconfirm";

console.log(Reconfirm);
const App = () => (
  <div>
    <Reconfirm />
  </div>
);
console.log(App);
ReactDOM.render(<Reconfirm />, document.getElementById("root"));
