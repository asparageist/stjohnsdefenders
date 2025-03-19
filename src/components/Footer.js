import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@stjohnsdefenders.com</p>
          <p>Phone: do we want a phone number?</p>
        </div>
        <div className="footer-section">
          <h3>Find out more</h3>
          <p>Other social media</p>
          <p>Other contacts</p>
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