import React from "react";
import { Link } from "react-router-dom";
import friends from "../../images/friends-svgrepo-com.svg";
import addFriend from "../../images/group-add-svgrepo-com.svg";
import group from "../../images/group-svgrepo-com.svg";
import logout from "../../images/logout-2-svgrepo-com.svg";
import home from "../../images/icons8-home-48.png";
import setting from "../../images/icons8-setting-50.png";

const DropDownComp = () => {
  const setPageCount_1 = () => (localStorage.pageCount = 1);
  return (
    <div className={`drop-down`}>
      <ul>
        <li>
          <Link className="pb-1" onClick={setPageCount_1} to="/">
            الصفحة الريسية
            <img
              className="p-1"
              style={{ width: "30px", height: "30px" }}
              src={home}
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link
            className="pb-1 requestsReceived"
            onClick={setPageCount_1}
            to="/friendRequestReceived"
          >
            طلبات الصداقة المرسلة
            <img className="p-1" src={group} alt="" />
          </Link>
        </li>
        <li>
          <Link
            className="pb-1"
            onClick={setPageCount_1}
            to="/friendRequestSent"
          >
            الطلبات التى ارسلتها
            <img className="p-1" src={group} alt="" />
          </Link>
        </li>
        <li>
          <Link
            className="pb-1"
            onClick={setPageCount_1}
            to="/usersYouCanKnown"
          >
            اكتشف اصدقاء جدد
            <img className="p-1" src={addFriend} alt="" />
          </Link>
        </li>
        <li>
          <Link className="pb-1" onClick={setPageCount_1} to="/friends">
            الاصدقاء
            <img className="p-1" src={friends} alt="" />
          </Link>
        </li>
        <li>
          <Link className="pb-1" onClick={setPageCount_1} to="/onlineFriends">
            نشط الان
            <img className="p-1" src={friends} alt="" />
          </Link>{" "}
        </li>
        <li>
          <Link className="pb-1" onClick={setPageCount_1} to="/setting">
            الاعدادات
            <img
              className="p-1"
              style={{ width: "30px", height: "30px" }}
              src={setting}
              alt=""
            />
          </Link>{" "}
        </li>
        <li>
          <Link
            className="pb-1"
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            to="/"
          >
            تسجيل الخروج
            <img className="p-1" src={logout} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownComp;
