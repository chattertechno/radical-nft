import React from "react";

import Rook from "../assets/images/rook.png";
import Queen from "../assets/images/queen.png";
import pawn from "../assets/images/pawn.png";
import king from "../assets/images/King1.png";
//import knight from "../assets/images/Knight.png";
import bishop from "../assets/images/Bishop1.png";
import newKing from "../assets/images/king.png";
import newQueen from "../assets/images/Queen1.png";
import newRook from "../assets/images/Rook3.png";
import newKnight from "../assets/images/Knight1.png";
import newBishop from "../assets/images/Bishop2.png";
import newPawn from "../assets/images/Pawn1.png";
import "./new.css";



export default function Nftsample() {
  return (
    <div className="relative flex overflow-x-hidden  somtn ">
      <div className="py-12 animate-marquee whitespace-nowrap">
        <img className="contento" src={Rook} alt="" />
        <img className="contento" src={Queen} alt="" />
        <img className="contento" src={pawn} alt="" />
        <img className="contento" src={king} alt="" />
        <img className="contento" src={bishop} alt="" />
        <img className="contento" src={newKing} alt="" />
        <img className="contento" src={newKnight} alt="" />
        <img className="contento" src={newQueen} alt="" />
        <img className="contento" src={newRook} alt="" />
        <img className="contento" src={newBishop} alt="" />
        <img className="contento" src={newPawn} alt="" />
      </div>
      <div className="absolute top-0 py-12 animate-marquee-2 whitespace-nowrap">
      <img className="contento" src={Rook} alt="" />
        <img className="contento" src={Queen} alt="" />
        <img className="contento" src={pawn} alt="" />
        <img className="contento" src={king} alt="" />
        <img className="contento" src={bishop} alt="" />
        <img className="contento" src={newKing} alt="" />
        <img className="contento" src={newKnight} alt="" />
        <img className="contento" src={newQueen} alt="" />
        <img className="contento" src={newRook} alt="" />
        <img className="contento" src={newBishop} alt="" />
        <img className="contento" src={newPawn} alt="" />
      </div>
    </div>

    // <div className="overflow-x-hidden">
    //     <div className="holer animate-marquee">
    //     {REPEAT_ARR.map(ind => (
    //       <React.Fragment key={ind}>
    //          <img className="contento" src={Rook} alt=""/>
    //          <img className="contento" src={Queen} alt=""/>
    //          <img className="contento" src={pawn} alt=""/>
    //          <img className="contento" src={king} alt=""/>
    //          <img className="contento" src={bishop} alt=""/>
    //          <img className="contento" src={newKing} alt=""/>
    //          <img className="contento" src={newKnight} alt=""/>
    //          <img className="contento" src={newQueen} alt=""/>
    //          <img className="contento" src={newRook} alt=""/>
    //          <img className="contento" src={newBishop} alt=""/>
    //          <img className="contento" src={newPawn} alt=""/>
    //         {imagelia.map((images) => {
    //       return (

    //           <img className="contento" src={images} alt=""/>

    //       )
    //     })}
    //       </React.Fragment>
    //     ))}
    //     </div>
    // </div>
  );
}
