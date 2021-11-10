import Logo from "./Images/logo.png";
import './style.css';

function Header() {
    return(
        <div>
            <header className="header">
      <div className="logo-box">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <nav className="navigation">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">home</a>
          <div className="dropdown-content">
            <a href="#" className="nav-link">about</a>
            <a href="#" className="nav-link">features</a>
            <a href="#" className="nav-link">roadmap</a>
            <a href="#" className="nav-link">team</a>
          </div>
        </li>
        <li className="nav-item"><a href="#" className="nav-link">play</a></li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">social</a>
          <div className="dropdown-content">
            <a href="#" className="nav-link">new</a>
            <a href="#" className="nav-link">ecosystem</a>
          </div>
        </li>
        <li className="nav-item"><a href="#" className="nav-link">metaverse</a></li>
      </nav>
      <div className="nav-content">
        <li className="nav-item login"><a href="#" className="nav-link">login</a></li>
        <li className="nav-item"><a href="#" className="nav-link">signup</a></li>
      </div>
    </header>
        </div>
    )
}

export default Header;