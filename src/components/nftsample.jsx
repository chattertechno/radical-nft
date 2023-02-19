import React, { useEffect } from "react";

import Rook from "../assets/images/rook.png";
import Queen from "../assets/images/queen.png";
import pawn from "../assets/images/pawn.png";
import king from "../assets/images/King1.png";
import knight from "../assets/images/Knight.png";
import bishop from "../assets/images/Bishop1.png"
import newKing from "../assets/images/king.png"
import newQueen from "../assets/images/Queen1.png"
import newRook from "../assets/images/Rook3.png"
import newKnight from "../assets/images/Knight1.png"
import newBishop from "../assets/images/Bishop2.png"
import newPawn from "../assets/images/Pawn1.png"
import "./here.css";

const imagelia = [Rook, Queen, pawn, king, knight, bishop, newKing, newKnight, newQueen, newRook, newBishop, newPawn]
let newImagelia = imagelia.sort(function() {
  return Math.random() - 0.5;
})
const REPEAT_ARR = Array.from(Array(1).keys());

export default function Nftsample() {
  useEffect(() => {
    console.log(newImagelia);
  }, [])
  return (
    <div className="marqueelo">
        <div className="marquee-contentlo">
        {REPEAT_ARR.map(ind => (
          <React.Fragment key={ind}>
            {newImagelia.map((images) => {
          return (
            <div className="marquee-itemlo">
              <img className="imagelo" src={images} alt=""/>
            </div>
          )
        })}
          </React.Fragment>
        ))}
        </div>
    </div>
   
  );
}
