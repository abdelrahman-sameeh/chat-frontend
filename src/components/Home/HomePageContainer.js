import { Col, Row, Spinner } from "react-bootstrap";
import DropDownComp from "./DropDownComp";
import React from "react";

import userImage from "../../images/user-alt-1-svgrepo-com.svg";
import sendBtn from "../../images/send-alt-1-svgrepo-com.svg";

import { Link, useParams } from "react-router-dom";
import GetFriendsInHomeHook from "../../custom-hooks/home/GetFriendsInHomeHook";
import GetLoggedUserHook from "../../custom-hooks/auth/GetLoggedUserHook";
import GetMessagesInChatHook from "../../custom-hooks/home/GetMessagesInChatHook";
import SendMessageSocketHook from "../../custom-hooks/sockets/SendMessageSocketHook";
import LoadingIn from "../utils/LoadingIn";

const HomePageContainer = () => {
  const chatId = useParams().chatId;

  const [friendLoading, friendIsPress, friends, friend] = GetFriendsInHomeHook();
  const [user] = GetLoggedUserHook();
  let userChatId = {};
  if (user) {
    userChatId = user.friendsChatId;
  }
  const [chatLoading, chatIsPress, messages, handleChangeChat] =
    GetMessagesInChatHook();

  const [content, handleChangeContent, handleSendMessage] =
    SendMessageSocketHook();

  return (
    <div className="home">
      <Row className="p-0 m-0">
        <Col className="friends pt-3 mb-3 border-bottom" sm="5" md="4" lg="3">
          <div className="d-flex px-3 justify-content-between align-items-center border-bottom pb-2">
            <div className=" image rounded-full user-image d-flex gap-1 align-items-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "40px",
                  height: "40px",
                }}
                src={user && user.image ? user.image : userImage}
                alt=""
                className="bg-light"
              />
              <span>{user.name}</span>
            </div>
            <div
              className="rtl position-relative flex-1"
              style={{ height: "30px" }}
            >
              <span className="notification"></span>
              <div
                className="toggle-drop-down fs-4 pointer"
                style={{ userSelect: "none", lineHeight: "50%" }}
              >
                ...
              </div>
              <DropDownComp />
            </div>
          </div>

          <div className="people position-relative">
            {friendLoading&&friendIsPress? <LoadingIn /> : null}
            {friends && friends.length && userChatId ? (
              friends.map((item) => {
                let friendChatId = userChatId[item._id];
                return (
                  <Link
                    onClick={() => handleChangeChat(friendChatId)}
                    key={item._id}
                    to={`/${item._id}/chat/${friendChatId}`}
                    className="px-3 d-flex align-items-center justify-content-between"
                  >
                    <div className="user-image image bg-light rounded-full">
                      <img
                        src={item.image}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                          backgroundColor: "white",
                        }}
                        alt=""
                      />
                    </div>

                    <div className="name"> {item.name} </div>
                  </Link>
                );
              })
            ) : (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "400px" }}
              >
                <Link
                  to="/usersYouCanKnown"
                  className="text-center btn btn-primary"
                >
                  {" "}
                  اكتشف اصدقاء جدد{" "}
                </Link>
              </div>
            )}
          </div>


        </Col>
        <Col
          className={`chat-messages ms-auto ${
            chatId ? "align-items-start" : null
          }`}
          sm="7"
          md="8"
          lg="9"
        >
          {!chatId ? (
            <div className="text-center fs-4 fw-bold"> ابدأ الدردشة </div>
          ) : (
            <div className="chat w-100 position-relative">
              {chatLoading && chatIsPress ? <LoadingIn /> : null}
              <div className="between border-bottom w-100 px-2 py-2">
                <div className="number">
                  {" "}
                  {friend && friend.phone
                    ? friend.phone
                    : "unknown number"}{" "}
                </div>

                <div className="d-flex align-items-center gap-1 ">
                  <div className="name">
                    {" "}
                    {friend && friend.name ? friend.name : "unknown"}{" "}
                  </div>
                  <div className="user-image image bg-light rounded-full">
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "contain",
                        backgroundColor: "white",
                      }}
                      src={friend && friend.image ? friend.image : userImage}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="messages pt-2">
                {user && messages && messages.length
                  ? messages.map((msg) => {
                      const isFriend = user._id === msg.sender;
                      return (
                        <div
                          key={msg._id}
                          className={`message d-flex justify-content-${
                            isFriend ? "end" : "start"
                          }`}
                        >
                          <div className={`${isFriend ? "other" : "me"}`}>
                            {msg.content}
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>

              <div className=" position-absolute bottom-0 w-100">
                <form className="send-message-form d-flex w-100">
                  <input
                    value={content}
                    onChange={handleChangeContent}
                    className="form-control rtl"
                    style={{
                      borderRadius: "0px 0px 0px 6px",
                    }}
                    type="text"
                    placeholder="اكتب رسالتك"
                  />
                  <button
                    onClick={handleSendMessage}
                    style={{
                      borderRadius: "0px 0px 6px 0px",
                    }}
                    className="btn btn-primary send-btn"
                  >
                    <img
                      src={sendBtn}
                      style={{ width: "30px", filter: "invert(1)" }}
                      alt=""
                    />
                    <Spinner
                      className="send-spinner d-none"
                      animation="grow"
                      variant="light"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </button>
                </form>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default HomePageContainer;
