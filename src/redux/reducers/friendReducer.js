import {
  GET_All_FRIENDS,
  GET_FRIENDS,
  GET_FRIENDS_REQUESTS_RECEIVED,
  GET_FRIENDS_REQUESTS_SENT,
  LIST_OF_USERS,
} from "../type";

const initialState = {
  getFriendsRequestReceived: [],
  getFriendsRequestSent: [],
  friends: [],
  users: [],
  getAllFriends: [],
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_REQUESTS_RECEIVED:
      return {
        ...state,
        getFriendsRequestReceived: action.payload,
      };
    case GET_FRIENDS_REQUESTS_SENT:
      return {
        ...state,
        getFriendsRequestSent: action.payload,
      };
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.payload,
      };
    case LIST_OF_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_All_FRIENDS:
      return {
        ...state,
        getAllFriends: action.payload,
      };
    default:
      return state;
  }
};
