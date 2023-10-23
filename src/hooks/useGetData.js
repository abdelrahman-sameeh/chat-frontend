import {baseURL} from "../Api/BaseURL";

export const useGetData = async (url) => {
  const res = await baseURL.get(url);
  return res.data;
};

// get data with more details
export const useGetAllData = async (url) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const res = await baseURL.get(url, config);
  return res;
};
