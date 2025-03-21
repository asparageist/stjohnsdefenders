import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Email Us</h3>
          <p>info@stjohnsdefenders.org</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-link">
            <FontAwesomeIcon icon={faSquareInstagram} className="social-icon" />
            <a 
              href="https://www.instagram.com/stjohnsdefender" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              @stjohnsdefender
            </a>
            </div>
          <p>Other contacts</p>
          <p>Other social media</p>
          <p>Other resources</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 St. Johns Defenders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 