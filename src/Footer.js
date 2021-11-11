import React from 'react';
import Logo from "./Images/logo.png";
import Youtube from "./Images/youtube.png";
import Twitter from "./Images/twitter.png";
import Telegram from "./Images/telegram.png";
import { Facebook, Medium, Linkedin } from 'react-bootstrap-icons';
import './index.scss';
const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="Footer-wrapper">
        <img src={Logo} alt="" height="auto" width="149px" className="footerlogo" />
        <h4 className="Follow-us-text">Follow Us</h4>
        <div className="Icon-wrapper">
          <a href="https://t.me/Brainiacchess_Network">
            <img src={Telegram} alt="" className="Telegram" />
          </a>
          <a href="https://twitter.com/brainiacchess">
            <img src={Twitter} alt="" className="Twitter" />
          </a>
          <a href="https://youtube.com/channel/UC0NQI5WqVNVjVLtggC11pdQ">
            <img src={Youtube} alt="" className="Youtube" />
          </a>
          <a href="https://www.facebook.com/BrainiacChessNetwork/">
            <Facebook className="facebook" />
          </a>
          <a href="https://medium.com/@brainiacchess">
            <Medium className="Medium" />
          </a>
          <a href="https://www.linkedin.com/company/brainiacchess-network/">
            <Linkedin className="Linkedin" />
          </a>
        </div>
      </div>
      <div className="Footer-links-Wrapper">
        <div className="Col-1">
          <h4 className="List-Heading">HOME</h4>
          <ul className="list">
            <li className="list-items">ABOUT</li>
            <li className="list-items">ROADMAP</li>
            <li className="list-items">TEAM</li>
          </ul>
        </div>
        <div className="Col-2">
          <h4 className="List-Heading PLAY">PLAY</h4>
        </div>
        <div className="Col-3">
          <h4 className="List-Heading">SOCIAL</h4>
          <ul className="list">
            <li className="list-items">NEWS</li>
            <li className="list-items">ECOSYSTEM</li>
          </ul>
        </div>
        <div className="Col-4">
          <h4 className="List-Heading METAVERSE">METAVERSE</h4>
        </div>
        <div className="Col-4">
          <h4 className="List-Heading NTF">NFT</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer;
