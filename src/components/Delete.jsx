import React from "react";
import "./Delete.css";
import deleteIcon from "../assets/delete-icon.svg";

function Delete({ remove }) {
  return (
    <div
      className="delete-btn"
      onClick={() => {
        remove();
      }}
    >
      <img src={deleteIcon} alt="-" />
      <h3>Delete</h3>
    </div>
  );
}

export default Delete;
