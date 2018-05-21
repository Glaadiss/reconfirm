import { OPEN_CONFIRM, CLOSE_CONFIRM, defaultPayload } from "../confirm";

const defaultState = {
  isOpen: false,
  ...defaultPayload
};

export const confirmReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_CONFIRM:
      return { ...state, ...action.payload, isOpen: true };
    case CLOSE_CONFIRM:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};
