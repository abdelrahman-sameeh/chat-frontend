import React, { useEffect } from "react";
import { myId, socket } from "../../main";
import { useDispatch } from "react-redux";
import { getFriends } from "../../redux/actions/friendsAction";

const RemoveFromFriendsSocketHook = () => {
  const dispatch = useDispatch();
  const handleRemoveFromFriends = (friendId) => {
    if (myId) {
      // ask user before delete
      const question = window.confirm("هل انت متأكد من الحذف");
      if (question) {
        socket.emit("removeFromFriends", myId, friendId);
      }
    }
  };

  useEffect(() => {
    socket.on("removedFriendSuccessfully", () => {
      // turn off loading in button
      const spinnerElm = document.querySelector(`.spinner-grow.active`);
      if (spinnerElm) {
        spinnerElm.classList.add("d-none");
        spinnerElm.classList.remove("active");
      }
      // render
      dispatch(
        getFriends(
          `limit=4&page=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  useEffect(() => {
    socket.on("removedFriendNotification", () => {
      dispatch(
        getFriends(
          `limit=4&page=${
            +localStorage.pageCount > 1 ? +localStorage.pageCount - 1 : 1
          }`
        )
      );
    });
  }, []);

  return [handleRemoveFromFriends];
};

export default RemoveFromFriendsSocketHook;
