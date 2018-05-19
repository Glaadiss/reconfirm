import React from "react";

const DialogView = props => {
  return (
    <div className="popup">
      <p>{props.title}</p>
      <div className="text-right">
        <button className="btn btn-cancel">Cancel</button>
        <button className="btn btn-primary">Ok</button>
      </div>
    </div>
  );
};

export { DialogView };
