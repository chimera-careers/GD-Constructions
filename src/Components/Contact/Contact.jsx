import React from "react";

import "./contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-part1">
        <h1 className="heading-office">Head Office</h1>
        <div className="address-details">
          <p>
            T.C.4/894,Mohammed Manzil,Pipeline Road,
            <br />
            Kowdiar,Thiruvananthapuram,695003
          </p>
          <p>Mob: +91 9495831451</p>
          <p>Mob: +91 9443692838</p>
          <p>gdconstructions.co.in</p>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011846.464872574!2d73.89085375624998!3d9.984804100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873d09452d4e1%3A0xad5a19fabeb5b8d5!2sGD%20Decorators%20(False%20Ceiling%20Contractors)!5e0!3m2!1sen!2sin!4v1696571460019!5m2!1sen!2sin"
            className="map"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="vertical"></div>
      <div className="contact-part2">
        <h1 className="heading-enq">Enquiries</h1>
        <p>
          For any enquiries, questions or commendations, please call:
          123-456-7890 <br /> or fill out the following form
        </p>
        <div className="form-container">
          <div className="form-inputs">
            <div className="input-section1">
              <div className="fullname-input">
                <input type="text" className="input-full" />
                <label htmlFor="input" className="label">
                  Full Name
                </label>
                <div className="underline"></div>
              </div>

              <div className="email-input">
                <input type="email" className="input-mail" />
                <label htmlFor="input" className="label">
                  Email
                </label>
                <div className="underline"></div>
              </div>
            </div>

            <div className="subject-input">
              <input type="text" className="input-sub" />
              <label htmlFor="input" className="label">
                Subject
              </label>
              <div className="underline"></div>
            </div>

            <div className="message-input">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="input-mess"
              ></textarea>
              <label htmlFor="textarea" className="label">
                Message
              </label>
              <div className="underline"></div>
            </div>

            <button type="submit" id="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
