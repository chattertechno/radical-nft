import React, { useState } from "react";
import Logo from "./Images/cropped-logo.png";
import Logonew from "./assets/images/logo.png"


const Menu = () => {
  const [state, setState] = useState(false);
  const [submenu, setsubmenu] = useState(false)
  return (
    <div className="menuwrapper">
      <div className="menu">
        <img src={Logonew} alt="Brainiac chess" height="auto" className="Logo" />
        {state === true
        }
        <li className="navbar-buttons"><a href="https://radicalchess.com/#home"><span >Home</span></a></li>
        <li className="navbar-buttons"><a href="https://radicalchess.com/#features">Play</a></li>
        <div className="navbar-buttons"> <a href="https://radicalchess.com/#gallery"><li>Gallery</li></a></div>
        <div className="navbar-buttons" ><a href="https://radicalchess.com/#tokenomics"><li>Game</li></a></div>
        <div className="navbar-buttons" ><a href="https://radicalchess.com/#roadmap"><li>Roadmap</li></a></div>
      </div>
    </div>
  )
}

export default Menu
