import React from "react";
import { Link } from "react-router-dom";

import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

import "./header.scss";

function Header() {
  return (
    <div className="header-container">
      <div className="header-section1">
        <FiPhone className="phone-icon-header" />

        <div className="mobile-numbers">
          <Link className="mob-no">
            <p className="mob-no">+91 9495831451</p>
          </Link>
          <Link className="mob-no"></Link>
          <p className="mob-no">+91 9443692838</p>
        </div>
      </div>

      <div className="header-section2">
        <FiMail className="mail-icon-header" />
        <div className="mail-id-section">
          <Link className="mail-id">
            <p className="mail-id">gdconstructions@gmail.com</p>
          </Link>
        </div>

        <div className="socials">
          <Link>
            <FiFacebook className="socialicon" />
          </Link>
          <Link>
            <FiInstagram className="socialicon" />
          </Link>
          <Link>
            <FiYoutube className="socialicon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
