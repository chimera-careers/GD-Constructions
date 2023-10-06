import React from 'react'

import "./contact.scss"

function Contact() {
  return (
    <div className="contact-container">

        
<div className="contact-part1">
            <h1>Head Office</h1>
            <p>T.C.4/894,Mohammed Manzil,Pipeline Road,<br />Kowdiar,TVPM</p>
            <p>Mob: +91 9495831451</p>
            <p>Mob: +91 9443692838</p>
            <p>gdconstructions.co.in</p>

            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011846.464872574!2d73.89085375624998!3d9.984804100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873d09452d4e1%3A0xad5a19fabeb5b8d5!2sGD%20Decorators%20(False%20Ceiling%20Contractors)!5e0!3m2!1sen!2sin!4v1696571460019!5m2!1sen!2sin"  className='map'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
  
        <div className="vertical"></div>
        <div className="contact-part2">
            <h1>Enquiries</h1>
            <p>For any enquiries, questions or commendations, please call: 123-456-7890 <br /> or fill out the following form</p>
       <div className="form-container">
        <div className="form-inputs">

        <input type="text" placeholder='Fullname' />
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Subject' />
        <textarea name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button type='submit'>Submit</button>
        </div>
       </div>
        </div>

    </div>
  )
}

export default Contact
