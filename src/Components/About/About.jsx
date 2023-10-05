import React from 'react'
import "./about.scss"
import Demo from "../../assets/Images/demo-chairman.jpg"

function About() {

  return (
    <div className="about-container">
        <div className="about-part1">
           <div className="section1">
            <img src={Demo} alt="" className='chairman'/>
           </div>
           <div className="section2">
            <h2 className="name">GLADSON DAVID</h2>
            <p className="role">Founder & CEO</p>
           </div>
        </div>
        <div className='vertical'></div>

        <div className="about-part2">
            <h1>About Us</h1>
            <p>G D Constructions was established in 2004 by Er.
Gladson David, a post graduate in Civil Engineering with over 25 years of wide ranging experience in construction industry. From its humble beginnings, today, G. D Constructions has carved an enviable reputation for itself by successfully executing numerous challenging projects in southern districts of Kerala & Tamilnadu. Well equipped, skilled workforce and dedicated supervisory staff provides G.D Constructions much needed capability and capacity to undertake multiple projects in parallel and execute them as planned. Giving utmost importance to quality and customer satisfaction, G. D Constructions promises to strive its best to honor every customer commitment made in terms of work quality, project cost and time.</p>
        </div>
    </div>
  )
}

export default About
