import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/">
            <button>
              <span className="logo">Flighting.com</span>
            </button>
          </Link>
          <div className="navItem">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
