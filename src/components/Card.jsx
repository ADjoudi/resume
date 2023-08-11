import React from "react";
import "./Card.css";
import Input from "./myInput.jsx";
import arrow from "../assets/arrow.svg";
import Highlights from "./Highlights";
import Add from "./Add";

function Card({
  prefix,
  index,
  title,
  location,
  start,
  end,
  highlights,
  handleInfoChange,
  handleHighlightChange,
  addHighlight,
}) {
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
          id={prefix + title}
          label={title}
          handleInfoChange={(e) => handleInfoChange(e, index)}
        />
        <Input
          id={prefix + location}
          label={location}
          handleInfoChange={(e) => handleInfoChange(e, index)}
        />
        <div className="years">
          <Input
            id={prefix + start}
            label={start}
            handleInfoChange={(e) => handleInfoChange(e, index)}
          />
          <img src={arrow} alt="->" />
          <Input
            id={prefix + end}
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
