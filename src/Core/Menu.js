import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../Images/logo2.png';


const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "black" };
  };
};
const Menu = ({ history }) => {
  return (
    <div>
      <nav>
        <ul className="nav nav-tabs ">
        <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/")}
              to="/"
            >
            <img src={logo} style={{width:100, marginTop: -5,height:100, padding:1}} />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/")}
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/about")}
              to="/about"
            >
              About
            </Link>
            <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/contact")}
              to="/contact"
            >
              Contact Us
            </Link>
            </li>
            <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/donate")}
              to="/donate"
            >
              Donate
            </Link>
            </li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Menu);
