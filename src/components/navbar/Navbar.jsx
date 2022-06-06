import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Flighting.com</span>
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
