import React from "react";

import AsiaTemple from "../assets/images/arena/AsianTemple.jpg"
import  Coliseum from "../assets/images/arena/Coliseum.jpg"
import Egypt from "../assets/images/arena/Egypt2.jpg"
import "./here.css";

export default function ArenaSlider () {
    return (
        
        <div className="marque marque-content ">
              
        <img
        src={AsiaTemple}
        alt="rook"/>
        <img
        src={Coliseum}
        alt="rook"/>
        <img
        src={Egypt}
        alt="rook"/>
         <img
        src={AsiaTemple}
        alt="rook"/>
        <img
        src={Coliseum}
        alt="rook"/>
        <img
        src={Egypt}
        alt="rook"/>
        
       
    
</div>

    )
}