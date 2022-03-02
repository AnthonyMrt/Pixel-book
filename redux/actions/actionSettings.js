import { SET_SETTINGS } from "../Constants";

export const setCategorySettings = (savedSettings) => {
  return {
    type: SET_SETTINGS,
    settings: savedSettings,
  };
};
