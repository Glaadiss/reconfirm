// @flow
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

type ConfirmPayload = {
  onConfirm: { type: string },
  onCancel: { type: string },
  title: string,
  confirmText: string,
  cancelText: string
};

export const confirm = (payload: ConfirmPayload) => {
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
