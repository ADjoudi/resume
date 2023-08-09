import React from "react";
import "./Link.css";
import Input from "./myInput.jsx";

function Link(props) {
  return (
    <div className="link">
      <Input id="label" name="Label" />
      <Input id="link" name="Link" />
    </div>
  );
}
export default Link;
