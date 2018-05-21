export const OPEN_CONFIRM = Symbol("OPEN_CONFIRM");
export const CLOSE_CONFIRM = Symbol("CLOSE_CONFIRM");
export const defaultPayload = {
  onConfirm: {},
  onCancel: {},
  title: "Are you sure?",
  confirmText: "Yes",
  cancelText: "No"
};

export const confirm = payload => {
  return {
    type: OPEN_CONFIRM,
    payload
  };
};
