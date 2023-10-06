import React, { useState } from 'react';
import "./projects.scss";
import Project1 from "../../assets/Images/project1.webp";
import Project2 from "../../assets/Images/project2.webp";
import Project3 from "../../assets/Images/project3.jpeg";
import Project4 from "../../assets/Images/project4.jpeg";
import Project5 from "../../assets/Images/project5.jpeg";
import Project6 from "../../assets/Images/project6.jpeg";



import { FiX } from "react-icons/fi";

function Projects() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <div className="projects-container">
        <h1>Our Projects</h1>

        <div className="visible-cards">
          <div className="card1">
            <img src={Project1} alt="" className="card-image" />
            <div className="textBox">
              <p className="text head">St. Judes Church</p>
              <p className="text price">Vazhayila</p>
              <button type="button" className="btn btn-primary" onClick={handleOpen}>
                View More
              </button>
            </div>
          </div>
          <div className="card2">
            <img src={Project2} alt="" className="card-image" />
          </div>
           {/* <div className="card3">
            <img src={Project3} alt="" className="card-image" />
          </div>
          <div className="card4">
            <img src={Project4} alt="" className="card-image" />
          </div>
          <div className="card5">
            <img src={Project5} alt="" className="card-image" />
          </div>
          <div className="card6">
            <img src={Project6} alt="" className="card-image" />
          </div>  */}
        </div>

        {open && (
          <div className="projects-popup-container">
            <FiX onClick={handleClose}/>
            <img src={Project1} alt="" />
            
             
          </div>
        )}
      </div>
    </>
  );
}

export default Projects;
