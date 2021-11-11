import React, { useState } from "react";
import Logo from "./Images/logo.png";


const Menu = () => {
  const [state, setState] = useState(false);
  const [submenu, setsubmenu] = useState(false)
  return (
    <div className="menuwrapper">
      <div className="menu">
        <img src={Logo} alt="Brainiac chess" height="auto" className="Logo" />
        <li onClick={() => setState(!state)} className="home" >HOME</li>
        {state === true ?
          <ul className="submenu">
            <li><a href="/#About-section">About</a></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#RoadMap-section">Roadmap</a></li>
            <li><a href="/#Team-section">Team</a></li>
          </ul> : ""
        }
        <li>PLAY</li>
        <li onClick={() => { setsubmenu(!submenu) }}>SOCIAL
          {submenu &&
            <ul className="submenu">
              <li>
                <div>
                  <a href="/" target="_blank">News</a>
                </div></li>
              <li>
                <a href="/#Ecosystem-section">Ecosystem</a></li>
            </ul>}
        </li>
        <li className="navbar-buttons">METAVERSE</li>
        <li className="navbar-buttons">NFT</li>
        <div className="navbar-buttons"> <li>LOGIN</li></div>
        <div className="navbar-buttons" ><li>SIGNUP</li></div>
      </div>
    </div>
  )
}

export default Menu
