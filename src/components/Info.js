import React, { useState } from 'react';
import '../styles/Info.css';
import SJCCQR from '../img/SJCCQR.png';
import RallyPosterSuccess from '../img/SJCC rally poster SUCCESS.jpg';
import LegislatorLetter from '../img/Legislator Letter.png';

const Info = () => {
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  return (
    <>
      <section className="info-section" id="about">
        <h2>Who We Are</h2>
        <p>We are passionate community members who live, work, and raise our families in St. Johns. We chose this neighborhood intentionally, drawn by its unique character and deep sense of community. As one of Portland's oldest neighborhoods, St. Johns stands apart with its iconic bridge, riverside beaches, and rich history. The community center is the bedrock of our neighborhood. It is a vital resource we cannot afford to lose. We are united in our commitment to preserving what makes St. Johns truly one-of-a-kind.</p>
        <br></br>
        <h2>Why We Are Here</h2>
        <p>We want to make a difference in how the City views St. Johns. We want to speak up for those who cannot. We are tired of  being the dumping ground for the City of Portland. It's time for them to invest in our beautiful part town rather than take stuff away. It's time to defend St. Johns. </p>
      </section>


      <section className="info-section" id="events">
        <h2>Upcoming Events:</h2>
        <div className="events-grid">
          <div className="events-item">
            <img 
              src={RallyPosterSuccess} 
              alt="SJCC Rally Poster" 
              className="rally-poster"
            />
          </div>
          <div className="events-item">
            <h3><a 
              href="https://stjohnsbizarre.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >May 10 – St Johns Bizarre</a></h3>
            <p>Come support your Mayor and District 2 City Councilors by cheering your heart out at the parade! The parade feels extra special this year because it will end at our beloved community center (that we all love so dearly and have been vigilantly and passionately fighting for!)
            </p><br></br>
            <p>Please visit us at our St Johns Defenders booth! We will be celebrating our collective success to keep the SJCC open! Thanks to everyone! WE DID IT TOGETHER!</p><br></br>
            <p>Come get your t-shirts at the St Johns Defenders booth! And continue proudly wearing them as a show of support for our St Johns neighborhood. This community is worth fighting for… and these shirts symbolize more than just saving the SJCC… they represent our mission to continue advocating for our sweet community, now and in the future, whatever may come our way.</p><br></br>
          </div>
          
        </div>
        <div className="letter-container">
          <h3>Letter from Our Legislators</h3>
          <img 
            src={LegislatorLetter} 
            alt="Letter from Legislators" 
            className="legislator-letter"
            onClick={() => setIsLetterModalOpen(true)}
          />
        </div>
        {isLetterModalOpen && (
          <div className="modal-overlay" onClick={() => setIsLetterModalOpen(false)}>
            <div className="modal-content">
              <img 
                src={LegislatorLetter} 
                alt="Letter from Legislators" 
                className="modal-image"
              />
              <button className="close-button" onClick={() => setIsLetterModalOpen(false)}>×</button>
            </div>
          </div>
        )}
      </section>

      <section className="info-section" id="Links">
        <h2>Further Exploration</h2>
        <p>Check out the <a 
              href="https://www.portland.gov/parks/st-johns-community-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >St Johns Community Center</a> website for details on the center's programs and what its loss would mean for our community.</p><br></br>
        <p>A list of Council members from our district can be found <a
              href="https://www.portland.gov/council/districts/2" 
              target="_blank" 
              rel="noopener noreferrer"
            >here</a>.</p>
      </section>
    </>
  );
};

export default Info; 