import React from 'react'

import "./footer.scss"
import Logo from "../../assets/logo.svg"

function Footer() {
  return (
    <>
    <div className="footer-container">
        <div className="footer-part1">
            <img src={Logo} alt="" className='footer-logo'/>
        </div>
        <div className="footer-part2">
          <h2>Head Office</h2>
          <p>T.C.4/894,Mohammed Manzil,Pipeline Road,<br />Kowdiar,TVPM</p>
          <p>+91 9495831451</p>
          <p>+91 9443692838</p>
        </div>
        <div className="footer-part3">
          <h2>Socials</h2>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Linkedin</p>
        </div>
         <div className="footer-part4">
          <h2>Enquiries</h2>
          <button>Contact US</button>
        </div> 

    </div>
        <div className="footer-base">
          <div className="base-part1">
            <p>&copy; 2023 by GD Constructions</p>
          </div>
          <div className="base-part2">
            <p>Developed by <span className='chimera'>Chimera</span></p>
          </div>
        </div>
    </>
  )
}

export default Footer
