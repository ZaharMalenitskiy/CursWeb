import React from "react";
import "./Popup.css";

function Popup({ message, visible }) {
  return (
    <div className={`popup ${visible ? "" : "hidden"}`}>
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Popup;
