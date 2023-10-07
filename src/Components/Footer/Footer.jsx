import React from "react";

import "./footer.scss";
import Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-part1">
          <img src={Logo} alt="" className="footer-logo" />
        </div>
        <div className="footer-part2">
          <h2 className="footer2-heading">Head Office</h2>
          <p>
            T.C.4/894,Mohammed Manzil,Pipeline Road,
            <br />
            Kowdiar,Thiruvananthapuram,695003
          </p>
          <p>+91 9495831451 , +91 9443692838</p>
        </div>
        <div className="footer-part3">
          <h2 className="footer3-heading">Socials</h2>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Linkedin</p>
        </div>
        <div className="footer-part4">
          <h2 className="footer4-heading">Enquiries</h2>
          <button className="footer4-contact-us">Contact US</button>
        </div>
      </div>
      <div className="footer-base">
        <div className="base-part1">
          <p>&copy; 2023 by GD Constructions</p>
        </div>
        <div className="base-part2">
          <p>
            Developed by <span className="chimera">Chimera</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
