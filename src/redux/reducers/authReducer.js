import { GET_LOGGED_USER, LOGIN, REGISTER } from "../type";

const initialState = {
  register: [],
  login: [],
  user: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        register: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case GET_LOGGED_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
