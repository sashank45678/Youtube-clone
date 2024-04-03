import React from "react";

const ChatMessage = (props) => {
  return (
    <div>
    <div className="flex justify-items-center shadow-sm rounded-lg pt-3">
      <img className="w-12 h-9 rounded-lg"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiPLECpi51Hqe2-B7fMayCy4SJL2vbOxb2ucyVHqD_Q&s" alt="userimage" />
      <span className="font-bold pl-2">{props.name}</span>
      <span className="pl-2">{props.message}</span>
    </div>
    </div>
  );
};

export default ChatMessage;
