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
        <div className=" ">
            <div className="marque marque-content flex animate-marque">
              
                    <React.Fragment key={6} >
                        <img
                        className='max-h-[200px] max-w-[250px]'
                        src={king}
                        alt="rook"/>
                        <img
                        className='max-h-[200px] max-w-[250px]'
                        src={Queen}
                        alt="rook"/>
                        <img
                        className='max-h-[200px] max-w-[250px]'
                        src={pawn}
                        alt="rook"/>
                        <img
                        className='max-h-[200px] max-w-[250px]'
                        src={Rook}
                        alt="rook"/>
                        <img
                        className='max-h-[200px] max-w-[250px]'
                        src={king}
                        alt="rook"/>
                        <img
                        className='max-h-[200px] max-w-[250px]'
                        src={knight}
                        alt="rook"/>
                    </React.Fragment>
             
            </div>
        </div>
    )
}