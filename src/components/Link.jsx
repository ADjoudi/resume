import React from "react";
import "./Link.css";
import Input from "./myInput.jsx";

function Link({ index, link, handleInfoChange }) {
  if (!link) return null;
  return (
    <div className="link">
      <Input
        id={"label" + index}
        label="Label"
        value={link.label}
        handleInfoChange={handleInfoChange}
      />
      <Input
        id={"link" + index}
        label="Link"
        value={link.link}
        handleInfoChange={handleInfoChange}
      />
    </div>
  );
}
export default Link;
