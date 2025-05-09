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

      <section className="info-section" id="budget">
        <h2>Regarding the Proposed City Budget Cuts</h2>
          <div className="info-item">
            <h3>What we know:</h3><br></br>
            <p>&bull; The City of Portland forecasts a $92.8M budget gap.</p><br></br>
            <p>&bull; The city's budget is $8B.</p><br></br>
            <p>&bull; The projected gap represents only about 1% of the city's budget.</p><br></br>
            <p>&bull; The city proposes cutting funds to the Parks and Recreation Department to close the gap, targeted unfairly among 26 other bureaus that report directly to the Mayor.</p><br></br>
            <p>&bull; The city's proposal includes <strong>shutting down the St. Johns Community Center</strong>.</p><br></br>
          </div><hr /><br></br>

          <div className="info-item">
            <h3>We challenge the city's proposal <em>on its own grounds</em>.</h3><br></br>
            <p>The City Says:</p><br></br>
            <p>&bull; The rising cost of public healthcare is a significant cause of the budget gap. Closing the SJCC would free up money to close the gap.</p><br></br>
            <p>We Say:</p><br></br>
            <p>&bull; <strong>Closing the SJCC would raise the cost of healthcare even more</strong> because the SJCC provides recreational activities supporting health and wellness for those who might not otherwise have access. Thus <strong>closing the SJCC would not, on balance, free up money</strong> to close the gap.</p><br></br>
            <p>The City Says:</p><br></br>
            <p>&bull; Decreased revenue in the form of taxes (property, business, and licensing) is a significant cause of the budget gap. Closing the SJCC would free up money to close the gap.</p><br></br>
            <p>We Say:</p><br></br>
            <p>&bull; <strong>Closing the SJCC would decrease tax revenue even more</strong> because families would have to move away from the community, lowering property values and starving community businesses both current and future, thereby shrinking tax revenues for the city. Thus <strong>closing the SJCC would not, on balance, free up money</strong> to close the gap.</p><br></br>
            <hr /><br></br>
            
            <h3>We challenge the city's proposal <em>on ethical grounds</em>.</h3><br></br>
            <p>&bull; Closing the SJCC would deprive our community of an important forum for fostering social connection and informal support networks.</p><br></br>
            <p>&bull; Closing the SJCC would deprive children of after school and <a
            href="https://web.multco.us/sun/sun-community-schools" 
            target="_blank" 
            rel="noopener noreferrer"
            > SUN programs</a>, as well as summer camps, which are vital for parents who need to work through the summer.</p><br></br>
            <p>&bull; Closing the SJCC would deprive our community of its <a
            href="https://www.portland.gov/pbem/neighborhood-emergency-teams" 
            target="_blank" 
            rel="noopener noreferrer"
            > NET location</a>, removing our community's ability to meet and provide safety and resources in event of an emergency or disaster.</p><br></br>
            <p>&bull; Closing the SJCC would encourage illegal camping, thus intensifying public safety concerns.</p><br></br>
            <p>&bull; Closing the SJCC would disproportionately harm low-income families and those 23% of residents living below the poverty line, because they do not have the resources to compensate the loss. </p><br></br>
            <p>&bull; Closing the SJCC would disproportionately affect persons of color. St. Johns is home to one of the more diverse populations in Portland, representing 37% of our residents as persons of color.</p><br></br>
            <p>&bull; Closing the SJCC would constitute yet another episode in the long, documented history of the City's targeted, neglectful treatment of North Portland in general and St. Johns in particular.</p><br></br>
            <hr /><br></br>
          </div>
        </section>

      <section className="info-section" id="media">
        <h2>Media Coverage</h2>
        <div className="media-grid">
          <div className="media-item">
            <h3>KPTV</h3>
            <a 
              href="https://www.kptv.com/2025/03/13/3-portland-area-community-centers-risk-closing/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              3 Portland-area community centers at risk of closing
            </a>
          </div>
          <div className="media-item">
            <h3>KGW</h3>
            <a 
              href="https://www.kgw.com/video/news/local/portlanders-voice-support-of-st-johns-community-center-which-is-on-the-chopping-block/283-5e60b188-9bd2-469e-b971-d18ea4431d41" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Portlanders voice support of St. Johns Community Center, which is on the chopping block
            </a>
          </div>
        </div>
        <br></br>
        <div className="media-grid">
          <div className="media-item">
            <h3>KATU-Rally Coverage</h3>
            <a 
              href="https://katu.com/news/local/st-johns-neighborhood-holds-rally-to-preserve-community-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              St. Johns neighborhood holds rally to preserve community center
            </a>
          </div>
          <div className="media-item">
            <h3>KPTV-Rally Coverage</h3>
            <a 
              href="https://www.kptv.com/video/2025/04/02/community-rallies-save-st-johns-community-center-budget-cuts-loom/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Community rallies to save St. Johns Community Center as budget cuts loom
            </a>
          </div>
        </div>
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