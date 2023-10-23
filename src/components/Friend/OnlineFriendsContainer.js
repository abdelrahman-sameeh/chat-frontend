import React from "react";
import DropDownComp from "../Home/DropDownComp";
import { Link } from "react-router-dom";
import userImage from "../../images/user-alt-1-svgrepo-com.svg";
import OnlineFriendsSocketHook from "../../custom-hooks/sockets/OnlineFriendsSocketHook";
import UserComponent from "./UserComponent";
import GetLoggedUserHook from "../../custom-hooks/auth/GetLoggedUserHook";
import HeaderComponent from "./HeaderComponent";

const OnlineFriendsContainer = () => {
  const [friends] = OnlineFriendsSocketHook();
  const [user] = GetLoggedUserHook();

  return (
    <div className="container">
      <HeaderComponent user={user} />

      {friends && friends.length ? (
        <div className="my-2 fs-3 fw-bold text-center "> نشط الان 🧨 </div>
      ) : (
        <h2 className="text-center fw-bold"> لا يوجد اشخاص 🙂</h2>
      )}

      {friends && friends.length ? (
        <div className="users d-flex justify-content-center align-items-center gap-2 flex-wrap">
          {friends &&
            friends.map((user) => (
              <UserComponent key={user._id} user={user} isFriend={true} />
            ))}
        </div>
      ) : null}
    </div>
  );
};

export default OnlineFriendsContainer;
