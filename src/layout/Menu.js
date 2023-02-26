import React, { useState } from "react";
import Logonew from "../assets/images/logo.png"


const Menu = () => {
  const [state] = useState(false);
  return (
    <div className="menuwrapper">
      <div className="menu">
        <img src={Logonew} alt="Brainiac chess" height="auto" className="Logo" />
        {state === true
        }
        <li className="navbar-buttons"><a href="https://radical-chess.vercel.app/#home"><span >Home</span></a></li>
        <li className="navbar-buttons"><a href="https://dev-game.radicalchess.com/">Play</a></li>
        <div className="navbar-buttons"> <a href="https://radical-chess.vercel.app/#"><li>Features</li></a></div>
        <div className="navbar-buttons" ><a href="https://radical-chess.vercel.app/#tokenomics"><li>Roadmap</li></a></div>
        <div className="navbar-buttons" ><a href="https://radical-chess.vercel.app/#roadmap"><li>Whitepaper</li></a></div>
      </div>
    </div>
  )
}

export default Menu
