import React from "react";
import "../App.css";

function Popup({ data, position }) {
  if (!data) {
    // If data is not available yet, return null or a loading indicator
    return null;
  }
  console.log(position.x);
  // Calculate the position for the popup based on the click coordinates
  const popupStyle = {
    position: "absolute",
    top: `${position.y}px`,
    left: position.y > 800 ? `${position.x}px` : `${position.x-150}px`,
    background: 'white',
  };

  return (
    <div className="popup" style={popupStyle}>
      <p style={{ fontWeight: "bold" }}>{data.word}</p>
      {data.meanings && data.meanings[0] && data.meanings[0].definitions && (
        <>
          <span>Definition: </span>
          <span>{data.meanings[0].definitions[0].definition}</span>
        </>
      )}
    </div>
  );
}

export default Popup;