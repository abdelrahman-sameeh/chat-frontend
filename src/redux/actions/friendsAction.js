import { useGetAllData } from "../../hooks/useGetData";
import {
  GET_FRIENDS_REQUESTS_RECEIVED,
  GET_FRIENDS_REQUESTS_SENT,
  GET_FRIENDS,
  LIST_OF_USERS,
  GET_LOGGED_USER,
  GET_All_FRIENDS
} from "../type";

export const getFriendsRequestReceived = (queryString='') => async (dispatch) => {
  try {
    const response = await useGetAllData(
      `/api/v1/friendRequestReceived?${queryString}`
    );
    dispatch({
      type: GET_FRIENDS_REQUESTS_RECEIVED,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_FRIENDS_REQUESTS_RECEIVED,
      payload: err.response,
    });
  }
};

export const getFriendsRequestSent = (queryString) => async (dispatch) => {
  try {
    const response = await useGetAllData(
      `/api/v1/friendRequestSent?${queryString}`
    );
    dispatch({
      type: GET_FRIENDS_REQUESTS_SENT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_FRIENDS_REQUESTS_SENT,
      payload: err.response,
    });
  }
};

export const getFriends = (queryString='') => async (dispatch) => {
  try {
    const response = await useGetAllData(`/api/v1/friends?${queryString}`);
    dispatch({
      type: GET_FRIENDS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_FRIENDS,
      payload: err.response,
    });
  }
};

export const getListOfUsers = (queryString='') => async (dispatch) => {
  try {
    const response = await useGetAllData(`/api/v1/listOfUsers?${queryString}`);
    dispatch({
      type: LIST_OF_USERS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: LIST_OF_USERS,
      payload: err.response,
    });
  }
};


export const getLoggedUser = () => async (dispatch) => {
  try {
    const response = await useGetAllData(`/api/v1/user`);
    dispatch({
      type: GET_LOGGED_USER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_LOGGED_USER,
      payload: err.response,
    });
  }
};


export const getAllFriends = () => async (dispatch) => {
  try {
    const response = await useGetAllData(`/api/v1/getAllFriends`);
    dispatch({
      type: GET_All_FRIENDS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_All_FRIENDS,
      payload: err.response,
    });
  }
};