import React, { useState } from "react";
import Logonew from "../assets/images/logo.png"


const Menu = () => {
  const [state, setState] = useState(false);
  return (
    <div className="menuwrapper">
      <div className="menu">
        <img src={Logonew} alt="Radical Chess" height="auto" className="Logo" />
        {state === true
        }
        <li className="navbar-buttons"><a href="https://radicalchess.com/"><span >Home</span></a></li>
        <li className="navbar-buttons"><a href="https://game.radicalchess.com/">Play</a></li>
        <div className="navbar-buttons"> <a href="https://radicalchess.com/#features"><li>Features</li></a></div>
        <div className="navbar-buttons" ><a href="https://radicalchess.com/#roadmap"><li>Roadmap</li></a></div>
        <div className="navbar-buttons" ><a href="https://radical-chess.gitbook.io/radical-chess-whitepaper/"><li>Whitepaper</li></a></div>
      </div>
    </div>
  )
}

export default Menu
