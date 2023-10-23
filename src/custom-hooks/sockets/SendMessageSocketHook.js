import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myId, socket } from "../../main";
import { getChat } from "../../redux/actions/chatAction";
import { useDispatch } from "react-redux";
import sound from "../../images/static/sound/discord-notification-fx.wav";

const SendMessageSocketHook = () => {
  const chatId = useParams().chatId;

  if (chatId) {
    socket.emit("joinChat", chatId);
  }

  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const handleChangeContent = (e) => setContent(e.target.value);

  const data = {
    sender: myId,
    content,
    chatId,
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", data);
    setContent("");
    const sendBtn = document.querySelector(".send-btn");
    const image = sendBtn.querySelector("img");
    const spinner = sendBtn.querySelector(".send-spinner");
    image.classList.add("d-none");
    spinner.classList.remove("d-none");
  };

  // show message
  useEffect(() => {
    socket.on("sendMessageSuccessfully", async () => {
      // to sure that i in correct room
      if (window.location.pathname.split("/")[3] === chatId) {
        await dispatch(getChat(chatId));
        // set scroll top in chat
        if (document.querySelector(".messages")) {
          document
            .querySelector(".messages")
            .scrollTo({ top: 500000, behavior: "smooth" });
        }

        // remove animation
        const sendBtn = document.querySelector(".send-btn");
        const image = sendBtn.querySelector("img");
        const spinner = sendBtn.querySelector(".send-spinner");
        image.classList.remove("d-none");
        spinner.classList.add("d-none");
      }
    });
  }, []);

  // apply ring
  useEffect(() => {
    socket.on("applyRing", async () => {
      if (window.location.pathname.split("/")[3] === chatId) {
        await dispatch(getChat(chatId));
      }
      await new Audio(sound).play();
    });
  }, []);

  return [content, handleChangeContent, handleSendMessage];
};

export default SendMessageSocketHook;
