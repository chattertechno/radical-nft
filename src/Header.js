import Logo from "./Images/logo.png";
import './style.css';
import { List } from 'react-bootstrap-icons';
import React, {useState} from "react";
import Menu from './Menu';

function Header() {
  const [hambergur, setmenu] = useState(false)

const HandelMenu=()=>{
  setmenu(!hambergur)
}

    return(
        <div className="back">
          <List className="hambergur" onClick={HandelMenu}/>{
      hambergur && <Menu />
    }
            <header className="header">
            

      <div className="logo-box">
      <a href="https://dev.brainiacchess.network/">  <img src={Logo} alt="logo" href="https://dev.brain" className="logo" /> </a>
      </div>
      <nav className="navigation">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">home</a>
          <div className="dropdown-content">
            <a href="https://dev.brainiacchess.network/#About-section" className="nav-link">about</a>
            <a href="https://dev.brainiacchess.network/#features" className="nav-link">features</a>
            <a href="https://dev.brainiacchess.network/#RoadMap-section" className="nav-link">roadmap</a>
            <a href="https://dev.brainiacchess.network/#Team-section" className="nav-link">team</a>
          </div>
        </li>
        <li className="nav-item"><a href="#" className="nav-link">play</a></li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">social</a>
          <div className="dropdown-content">
            <a href="https://dev.brainiacchess.network/newsPage" className="nav-link">new</a>
            <a href="#" className="nav-link">ecosystem</a>
          </div>
        </li>
        <li className="nav-item"><a className="nav-link">metaverse</a></li>
        <li className="nav-item"><a className="nav-link">NFT</a></li>
      </nav>
      <div className="nav-content">
        <li className="nav-item login"><a href="https://dev.brainiacchess.network/login" className="nav-link">login</a></li>
        <li className="nav-item"><a href="https://dev.brainiacchess.network/signup" className="nav-link">signup</a></li>
        
      </div>
    </header>
        </div>
    )
}

export default Header;