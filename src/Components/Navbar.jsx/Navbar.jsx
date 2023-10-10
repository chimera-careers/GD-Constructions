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
    
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FiMenu className="menu-icon" /></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <h5>Home</h5>
    <h5>About us</h5>
    <h5>Projects</h5>
    <h5>Contact</h5>
    
  </div>
</div>
      </div>

    </div>
  );
}

export default Navbar;
