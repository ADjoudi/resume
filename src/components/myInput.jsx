import React, { useState } from "react";
import "./myInput.css";

function Input({ id = "input", label = "input", handleInfoChange }) {
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
        onFocus={addLabelAnimation}
        onBlur={handleLabelAnimation}
        onChange={(e) => handleInfoChange(e)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
export default Input;
