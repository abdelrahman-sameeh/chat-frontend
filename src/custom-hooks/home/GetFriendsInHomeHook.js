import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFriends } from "../../redux/actions/friendsAction";
import { useParams } from "react-router-dom";

const GetFriendsInHomeHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const friendId = useParams().friendId;

  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getAllFriends());
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.friend.getAllFriends);

  let friends = [];
  let friend = {};

  if (response && response.status === 200) {
    friends = response.data.data;

    friend = friends.filter((item) => item._id === friendId)[0];
  }

  return [loading, isPress, friends, friend];
};

export default GetFriendsInHomeHook;
