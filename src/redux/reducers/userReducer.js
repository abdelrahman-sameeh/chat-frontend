import { UPDATE_USER_INFO } from "../type";

const initialState = {
  updateUserInfo: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        updateUserInfo: action.payload,
      };
    default:
      return state;
  }
};
