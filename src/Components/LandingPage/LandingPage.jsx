import React from "react";
import Banner1 from "../../assets/Images/banner-1.png";
import Banner2 from "../../assets/Images/banner-2.png";
import Banner3 from "../../assets/Images/banner-3.png";
import "./landingpage.scss";
import Header from "../Header/Header";
import Navbar from "../Navbar.jsx/Navbar";
import About from "../About/About";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript bundle
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

function LandingPage() {
  return (
    <div>
      <>
        <Header />
        <Navbar />
        <div className="banner-container">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Banner1}
                  className="d-block w-100 img-fluid"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Banner2}
                  className="d-block w-100 img-fluid"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Banner3}
                  className="d-block w-100 img-fluid"
                  alt=""
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <div id="footer">
          <Footer />
        </div>
      </>
    </div>
  );
}

export default LandingPage;
