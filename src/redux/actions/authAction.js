import { useInsertData } from "../../hooks/useInsertData";
import { REGISTER, LOGIN } from "../type";

export const register = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/register", data);
    dispatch({
      type: REGISTER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: REGISTER,
      payload: err.response,
    });
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/login", data);
    dispatch({
      type: LOGIN,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: LOGIN,
      payload: err.response,
    });
  }
};
