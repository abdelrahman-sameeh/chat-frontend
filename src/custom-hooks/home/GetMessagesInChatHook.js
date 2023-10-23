import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChat } from "../../redux/actions/chatAction";

const GetMessagesInChatHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const chatId = useParams().chatId;

  const dispatch = useDispatch();
  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getChat(chatId));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const handleChangeChat = async (id) => {
    if (id != chatId) {
      setLoading(true);
      setIsPress(true);
      await dispatch(getChat(id));
      setLoading(false);
      setIsPress(false);
    }
  };

  const response = useSelector((state) => state.chat.getChat);

  let messages = [];

  if (response && response.status === 200) {
    messages = response.data.data;
  }

  return [loading, isPress, messages, handleChangeChat];
};

export default GetMessagesInChatHook;
