import React, { useState } from 'react';
import '../styles/Community.css';
import danImage1 from '../img/Dan1.jpg';
import danImage2 from '../img/Dan2.jpg';

const Community = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <h1>Protecting St. Johns' Community Center </h1>
        <p>Standing together against budget cuts that affect our community</p>
        <img 
          src={isHovered ? danImage2 : danImage1} 
          alt="Dan" 
          className="dan-image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
};

export default Community; 