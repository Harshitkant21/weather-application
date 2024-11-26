import React from 'react';
import '../CSS/Footer.css';

const Footer = ({theme}) => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <img src="your-logo.png" alt="Logo" className="footer-logo" />
          <p>Your relative content goes here.</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-secondary">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;