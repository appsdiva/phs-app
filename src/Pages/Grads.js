import React from 'react';
import { NavLink } from 'react-router-dom';
import './Grads.css';
import schoolImage from '../school-image.jpg';
import schoolLogo from '../school-logo.png';
import seniorImage from '../2023seniors.jpg';
import { FaHome, FaMap, FaCalendarAlt, FaImages } from 'react-icons/fa';

const NavButton = ({ to, icon: Icon, children }) => (
    <NavLink to={to} className="nav-button" activeClassName="selected">
      <button className="nav-button-content">
        <Icon size="1.5em" />
        <span>{children}</span>
      </button>
    </NavLink>
  );


  const backgroundImage = {
    backgroundImage: `url(${schoolImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
  };

  const Grads = () => {
  return (
    <div className="grads-container" style={backgroundImage}>

      <h1 className="grads-title">Seniors</h1>
      <img src={seniorImage} alt="Seniors 2023" className="seniors-photo" />

      <div className="nav-buttons">
        <NavButton to="/" icon={FaHome}>Home</NavButton>
        <NavButton to="/map-page" icon={FaMap}>Map</NavButton>
        <NavButton to="/events-page" icon={FaCalendarAlt}>Events</NavButton>
        <NavButton to="/gallery-page" icon={FaImages}>Gallery</NavButton>
      </div>
    </div>
  );
  };

export default Grads;
