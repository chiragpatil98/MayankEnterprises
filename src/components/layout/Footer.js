// Footer.js

import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import '../../styles/Footer.scss'; // Import SCSS for styling

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Example latitude
  lng: -122.4194, // Example longitude
};

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <footer className="footer">
      <div className="contact-map-container">
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Mobile Number" required />
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="google-map">
          <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-contact">
          <p><strong></strong>Jitendra Nemade - 9823269363</p>
          </div>
          <div className="footer-contact">
          <p><strong></strong> 51,Vishojit Jyotinagar Aurangabad</p>
          </div>
          <div className="footer-contact">
          <p><strong></strong> mayankent0609@gmail.com</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
