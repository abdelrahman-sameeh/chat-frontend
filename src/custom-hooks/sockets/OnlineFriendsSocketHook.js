import React, { useEffect, useState } from "react";
import { myId, socket } from "../../main";

const OnlineFriendsSocketHook = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setInterval(() => {
      socket.emit("getOnlineFriends", myId);
    }, 500);
  }, []);

  useEffect(() => {
    socket.on("returnOnlineFriends", (friends) => {
      setFriends(friends);
    });
  }, []);

  return [friends];
};

export default OnlineFriendsSocketHook;
