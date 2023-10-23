import React from "react";
import DropDownComp from "../Home/DropDownComp";
import { Link } from "react-router-dom";

import userImage from "../../images/user-alt-1-svgrepo-com.svg";
import UserComponent from "./UserComponent";
import PaginationComponent from "../utils/PaginationComponent";
import FriendRequestSentHook from "../../custom-hooks/friend/FriendRequestSentHook";
import HeaderComponent from "./HeaderComponent";
import GetLoggedUserHook from "../../custom-hooks/auth/GetLoggedUserHook";
import LoadingIn from "../utils/LoadingIn";

const FriendRequestSentContainer = () => {
  const [loading, isPress, users, getUsersByPagination] =
  FriendRequestSentHook();
  let pageCount = localStorage.pageCount ? localStorage.pageCount : null;
  const [user] = GetLoggedUserHook();
  return (
    <div className="container">
      {loading && isPress ? <LoadingIn /> : null}
            <HeaderComponent user={user} />

      {users && users.length ? (
        <div className="my-2 fs-3 fw-bold text-center">
          {" "}
          الطلبات التى ارسلتها{" "}
        </div>
      ) : (
        <h2 className="text-center fw-bold"> لم يتم ارسال طلبات صداقه </h2>
      )}

      {users && users.length ? (
        <div className="users d-flex justify-content-center align-items-center gap-2 flex-wrap">
         
          {users &&
            users.map((user) => (
              <UserComponent key={user._id} user={user} isSendRequest={true} />
            ))}
        </div>
      ) : null}

      {pageCount && pageCount > 1 ? (
        <div className="d-flex justify-content-center">
          <PaginationComponent
            pageCount={pageCount}
            onPress={getUsersByPagination}
          />
        </div>
      ) : null}
    </div>
  );
};

export default FriendRequestSentContainer;
