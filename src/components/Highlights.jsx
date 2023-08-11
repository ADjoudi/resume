import React, { useState } from "react";
import Add from "./Add";
import "./Highlights.css";

function Highlights({ highlights, handleHighlightChange, addHighlight }) {
  return (
    <div className="highlights">
      {highlights.map((highlight, highlightIndex) => (
        <textarea
          key={highlightIndex}
          value={highlight}
          placeholder="Highlight, achievements or accomplishments "
          onChange={(e) => handleHighlightChange(e, highlightIndex)}
        />
      ))}
      <Add add={(e) => addHighlight(e)} />
    </div>
  );
}

export default Highlights;
