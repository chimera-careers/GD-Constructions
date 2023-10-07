import React from 'react';
import "./projects.scss";
import Project1 from "../../assets/Images/project1.webp";
import Project2 from "../../assets/Images/project2.webp";
import Project3 from "../../assets/Images/project3.jpeg";
import Project4 from "../../assets/Images/project4.jpeg";
import Project5 from "../../assets/Images/project5.jpeg";
import Project6 from "../../assets/Images/project6.jpeg";
import { Link } from 'react-router-dom';



// import { FiX } from "react-icons/fi";

function Projects() {
 
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
              <Link to="/gallery">
              <button type="button" className="btn btn-primary" >
                View More
              </button>
              </Link>
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

       
        
      </div>
    </>
  );
}

export default Projects;
