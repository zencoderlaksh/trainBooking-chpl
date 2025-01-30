import React, { useState } from "react";
import images from "../../assets/identifier";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid navbar-box-wrapper">
        {/* Logo */}
        <div className="left-logo" style={{ marginLeft: "150px" }}>
          <Link className="navbar-brand" to="#">
            <img className="logoimg" src={images.logo} alt="Logo Image" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} style={{ marginLeft: "200px" }}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active custom-nav-links" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active custom-nav-links" to="/about-us">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active custom-nav-links" to="/booking">
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active custom-nav-links" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active custom-nav-links" to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </div>

        <div className="right-container" style={{ marginRight: "150px" }}></div>
      </div>
    </nav>
  );
};

export default Header;
