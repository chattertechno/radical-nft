import Logo from "./Images/logo.png";
import './header.css';

function Header() {
    return(
        <div className="top-section">
       <div><img src={Logo} alt="" height="auto" width="149px" /></div>
       <div className="navbar-content">
       <div className="dropdown">
            <button className="navbar-buttons-2">
              HOME
            </button>
            <div class="dropdown-content">
              <a href="/#About-section">About</a>
              <a href="/#features">Features</a>
              <a href="/#RoadMap-section">Roadmap</a>
              <a href="/#Team-section">Team</a>
            </div>
          </div>
          <button className="navbar-buttons-2">PLAY</button>
          <div className="dropdown">
          <button className="navbar-buttons-2">SOCIAL</button>
          <div class="dropdown-content">
            <div>
              <a href="/" target="_blank">News</a>
            </div>
            <a href="/#Ecosystem-section">Ecosystem</a>
          </div>
          </div>
          <button className="navbar-buttons-2">METAVERSE</button>
       </div>
       <div className="navbar-content">
          <div>
          <button className= "navbar-buttons-2">LOGIN</button>
          </div>
          <div>
            <button className="navbar-buttons-2">SIGNUP</button>
          </div>
       </div>
       </div>
    )
}

export default Header;