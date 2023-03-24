import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-sm p-2">
      <div className="min-w-fit mr-2">
        <img
          className="rounded-full"
          src="https://yt4.ggpht.com/ytc/AL5GRJVjaTKCz_djLnxJ9VtM52YJru-l5-VAnvVr2w=s32-c-k-c0x00ffffff-no-rj"
          alt="user-icon"
        />
      </div>
      <div className="text-sm">
        <span className="text-gray-600 font-semibold">{name}</span>
        <span className="ml-2">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
