// Gallery.js
import React from 'react';
import './Gallery.css';
import schoolImage from '../school-image.jpg';

const Gallery = () => {
  const backgroundImage = {
    backgroundImage: `url(${schoolImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <div className="gallery-container" style={backgroundImage}>
      <h1 className="gallery-title">Photo Gallery</h1>
      <div className="gallery-iframe-container">
        <iframe
          className="gallery-iframe"
          src=" "
          allowFullScreen
          title="Photo Gallery"
        ></iframe>
        <div className="gallery-border">
          <span className="gallery-border-text">PHS in Photos</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
