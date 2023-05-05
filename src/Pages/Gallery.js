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
          src="https://docs.google.com/presentation/d/e/2PACX-1vRPY8Ymv7JJ-qkyNCkEjBu4R2dXNn15mJxjEpKF6hsjCOvYCvGVP9T93owHveHxHE62Pkfi93gny8nz/embed?start=true&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
        </iframe>
        <div className="gallery-border">
          <span className="gallery-border-text">PHS in Photos</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
