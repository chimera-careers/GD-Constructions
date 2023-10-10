import React from "react";
import "./projects.scss";

import { Link } from "react-router-dom";

// import { FiX } from "react-icons/fi";

function Projects() {
  return (
    <>
      <div className="projects-container">
        <h1 className="project-head">Our Projects</h1>

        <div className="visible-cards">
          <div className="card1">
            <div className="textBox">
              <p className="text head">St. Judes Church</p>
              <p className="text price">Vazhayila</p>
              <Link to="/gallery">
                <button type="button" className="btn btn-primary">
                  View More
                </button>
              </Link>
            </div>
          </div>

          <div className="card2">
            <div className="textBox">
              <p className="text head">Sharon Hills Apartment</p>
              <p className="text price">Maruthoor,Trivandrum</p>
              <Link to="/gallery">
                <button type="button" className="btn btn-primary">
                  View More
                </button>
              </Link>
            </div>
          </div>
          <div className="card3">
            <div className="textBox">
              <p className="text head">Commercial and Residential Project</p>
              <p className="text price">Kunnukuzhi</p>
              <Link to="/gallery">
                <button type="button" className="btn btn-primary">
                  View More
                </button>
              </Link>
            </div>
          </div>
          <div className="card4">
            <div className="textBox">
              <p className="text head">Commercial and Residential Project(ongoing)</p>
              <p className="text price">Pottakuzhi , Pattom</p>
              <Link to="/gallery">
                <button type="button" className="btn btn-primary">
                  View More
                </button>
              </Link>
            </div>
          </div>
          <div className="card5">
            <div className="textBox">
              <p className="text head">Aadithya Vidyakendra Public School</p>
              <p className="text price">Paravur</p>
              <Link to="/gallery">
                <button type="button" className="btn btn-primary">
                  View More
                </button>
              </Link>
            </div>
          </div>
          <div className="card6">
            <div className="textBox">
              <p className="text head">Residential project (Ongoing)</p>
              <p className="text price">Vazhayila</p>
              <Link to="/gallery">
                <button type="button" className="btn-primary">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
