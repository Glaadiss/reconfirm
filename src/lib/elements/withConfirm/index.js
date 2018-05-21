import React from "react";
import { connect } from "react-redux";
import { closeConfirm } from "../confirm";

const withClose = (closeAction, dispatch) => action => {
  dispatch(action);
  dispatch(closeAction);
};

const enhanceConfirm = Component => props => {
  const { dispatch, onConfirm, onCancel } = props;
  const call = withClose(closeConfirm(), dispatch);
  return (
    <Component
      {...props}
      onConfirm={() => call(onConfirm)}
      onCancel={() => call(onCancel)}
    />
  );
};

const mapStateToProps = state => {
  return state.confirmReducer;
};

export default Component =>
  connect(mapStateToProps, null)(enhanceConfirm(Component));
