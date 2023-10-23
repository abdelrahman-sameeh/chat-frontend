import React, { useEffect } from "react";
import { myId, socket } from "../../main";
import { useDispatch } from "react-redux";
import {
  getFriendsRequestReceived,
  getFriendsRequestSent,
} from "../../redux/actions/friendsAction";

const CancelFriendRequestSocketHook = () => {
  const dispatch = useDispatch();

  const handleCancelRequest = (friendId) => {
    if (myId) {
      socket.emit("cancelRequest", myId, friendId);
    }
  };

  useEffect(() => {
    socket.on("canceledSuccessfully", async () => {
      // turn off loading in button
      const spinnerElm = document.querySelector(`.spinner-grow.active`);
      if (spinnerElm) {
        spinnerElm.classList.add("d-none");
        spinnerElm.classList.remove("active");
      }
      // render
      await dispatch(
        getFriendsRequestSent(
          `limit=4&pageCount=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  // render friendRequestsSent() For Friend User
  useEffect(() => {
    socket.on("renderFriendRequestsSentForFriendUser", async () => {
      await dispatch(
        getFriendsRequestReceived(
          `limit=4&pageCount=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  return [handleCancelRequest];
};

export default CancelFriendRequestSocketHook;
