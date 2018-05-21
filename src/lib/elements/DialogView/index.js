import React from "react";
import withConfirm from "../withConfirm";

const DialogView = props => {
  const { title, confirmText, cancelText, onConfirm, onCancel, isOpen } = props;
  return (
    isOpen && (
      <div className="popup">
        <p>{title}</p>
        <div className="text-right">
          <button onClick={onCancel} className="btn btn-cancel">
            {cancelText}
          </button>
          <button onClick={onConfirm} className="btn btn-primary">
            {confirmText}
          </button>
        </div>
      </div>
    )
  );
};

export default withConfirm(DialogView);
