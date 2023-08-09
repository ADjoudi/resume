import React, { useState } from "react";
import "./myInput.css";

function Input({ id = "input", name = "input" }) {
  const addLabelAnimation = (e) => {
    e.target.nextElementSibling.classList.add("label-up");
  };
  const handleLabelAnimation = (e) => {
    if (e.target.value.length <= 0) {
      e.target.nextElementSibling.classList.remove("label-up");
    }
  };
  return (
    <div className="input-container">
      <input
        id={id}
        name={name}
        onFocus={addLabelAnimation}
        onBlur={handleLabelAnimation}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
}
export default Input;
