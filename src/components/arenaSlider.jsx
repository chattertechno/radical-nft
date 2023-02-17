import React from "react";

import AsiaTemple from "../assets/images/arena/AsianTemple.jpg";
import Coliseum from "../assets/images/arena/Coliseum.jpg";
import Egypt from "../assets/images/arena/Egypt2.jpg";
import "./arena.css";
const imagelia = [AsiaTemple, Coliseum, Egypt, Coliseum,  Egypt, AsiaTemple]
export default function ArenaSlider() {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {imagelia.map((images) => {
          return (
            <div className="marquee-item">
              <img className="image" src={images} alt=""/>
            </div>
          )
        })}
        {/* <div className="marquee-item"> 
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
        </div> */}
      </div>
    </div>
   
  );
}
