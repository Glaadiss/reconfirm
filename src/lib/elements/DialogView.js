import React from "react";
import { connect } from "react-redux";

const DialogView = props => {
  const {
    title,
    confirmText,
    cancelText,
    dispatch,
    onConfirm,
    onCancel
  } = props;
  return (
    <div className="popup">
      <p>{title}</p>
      <div className="text-right">
        <button onClick={() => dispatch(onCancel)} className="btn btn-cancel">
          {cancelText}
        </button>
        <button onClick={() => dispatch(onConfirm)} className="btn btn-primary">
          {confirmText}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state.confirmReducer;
};

export default connect(mapStateToProps, null)(DialogView);
