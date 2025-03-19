import React from 'react';
import '../styles/Info.css';

const Info = () => {
  return (
    <>
      <section className="info-section" id="about">
        <h2>sup</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </section>
      
      <section className="info-section" id="impact">
        <h2>further action</h2>
        <div className="impact-grid">
          <div className="impact-item">
            <h3>do what</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="impact-item">
            <h3>how do</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="impact-item">
            <h3>who</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info; 