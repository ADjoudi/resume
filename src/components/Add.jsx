import React from "react";
import "./Add.css";
import addIcon from "../assets/add-icon.svg";

function Add({ add }) {
  return (
    <div
      className="add-btn"
      onClick={() => {
        add();
      }}
    >
      <img src={addIcon} alt="" />
      <h4>Add another</h4>
    </div>
  );
}

export default Add;
