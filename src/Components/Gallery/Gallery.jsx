import React, { useState } from "react";
import "./gallery.scss";
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
          <div className="card1 card"></div>
          <div className="card2 card"></div>
          <div className="card3 card"></div>
          <div className="card4 card"></div>
          <div className="card5 card"></div>
          <div className="card6 card"></div>
          <div className="card7 card"></div>
          <div className="card8 card"></div>
          <div className="card9 card"></div>
          <div className="card10 card"></div>
          <div className="card11 card"></div>
          <div className="card12 card"></div>
          <div className="card13 card"></div>
          <div className="card14 card"></div>
          <div className="card15 card"></div>
          <div className="card16 card"></div>
          <div className="card17 card"></div>
          <div className="card18 card"></div>
          <div className="card19 card"></div>
          <div className="card20 card"></div>
          <div className="card21 card"></div>
          <div className="card22 card"></div>
          <div className="card23 card"></div>
          <div className="card24 card"></div>
          <div className="card25 card"></div>
          <div className="card26 card"></div>
          <div className="card27 card"></div>
          <div className="card28 card"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
