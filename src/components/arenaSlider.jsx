import React from "react";

import AsiaTemple from "../assets/images/arena/AsianTemple.jpg";
import Coliseum from "../assets/images/arena/Coliseum.jpg";
import Egypt from "../assets/images/arena/Egypt2.jpg";
import "./arena.css";

export default function ArenaSlider() {
  return (
    <div className="marquee">
      <div className="marquee-content">
        <div className="marquee-item"> 
          <img src={AsiaTemple} alt="rook" />
        </div>
        <div className="marquee-item">
          <img src={Coliseum} alt="rook" />
        </div>
        <div className="marquee-item">
          <img src={Egypt} alt="rook" />
        </div>
        <div className="marquee-item"> 
          <img src={AsiaTemple} alt="rook" />
        </div>
        <div className="marquee-item">
          <img src={Coliseum} alt="rook" />
        </div>
        <div className="marquee-item">
          <img src={Egypt} alt="rook" />
        </div>
      </div>
    </div>
   
  );
}
