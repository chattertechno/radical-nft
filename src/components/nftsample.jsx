import React from "react";

import Rook from "../assets/images/rook.png"
import  Queen from "../assets/images/queen.png"
import pawn from "../assets/images/pawn.png"
import king from "../assets/images/King1.png"
import knight from "../assets/images/Knight.png"
import "./here.css";


export default function Nftsample() {
    return (
       
            <div className="marque marque-content ">
              
                        <img
                        src={king}
                        alt=""/>
                        <img
                        src={Queen}
                        alt=""/>
                        <img
                        src={pawn}
                        alt=""/>
                        <img
                        src={Rook}
                        alt=""/>
                        <img
                        src={king}
                        alt=""/>
                        <img
                        src={knight}
                        alt=""/>
                    
            </div>
       
    )
}