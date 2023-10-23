import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFriendsRequestSent } from '../../redux/actions/friendsAction';

const FriendRequestSentHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  // get list of friend request received
  const run = async () =>{
    setLoading(true);
    setIsPress(true);
    await dispatch(getFriendsRequestSent(`page=1&limit=4`));
    setLoading(false);
    setIsPress(false);
  }

  useEffect(() => {
    run();
  }, []);

  const getUsersByPagination = async (num) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getFriendsRequestSent(`page=${num}&limit=4`));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector(
    (state) => state.friend.getFriendsRequestSent
  );

  let users = [];
  if (response && response.status === 200) {
    users = response.data.data;
    localStorage.pageCount = response.data.pageCount;
  }

  return [loading, isPress, users, getUsersByPagination];
}

export default FriendRequestSentHook