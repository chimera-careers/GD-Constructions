import React from 'react'
import Banner from "../../assets/Images/banner.jpg"

import "./landingpage.scss"
import Header from '../Header/Header'
import Navbar from '../Navbar.jsx/Navbar'

function LandingPage() {
  return (
    <div>
      <Header />
      <Navbar />
<div className="banner-container">
  <img src={Banner} alt="" />
</div>
      
    </div>
  )
}

export default LandingPage
