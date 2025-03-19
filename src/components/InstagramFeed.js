import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/InstagramFeed.css';

const InstagramFeed = () => {
  const instagramPosts = [
    'https://www.instagram.com/stjohnsdefender/p/DHY7q7_y2Kh/',
  ];

  return (
    <div className="instagram-feed">
      <h1>Follow Our Journey</h1>
      <div className="instagram-grid">
        {instagramPosts.map((url, index) => (
          <div key={index} className="instagram-post">
            <InstagramEmbed url={url} width={328} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed; 