import React from "react";
import "./Card.css";
import Input from "./myInput.jsx";
import Add from "./Add.jsx";
import arrow from "../assets/arrow.svg";

function Card(props) {
  return (
    <div className="card">
      <Input id="degree" name="Degree" />
      <Input id="school" name="School" />
      <div className="years">
        <Input id="start" name="Start Year" />
        <img src={arrow} alt="->" />
        <Input id="end" name="End Year" />
      </div>
      <textarea />
      <Add />
    </div>
  );
}
export default Card;
