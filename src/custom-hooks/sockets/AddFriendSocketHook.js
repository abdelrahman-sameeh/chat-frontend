import React, { useEffect } from "react";
import { myId, socket } from "../../main";
import {
  getFriendsRequestReceived,
  getListOfUsers,
} from "../../redux/actions/friendsAction";
import { useDispatch } from "react-redux";

const AddFriendSocketHook = () => {
  const dispatch = useDispatch();

  const handleAddFriend = (friendId) => {
    socket.emit("addFriend", myId, friendId);
  };

  useEffect(() => {
    socket.on("addFriendSuccessfully", async () => {
      // turn off loading in button
      const spinnerElm = document.querySelector(`.spinner-grow.active`);
      if (spinnerElm) {
        spinnerElm.classList.add("d-none");
        spinnerElm.classList.remove("active");
      }
      // render
      await dispatch(
        getListOfUsers(
          `limit=4&page=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  useEffect(() => {
    socket.on("sendRequestNotification", async () => {
      await dispatch(
        getFriendsRequestReceived(
          `limit=4&page=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  return [handleAddFriend];
};

export default AddFriendSocketHook;
