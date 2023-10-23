import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../../redux/actions/friendsAction";

const FriendsHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  // get list of friend request received
  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getFriends(`page=1&limit=4`));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const getUsersByPagination = async (num) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getFriends(`page=${num}&limit=4`));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.friend.friends);

  let users = [];
  if (response && response.status === 200) {
    users = response.data.data;
    localStorage.pageCount = response.data.pageCount;
  }

  return [loading, isPress, users, getUsersByPagination];
};

export default FriendsHook;
