import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <Link to={""}>
            <li>SignUp</li>
          </Link>
          <Link to={""}>
            <li>LogIn</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
