import React from 'react';
import '../styles/Info.css';
import SJCCQR from '../img/SJCCQR.png';

const Info = () => {
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
            <p>&bull; CLosing the SJCC would deprive children of after school and <a
            href="https://web.multco.us/sun/sun-community-schools" 
            target="_blank" 
            rel="noopener noreferrer"
            > SUN programs</a>, as well as summer camps, which are vital for parents who need to work through the summer.</p><br></br>
            <p>&bull; Closing the SJCC would encourage illegal camping, thus intensifying public safety concerns.</p><br></br>
            <p>&bull; Closing the SJCC would disproportionately harm low-income families and those 23% of residents living below the poverty line, because they do not have the resources to compensate the loss. </p><br></br>
            <p>&bull; Closing the SJCC would disproportionately affect persons of color. St. Johns is home to one of the more diverse populations in Portland, representing 37% of our residents as persons of color.</p><br></br>
            <p>&bull; Closing the SJCC would constitute yet another episode in the long, documented history of the City's targeted, neglectful treatment of North Portland in general and St. Johns in particular.</p><br></br>
            <hr /><br></br>

            <h3>What can you do?</h3><br></br>
            <div className="action-item">
              <p>&bull; <strong>Join the Defense!</strong> Join the St. Johns Defenders to STOP our Community Center's closure. Fill out this <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeyLG5h71oPcSU3qClaqk_A10KfU555wNdToNksfYWoTjqudQ/viewform?pli=1" 
                target="_blank" 
                rel="noopener noreferrer"
              >short Google form</a> to stay in the know and find out what events are being planned.</p>
              <img 
                src={SJCCQR} 
                alt="QR Code for Google Form" 
                className="qr-code"
              />
            </div>
            <p>&bull; <strong>Voice your concerns!</strong> Let your City Council know your thoughts on their <a   
              href="https://www.portland.gov/budget/budget-comment-and-testimony" 
              target="_blank"
              rel="noopener noreferrer"
              >response form here</a>.</p><br></br>
            <p>&bull; <strong>Sign the petition</strong> if you prefer to be anonymous <a 
              href="https://www.change.org/p/halt-the-closure-of-st-johns-community-center?source_location=search" 
              target="_blank" 
              rel="noopener noreferrer"
            >here</a>.</p><br></br>
            <p>&bull; <strong>Register</strong> <a 
              href="https://savethesjcc.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >here</a> and they'll send in the above form for you!</p><br></br>
            <p>&bull; <strong>Business Outreach:</strong> We have a growing list of businesses displaying flyers (see below). Feel free to help distribute! Print a handful of these out and take them with you wherever you go!</p><br></br>
            {/* <hr /><br></br>

            <h3>Email Push</h3><br></br>
            <p>&bull; Sign up for our email list to receive updates and be part of the push to save the SJCC.</p><br></br>
            <p>&bull; Emails will be coordinated on specific dates to maximize impact on staffers to be heard by the City Council.</p><br></br> */}
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
      </section>
      
      <section className="info-section" id="events">
        <h2>Upcoming Events:</h2>
        <div className="events-grid">
          <div className="events-item">
            <h3>April 1 – Rally at St. Johns Community Center 6pm</h3>
            <p>Let's Rally! We are building as much hype around this as possible to send a statement!</p><br></br>
            <p>Televised event – let's show the city how much this center means to us!</p><br></br>
            <p>Family-friendly – bring kids, neighbors, and friends!</p><br></br>
            <p>We're working to make this event as engaging and fun as possible and will need a LOT of help. Stay tuned for requests.</p>
          </div>
          <div className="events-item">
            <h3>April 3 – City Budget Listening Session 6pm to 8:30pm</h3>
            <p>At Portland Community College Cascade Moriarty Auditorium, 5514-5518 N Albina Ave.</p><br></br>
            <p>This is a critical opportunity to provide direct feedback on budget priorities and advocate for keeping the center open.</p>
          </div>
        </div>
      </section>

      <section className="info-section" id="Links">
        <h2>Further Exploration</h2>
        <p>Check out the <a 
              href="https://www.portland.gov/parks/st-johns-community-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >St Johns Community Center</a> website for details on the center's history, programs, and what its loss would mean for our community.</p><br></br>
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