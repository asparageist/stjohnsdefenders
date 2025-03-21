import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../img/logo192.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">
          <img src={logo} alt="St. Johns Defenders Logo" className="nav-logo-img" />
          <span>St. Johns Defenders</span>
        </div>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#media" onClick={() => setIsOpen(false)}>Media</a></li>
          <li><a href="#events" onClick={() => setIsOpen(false)}>Events</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 