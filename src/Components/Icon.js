import React from "react";
import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";
const Icon = ({ user_choice }) => {
  switch (user_choice) {
    case "circle":
      return <FaRegCircle className="icon" />;
    case "cross":
      return <FaTimes className="icon" />;
    default:
      return <FaPen className="icon" />;
  }
  return <div></div>;
};
export default Icon;
