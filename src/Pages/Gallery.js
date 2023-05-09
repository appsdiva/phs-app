// Gallery.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Gallery.css';
import schoolImage from '../school-image.jpg';
import schoolLogo from '../school-logo.png';
import { FaHome, FaMap, FaCalendarAlt, FaBasketballBall } from 'react-icons/fa';


const NavButton = ({ to, icon: Icon, children }) => (
    <NavLink to={to} className="nav-button" activeClassName="selected">
      <button className="nav-button-content">
        <Icon size="1.5em" />
        <span>{children}</span>
      </button>
    </NavLink>
  );

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
    <img src={schoolLogo} alt="School Logo" className="school-logo" />
      <h1 className="gallery-title">Photo Gallery</h1>
      <div className="gallery-iframe-container">
        <iframe
          className="gallery-iframe"
          src="https://docs.google.com/presentation/d/e/2PACX-1vRPY8Ymv7JJ-qkyNCkEjBu4R2dXNn15mJxjEpKF6hsjCOvYCvGVP9T93owHveHxHE62Pkfi93gny8nz/embed?start=true&loop=true&delayms=5000&rm=minimal"
          
          title ="PHS Photo Gallery" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" >
        </iframe>
      </div>
      <div className="nav-buttons">
        <NavButton to="/" icon={FaHome}>Home</NavButton>
        <NavButton to="/map-page" icon={FaMap}>Map</NavButton>
        <NavButton to="/events-page" icon={FaCalendarAlt}>Events</NavButton>
        <NavButton to="/sports-page" icon={FaBasketballBall}>Sports</NavButton>
      </div>
    </div>
  );
};

export default Gallery;
