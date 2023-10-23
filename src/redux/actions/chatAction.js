import { useGetAllData } from "../../hooks/useGetData";
import { GET_CHAT } from "../type";

export const getChat = (chatId) => async (dispatch) => {
  try {
    const response = await useGetAllData(`/api/v1/chat/${chatId}`);
    dispatch({
      type: GET_CHAT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_CHAT,
      payload: err.response,
    });
  }
};
