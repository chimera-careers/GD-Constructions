import React from 'react'
import Banner from "../../assets/Images/banner.jpg"

import "./landingpage.scss"
import Header from '../Header/Header'
import Navbar from '../Navbar.jsx/Navbar'
import About from '../About/About'
import Footer from '../Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle
// import Banner from "../../assets/Images/banner.jpg";

function LandingPage() {
  return (
    <div>
      <>
      <Header />
      <Navbar />
<div className="banner-container">
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Banner} class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src={Banner} class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src={Banner} class="d-block w-100" alt=""/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
      <About />
      <Footer/>
    </>
    </div>
  )
}

export default LandingPage
