import { baseURL } from "../Api/BaseURL";

export const useDeleteData = (url) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const res = baseURL.delete(url, config);
  return res;
};
