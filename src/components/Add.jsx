import React from "react";
import "./Add.css";
import addIcon from "../assets/add-icon.svg";

function Add() {
  return (
    <div className="add-btn">
      <img src={addIcon} alt="" />
      <h4>Add another</h4>
    </div>
  );
}

export default Add;
