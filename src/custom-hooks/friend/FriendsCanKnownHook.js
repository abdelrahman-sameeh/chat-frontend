import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListOfUsers,
  getLoggedUser,
} from "../../redux/actions/friendsAction";

const FriendsCanKnownHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  // get list of friend request received
  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfUsers(`page=1&limit=4`));
    await dispatch(getLoggedUser());
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const getUsersByPagination = async (num) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfUsers(`page=${num}&limit=4`));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.friend.users);

  let users = [];

  if (response && response.status === 200) {
    users = response.data.data;
    localStorage.pageCount = response.data.pagination.numberOfPages;
  }

  return [loading, isPress, users, getUsersByPagination];
};

export default FriendsCanKnownHook;
