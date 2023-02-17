import React from "react";

import AsiaTemple from "../assets/images/arena/AsianTemple.jpg";
import Coliseum from "../assets/images/arena/Coliseum.jpg";
import Egypt from "../assets/images/arena/Egypt2.jpg";
import "./arena.css";
const imagelia = [AsiaTemple, Coliseum, Egypt, ]
const REPEAT_ARR = Array.from(Array(4).keys());
export default function ArenaSlider() {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {REPEAT_ARR.map(ind => (
          <React.Fragment key={ind}>
            {imagelia.map((images) => {
          return (
            <div className="marquee-item">
              <img className="image" src={images} alt=""/>
            </div>
          )
        })}
          </React.Fragment>
        ))}
       
      </div>
    </div>
   
  );
}
