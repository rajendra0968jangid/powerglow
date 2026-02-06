import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-section">
          <h3>TouristIQ</h3>
          <p style={{ color: 'pink' }}>  Make your journey easier with😊  TouristIQ</p>
        </div>

        {/* Middle Section - Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/PlaceDetails">Place-Details</a></li>
            <li><a href="/LiveMap">Live-map</a></li>
            <li><a href="/Footfail">Live-Crowd</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">X(Twiiter)</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <h4 style={{ color: 'Yellow' }}>We don't guess crowds, we calculate them in reel time</h4>
      </div>
    </footer>
  );
};

export default Footer;
