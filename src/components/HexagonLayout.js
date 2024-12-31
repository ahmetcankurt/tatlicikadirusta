import React from "react";
import "./HexagonLayout.css";

const HexagonLayout = () => {
  return (
    <div className="hexagon_container">
      <div className="hexagon rotated" >
        <div className="hexagon_one_top "></div>
      </div>
      <div className="hexagon rotated">
        <div className="hexagon_two"></div>
        <div className="hexagon_two" style={{backgroundColor:'red'}}></div>
      </div>
      <div className="hexagon rotated">
        <div className="hexagon_one_bottom"></div>
      </div>
    </div>
  );
};

export default HexagonLayout;
