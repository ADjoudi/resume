import React from "react";
import "./Card.css";
import Input from "./myInput.jsx";
import arrow from "../assets/arrow.svg";
import Highlights from "./Highlights";
import Add from "./Add";

function Card({
  index,
  labels,
  highlights,
  handleInfoChange,
  handleHighlightChange,
  addHighlight,
}) {
  const { title, location, start, end } = labels;
  const toggleDetails = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle("details");
  };
  return (
    <div className="card-container" key={index}>
      <header onClick={toggleDetails}>
        <h2>{title.length === 0 ? "------" : title}</h2>
      </header>
      <div className="card">
        <Input
          id={title.toLowerCase()}
          label={title}
          handleInfoChange={(e) => handleInfoChange(e, index)}
        />
        <Input
          id={location.toLowerCase()}
          label={location}
          handleInfoChange={(e) => handleInfoChange(e, index)}
        />
        <div className="years">
          <Input
            id="start"
            label={start}
            handleInfoChange={(e) => handleInfoChange(e, index)}
          />
          <img src={arrow} alt="->" />
          <Input
            id="end"
            label={end}
            handleInfoChange={(e) => handleInfoChange(e, index)}
          />
        </div>
        <Highlights
          highlights={highlights}
          handleHighlightChange={(e, highlightIndex) =>
            handleHighlightChange(e, index, highlightIndex)
          }
          addHighlight={(e) => addHighlight(e, index)}
        />
      </div>
    </div>
  );
}
export default Card;
