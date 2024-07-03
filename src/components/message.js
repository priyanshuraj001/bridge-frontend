import React from "react";

const getClassNames = (type) => {
  switch (type) {
    case "red":
      return "bg-red-100 border-red-400 text-red-700";
    case "green":
      return "bg-green-100 border-green-400 text-green-700";
    default:
      return "";
  }
};

const Message = ({ type, message }) => {
  const classNames = getClassNames(type);

  return (
    <div className={`mt-4 p-2 ${classNames} rounded`}>
      <h2 className="font-bold">{type === "red" ? "Error" : "Message"}</h2>
      <p className="text-black">{message}</p>
    </div>
  );
};

export default Message;
