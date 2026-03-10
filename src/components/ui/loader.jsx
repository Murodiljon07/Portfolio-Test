import React from "react";
import "./loader.css";

function Loader3D() {
  return (
    <div className="loader-container">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default Loader3D;
