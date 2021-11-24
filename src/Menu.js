import React, { useState } from "react";
import Logo from "./Images/cropped-logo.png";


const Menu = () => {
  const [state, setState] = useState(false);
  const [submenu, setsubmenu] = useState(false)
  return (
    <div className="menuwrapper">
      <div className="menu">
        <img src={Logo} alt="Brainiac chess" height="auto" className="Logo" />
        {state === true
        }
        <li className="navbar-buttons"><a href="https://chipcash.fun/#home"><span >Home</span></a></li>
        <li className="navbar-buttons"><a href="https://chipcash.fun/#home">Features</a></li>
        <div className="navbar-buttons"> <a href="https://chipcash.fun/#home"><li>Tiers</li></a></div>
        <div className="navbar-buttons" ><a href="https://chipcash.fun/#home"><li>Tokenomics</li></a></div>
        <div className="navbar-buttons" ><a href="https://chipcash.fun/#home"><li>Roadmap</li></a></div>
      </div>
    </div>
  )
}

export default Menu
