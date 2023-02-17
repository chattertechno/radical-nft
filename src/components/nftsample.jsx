import React from "react";

import Rook from "../assets/images/rook.png";
import Queen from "../assets/images/queen.png";
import pawn from "../assets/images/pawn.png";
import king from "../assets/images/King1.png";
import knight from "../assets/images/Knight.png";
import "./arena.css";

const imagelia = [Rook, Queen, pawn, king, knight]

export default function Nftsample() {
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
        </div>
    </div>
    // <div className="marque marque-content ">
    //   <img src={king} alt="" />
    //   <img src={Queen} alt="" />
    //   <img src={pawn} alt="" />
    //   <img src={Rook} alt="" />
    //   <img src={king} alt="" />
    //   <img src={knight} alt="" />
    // </div>
  );
}
