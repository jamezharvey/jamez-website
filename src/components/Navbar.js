import React from "react";
import LinkedIn from "../linkedin.svg";
import Email from "../envelope.svg";
import JamesLogo from "../James Harvey Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand ms-2" href="#">
          <img className="logo" src={JamesLogo} alt="Logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about me
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto m-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/jamesjharvey/"
              >
                <img
                  className="social"
                  src={LinkedIn}
                  alt="LinkedIn Logo"
                ></img>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/jamesjharvey/"
              >
                <img className="social" src={Email} alt="LinkedIn Logo"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
