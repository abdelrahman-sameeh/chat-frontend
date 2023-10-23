import React from "react";
import userImage from "../../images/user-alt-1-svgrepo-com.svg";
import UserComponent from "./UserComponent";
import PaginationComponent from "../utils/PaginationComponent";
import FriendsCanKnownHook from "../../custom-hooks/friend/FriendsCanKnownHook";
import GetLoggedUserHook from "../../custom-hooks/auth/GetLoggedUserHook";
import HeaderComponent from "./HeaderComponent";
import LoadingIn from "../utils/LoadingIn";

const FriendsYouKnownContainer = () => {
  const [loading, isPress, users, getUsersByPagination] = FriendsCanKnownHook();
  let pageCount = localStorage.pageCount ? localStorage.pageCount : null;
  
  const [user] = GetLoggedUserHook();
  
  return (
    <div className="container">
      {loading && isPress ? <LoadingIn /> : null}
      <HeaderComponent user={user} />

      {users && users.length ? (
        <div className="my-2 fs-3 fw-bold text-center "> اشخاص قد تعرفهم </div>
      ) : (
        <h2 className="text-center fw-bold"> لا يوجد اشخاص </h2>
      )}

      {users && users.length ? (
        
        <div className="users d-flex justify-content-center align-items-center gap-2 flex-wrap">
          
          {users &&
            users.map((user) => (
              <UserComponent key={user._id} user={user} notFriend={true} />
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

export default FriendsYouKnownContainer;
