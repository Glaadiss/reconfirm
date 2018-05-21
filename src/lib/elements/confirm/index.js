export const OPEN_CONFIRM = Symbol("OPEN_CONFIRM");
export const CLOSE_CONFIRM = Symbol("CLOSE_CONFIRM");
export const NOT_EXISTING = Symbol("NOT_EXISTING");
export const defaultPayload = {
  onConfirm: { type: NOT_EXISTING },
  onCancel: { type: NOT_EXISTING },
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

export const closeConfirm = () => {
  return {
    type: CLOSE_CONFIRM
  };
};
