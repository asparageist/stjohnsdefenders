import React from 'react';
import '../styles/Navbar.css';
import logo from '../img/logo192.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">
          <img src={logo} alt="St. Johns Defenders Logo" className="nav-logo-img" />
          <span>St. Johns Defenders</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#media">Media</a></li>
          <li><a href="#events">Events</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 