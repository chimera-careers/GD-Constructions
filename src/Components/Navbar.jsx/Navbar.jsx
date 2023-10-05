import React from 'react'
import Logo from "../../assets/logo.svg"


import { FiMenu } from "react-icons/fi";



import "./navbar.scss"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="logo-container">
        <img src={Logo} alt="My Logo"  className='logo'/>
        </div>
        <div className="options">
            <p>Home</p>
            <p>About us</p>
            <p>Projects</p>
            <p>Contact</p>
            <Link className='menu-btn'><button className='menu-btn'>MENU <FiMenu className='menu-icon' /></button></Link>
        </div>
        
    </div>
  )
}

export default Navbar
