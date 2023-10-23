import React from "react";
import userImage from "../../images/user-alt-1-svgrepo-com.svg";
import { Link } from "react-router-dom";
import chatIcon from "../../images/chat-round-svgrepo-com.svg";
import addIcon from "../../images/group-add-svgrepo-com.svg";
import AddFriendSocketHook from "../../custom-hooks/sockets/AddFriendSocketHook";
import CancelFriendRequestSocketHook from "../../custom-hooks/sockets/CancelFriendRequestSocketHook";
import AcceptFriendRequestSocketHook from "../../custom-hooks/sockets/AcceptFriendRequestSocketHook";
import RemoveFromFriendsSocketHook from "../../custom-hooks/sockets/RemoveFromFriendsSocketHook";
import RejectFriendRequestSocketHook from "../../custom-hooks/sockets/RejectFriendRequestSocketHook";

const me = localStorage.user ? JSON.parse(localStorage.user) : null;

const UserComponent = ({
  user,
  isFriend,
  isReceivedRequest,
  notFriend,
  isSendRequest,
}) => {
  
  const chatId = user.friendsChatId ? user.friendsChatId[me._id] : null;

  const showSpinner = (e) => {
    const spinner = e.target.querySelector(".spinner-grow");
    if (spinner) {
      spinner.classList.add("active");
      spinner.classList.remove("d-none");
    }
  };

  const [handleAddFriend] = AddFriendSocketHook();
  const [handleCancelRequest] = CancelFriendRequestSocketHook();
  const [handleAcceptFriendRequest] = AcceptFriendRequestSocketHook();
  const [handleRemoveFriend] = RemoveFromFriendsSocketHook();
  const [handleRejectFriendRequest] = RejectFriendRequestSocketHook();

  return (
    <div
      style={{ backgroundColor: "var(--alt-color)" }}
      className="user rounded d-flex justify-content-between align-items-center gap-2 p-2"
    >
      <div
        className="image d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <img
          className="bg-light rounded-full"
          style={{ width: "80px", height: "80px" }}
          src={user.image}
          alt=""
        />
        <div className="name"> {user.name}</div>
      </div>

      <div className="details d-flex flex-column align-items-end gap-2">
        <div className="controls d-flex flex-wrap gap-1">
          {isFriend && (
            <Link
              to={`/${user._id}/chat/${chatId}`}
              className="btn btn-primary d-flex align-items-center gap-1"
            >
              بدأ محادثة
              <img
                src={chatIcon}
                style={{ width: "30px", height: "30px", filter: "invert(1)" }}
                className="me-1"
                alt=""
              />
            </Link>
          )}
          {notFriend && (
            <button
              onClick={(e) => {
                showSpinner(e);
                handleAddFriend(user._id);
              }}
              className="btn btn-primary d-flex align-items-center gap-1"
            >
              ارسال طلب صداقة
              <img
                src={addIcon}
                style={{ width: "30px", height: "30px", filter: "invert(1)" }}
                className="me-1"
                alt=""
              />
              <div
                className={`spinner-grow spinner-${user._id} d-none`}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </button>
          )}
          {isFriend && (
            <button
              onClick={(e) => {
                showSpinner(e);
                handleRemoveFriend(user._id);
              }}
              className="btn btn-danger d-flex align-items-center gap-1"
            >
              حذف من الاصدقاء ✖
              <div
                className={`spinner-grow spinner-${user._id} d-none`}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </button>
          )}
          {isSendRequest && (
            <button
              onClick={(e) => {
                showSpinner(e);
                handleCancelRequest(user._id);
              }}
              className="btn btn-primary d-flex align-items-center gap-1"
            >
              الغاء طلب الصداقة 🔙
              <div
                className={`spinner-grow spinner-${user._id} d-none`}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </button>
          )}
          {isReceivedRequest && (
            <>
              <button
                onClick={(e) => {
                  showSpinner(e);

                  handleAcceptFriendRequest(user._id);
                }}
                className="btn btn-success d-flex align-items-center gap-1"
              >
                قبول طلب الصداقة ✔
                <div
                  className={`spinner-grow spinner-${user._id} d-none`}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </button>
              <button
                onClick={(e) => {
                  showSpinner(e);
                  handleRejectFriendRequest(user._id);
                }}
                className="btn btn-danger d-flex align-items-center gap-1"
              >
                حذف طلب الصداقة x
                <div
                  className={`spinner-grow spinner-${user._id} d-none`}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
