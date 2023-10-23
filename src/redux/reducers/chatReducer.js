import { GET_CHAT } from "../type";

const initialState = {
  getChat: []
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT:
      return {
        ...state,
        getChat: action.payload,
      };
    default:
      return state;
  }
};
