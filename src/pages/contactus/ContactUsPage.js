// // ContactUsPage.js

// import React from 'react';

// const ContactUsPage = () => (
//   <div>
//     <h2>Contact Us</h2>
//     <p>Contact information goes here...</p>
//   </div>
// );

// export default ContactUsPage;
// ContactUsPage.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactUsPage.css'; // Import CSS for styling

const ContactUsPage = () => (
  <div className="contact-us-container">
    <div className="contact-info">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>+91 (775) 303-3379</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>Shashank33379@gmail.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>Chandigarh, Chandigarh, India</span>
        </div>
      </div>
    </div>
    <div className="contact-form">
      <h2>Send us a Message</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
);

export default ContactUsPage;
