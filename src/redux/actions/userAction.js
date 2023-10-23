import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { UPDATE_USER_INFO } from "../type";

export const updateUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/updateUserInfo`, data);
    dispatch({
      type: UPDATE_USER_INFO,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_USER_INFO,
      payload: err.response,
    });
  }
};