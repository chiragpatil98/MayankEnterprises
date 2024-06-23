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
            googleMapsApiKey="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.1075329165135!2d75.33148326961606!3d19.864051260155595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb987c8b63910f%3A0x75c88cd82528529f!2s51%2C%20Dashmesh%20Nagar%2C%20Jyoti%20Nagar%2C%20Aurangabad%2C%20Maharashtra%20431005!5e0!3m2!1sen!2sin!4v1719155184748!5m2!1sen!2sin"
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
