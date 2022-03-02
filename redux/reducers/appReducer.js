import { DATA } from "../../data/userData";
import { SET_SELECTION, SET_SETTINGS } from "../Constants";

const initialState = {
  users: DATA,
  selectedUsers: [],
  selectedCategory: DATA,
};

//Reducers
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTION:
      const indexResult = state.selectedUsers.findIndex(
        (user) => user.id === action.userId
      );

      if (indexResult >= 0) {
        //user existe
        const newSelectedUser = [...state.selectedUsers];
        newSelectedUser.splice(indexResult, 1);
        return { ...state, selectedUsers: newSelectedUser };
      } else {
        //pas de user
        const user = state.users.find((user) => user.id === action.userId);
        return { ...state, selectedUsers: state.selectedUsers.concat(user) };
      }
    case SET_SETTINGS:
      const usedSettings = action.settings;
      const selectedUsersByCategory = state.users.filter((user) => {
        if (usedSettings.animals && user.category === "animals") {
          return true;
        }
        if (usedSettings.travel && user.category === "travel") {
          return true;
        }
        if (usedSettings.cars && user.category === "cars") {
          return true;
        }
      });

      return { ...state, selectedCategory: selectedUsersByCategory };
    default:
      return state;
  }
};

export default appReducer;
