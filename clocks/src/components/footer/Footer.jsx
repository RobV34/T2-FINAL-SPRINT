import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">Custom Clocks</h3>
          <img src="images/footerclock.jpg" alt="Clock Image" className="clock-image"/>
        </div>
        <div className="footer-section">
          <h4 className="link">Contact Us</h4>
          <p className="text">
            customclocks@gmail.com <br />
            1-709-457-6789 <br />
            123 Water Street <br />
            Corner Brook, NL <br />
            A3F 8L5

          </p>
        </div>
          
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="icon" />
  </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
        <p className="copyright">Copyright © 2020. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

// The footer component is a functional component that renders the footer of the website.