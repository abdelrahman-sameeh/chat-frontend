import React, { useEffect } from "react";
import { myId, socket } from "../../main";
import { useDispatch } from "react-redux";
import {
  getFriendsRequestReceived,
  getListOfUsers,
} from "../../redux/actions/friendsAction";

const RejectFriendRequestSocketHook = () => {
  const dispatch = useDispatch();

  const rejectFriendRequest = (friendId) => {
    if (window.confirm("هل انت متأكد من الحذف")) {
      if (myId) {
        socket.emit("rejectFriendRequest", myId, friendId);
      }
    }
  };

  useEffect(() => {
    socket.on("rejectRequestSuccessfully", () => {
      // turn off loading in button
      const spinnerElm = document.querySelector(`.spinner-grow.active`);
      if (spinnerElm) {
        spinnerElm.classList.add("d-none");
        spinnerElm.classList.remove("active");
      }
      // render
      dispatch(
        getFriendsRequestReceived(
          `limit=4&page=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  useEffect(() => {
    socket.on("rejectRequestNotification", () => {
      dispatch(
        getListOfUsers(
          `limit=4&page=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  return [rejectFriendRequest];
};

export default RejectFriendRequestSocketHook;
