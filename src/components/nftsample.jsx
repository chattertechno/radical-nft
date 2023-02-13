import React from "react";

import Rook from "../assets/images/rook.png"
import  Queen from "../assets/images/queen.png"
import pawn from "../assets/images/pawn.png"
import king from "../assets/images/King1.png"
import knight from "../assets/images/Knight.png"
import "./here.css";

const Repeat_ARR = Array.from(Array(2).keys());

export default function Nftsample() {
    return (
       
            <div className="marque marque-content ">
              
                    
                        <img
                        src={king}
                        alt="rook"/>
                        <img
                        src={Queen}
                        alt="rook"/>
                        <img
                        src={pawn}
                        alt="rook"/>
                        <img
                        src={Rook}
                        alt="rook"/>
                        <img
                        src={king}
                        alt="rook"/>
                        <img
                        src={knight}
                        alt="rook"/>
                    
             
            </div>
       
    )
}