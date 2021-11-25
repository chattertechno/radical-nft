import Logo from "./Images/cropped-logo.png";
import "./style.css";
import { List } from "react-bootstrap-icons";
import React, { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [hambergur, setmenu] = useState(false);

  const HandelMenu = () => {
    setmenu(!hambergur);
  };

  return (
    <div className="back">
      <List className="hambergur" onClick={HandelMenu} />
      {hambergur && <Menu />}
      <header className="header">
        <div className="logo-box">
          <a href="https://chipcash.fun/">
            {" "}
            <img
              src={Logo}
              alt="logo"
              href="https://chipcash.fun/"
              className="logo"
            />{" "}
          </a>
        </div>

        <div className="navbar-wrap ">
          <ul>
            <li className=" menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-729 current_page_item menu-item-899">
              <a href="https://chipcash.fun/" aria-current="page">
                Home
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-663">
              <a href="https://chipcash.fun/#features">FEATURES</a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-664">
              <a href="https://chipcash.fun/#tiers">TIERS</a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-665">
              <a href="https://chipcash.fun/#tokenomics">TOKENOMICS</a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-666">
              <a href="https://chipcash.fun/#road-map">ROAD MAP</a>
            </li>
          </ul>{" "}
        </div>
        <div className="mobile-menu"></div>
      </header>
    </div>
  );
}

export default Header;
