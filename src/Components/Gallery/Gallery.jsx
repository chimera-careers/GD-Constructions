import React, { useState } from "react";
import Project2 from "../../assets/Images/project2.webp"; // Import the image with the correct path
import "./gallery.scss"; // Make sure the filename matches your CSS file
import Navbar from "../Navbar.jsx/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Gallery() {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="gallery">
      <Header />
      <Navbar />

      <div className="gallery-container">
        <div className="image-cards">
          <div className="card1"></div>
          <div className="card2"></div>
          <div className="card3"></div>
          <div className="card4"></div>
          <div className="card5"></div>
          <div className="card6"></div>
          <div className="card7"></div>
          <div className="card8"></div>
          <div className="card9"></div>
          <div className="card10"></div>
          <div className="card11"></div>
          <div className="card12"></div>
          <div className="card13"></div>
          <div className="card14"></div>
          <div className="card15"></div>
          <div className="card16"></div>
          <div className="card17"></div>
          <div className="card18"></div>
          <div className="card19"></div>
          <div className="card20"></div>
          <div className="card21"></div>
          <div className="card22"></div>
          <div className="card23"></div>
          <div className="card24"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
