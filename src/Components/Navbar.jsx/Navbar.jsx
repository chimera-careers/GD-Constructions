import React from "react";
import Logo from "../../assets/logo.svg";
import Icon from "../../assets/icon.svg"

import { FiMenu } from "react-icons/fi";

import "./navbar.scss";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

function Navbar() {



  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/">
        
        <img src={Logo} alt="My Logo" className="logo" />

        </Link>

      </div>
      <div className="options">
        <Link to="/">
          
          <p>Home</p>
        </Link>
        <p>About us</p>
        <Link to={"/gallery"}>
          
          <p>Projects</p>
        </Link>
        <p>Contact</p>
        <Link className="menu-btn" onClick={<Menu />}>
          <button className="menu-btn">
           <FiMenu className="menu-icon" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
