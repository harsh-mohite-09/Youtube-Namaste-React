import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appendChat, clearChat } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveChatData = useSelector((store) => store.chat.liveChats);
  const [myMessage, setMyMessage] = useState("");
  let id = 0;

  useEffect(() => {
    const myInterval = setInterval(() => {
      //API Polling
      id++;
      // console.log("API Polling");
      dispatch(
        appendChat({
          name: "User Name",
          message: "Hi. This is a live chat " + id,
        })
      );
    }, 2000);

    return () => {
      clearInterval(myInterval);
      dispatch(clearChat());
    };
  }, []);
  return (
    <div className="h-[500px] flex flex-col">
      <div className="h-[90%] p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse">
        {liveChatData.map(({ name, message }, i) => (
          <ChatMessage name={name} message={message} key={i} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <input
          type="text"
          value={myMessage}
          className="border border-black p-2 flex-grow rounded-l-lg"
          onChange={(e) => setMyMessage(e.target.value)}
          placeholder="Type something..."
        />
        <button
          onClick={() => {
            if (myMessage === "") return;
            dispatch(
              appendChat({
                name: "Harsh Mohite",
                message: myMessage,
              })
            );
            setMyMessage("");
          }}
          className="p-2 border border-black bg-gray-100 hover:bg-gray-300 border-l-0 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
