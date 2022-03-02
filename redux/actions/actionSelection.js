import { SET_SELECTION } from "../Constants";

export const setSelection = (id) => {
  return {
    type: SET_SELECTION,
    userId: id,
  };
};
