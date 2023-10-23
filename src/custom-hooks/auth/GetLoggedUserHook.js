import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../redux/actions/friendsAction";

const GetLoggedUserHook = () => {
  const dispatch = useDispatch();
  const run = async () => {
    await dispatch(getLoggedUser());
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.auth.user);

  let user = [];
  if (response && response.status === 200) {
    user = response.data.data;
  }

  return [user];
};

export default GetLoggedUserHook;
