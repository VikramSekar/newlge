import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assests/logo.png";

function Header() {
  const location = useLocation();
  const { email } = location.state || {}; // Get email from state

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow rounded mt-2 navbar-light text-center p-1">
        <Link to="/Dashboard" className="navbar-brand fw-bold text-dark">
          <img
            src={logo}
            alt="Logo"
            width="100%"
            height="60"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler border border-2 border-success mt-2 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item m-1 p-1">
              <Link
                to="/Intradayforecast"
                className="nav-link text-dark btn btn-outline-success"
              >
                Intraday Forecast
              </Link>
            </li>
            <li className="nav-item m-1 p-1">
              <Link
                to="/Weekaheadforecast"
                className="nav-link text-dark btn btn-outline-success"
              >
                Week-ahead Forecast
              </Link>
            </li>
            <li className="nav-item m-1 p-1">
              <Link
                to="/Weather"
                className="nav-link text-dark btn btn-outline-success"
              >
                Weather
              </Link>
            </li>
            <li className="nav-item m-1 p-1">
              <Link
                to="/NewsEvents"
                className="nav-link text-dark btn btn-outline-success"
              >
                News & Events
              </Link>
            </li>
            <li className="nav-item m-1 p-1">
              <Link
                to="/Awards"
                className="nav-link text-dark btn btn-outline-success"
              >
                Awards
              </Link>
            </li>
            {email === "admin@gmail.com" && (
              <li className="nav-item m-1 p-1">
                <Link
                  to="/imageupload"
                  className="nav-link text-dark btn btn-outline-success"
                >
                  Image Upload
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
