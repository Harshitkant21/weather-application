import React from 'react';
import '../CSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logo_white from "../assests/logo_white.png";
import logo_dark from "../assests/logo.png";

const Footer = ({ theme }) => {
  return (
    <div className={`footer ${theme}`}>
      <div className="footer-main">
        <div className="footer-left">
          <img
            src={theme === "light" ? logo_dark : logo_white}
            alt="SkyCast Logo"
            className="footer-logo"
          />
          <p>Stay ahead with SkyCast for accurate weather forecasts.</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/about">About Us</a>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/kantharshit/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/Harshitkant21/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/Harshit61124884" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-secondary">
        <p>&copy; 2024 SkyCast. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;