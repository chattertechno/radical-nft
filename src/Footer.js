import React from 'react';
import Logo from "./Images/logo.png";
import Youtube from "./Images/youtube.png";
import Twitter from "./Images/twitter.png";
import Telegram from "./Images/telegram.png";
import { Facebook, Medium, Linkedin } from 'react-bootstrap-icons';
import './footer.css';
const Footer = () => {
  return (
    <div>
    <div className="copyright-wrap s-copyright-wap">
      <div className="container">
        <div className="row">
          <div>
            <div className="copyright-text">
            <p>Copyright © 2021 $CHIP&nbsp;All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer;
