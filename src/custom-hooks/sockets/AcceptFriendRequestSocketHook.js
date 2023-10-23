import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { myId, socket } from "../../main";
import { notify } from "../utils/Notify";
import { getFriendsRequestReceived } from "../../redux/actions/friendsAction";

const AcceptFriendRequestSocketHook = () => {
  const dispatch = useDispatch();

  const handleAcceptFriendRequest = (friendId) => {
    if (myId) {
      socket.emit("acceptFriendRequest", myId, friendId);
    }
  };

  // render friendRequestReceived
  useEffect(() => {
    socket.on("acceptedSuccessfully", async () => {
      // turn off loading in button
      const spinnerElm = document.querySelector(`.spinner-grow.active`);
      if (spinnerElm) {
        spinnerElm.classList.add("d-none");
        spinnerElm.classList.remove("active");
      }
      // render
      await dispatch(
        getFriendsRequestReceived(
          `limit=4&page=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  // render friendRequestSent and send notify
  useEffect(() => {
    socket.on("sendAcceptedRequestNotification", async (me) => {
      await dispatch(
        getFriendsRequestReceived(
          `limit=4&page=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  return [handleAcceptFriendRequest];
};

export default AcceptFriendRequestSocketHook;
