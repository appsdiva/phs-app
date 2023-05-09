import React from 'react';

import { NavLink } from 'react-router-dom';
import './Sports.css';
import schoolImage from '../school-image.jpg';
import SportsCalendar from './SportsCalendar';
import { FaHome, FaMap, FaCalendarAlt, FaImages } from 'react-icons/fa';

const NavButton = ({ to, icon: Icon, children }) => (
    <NavLink to={to} className="nav-button" activeClassName="selected">
      <button className="nav-button-content">
        <Icon size="1.5em" />
        <span>{children}</span>
      </button>
    </NavLink>
  );

const Sports = () => {
    const apiKey = 'AIzaSyAxvB5fuHD94liuBcHWM56u812ZdzoqQV8';
    const calendarId = 'c_3332743fa4617c6ab1f075ef4266b885e084404abd6259010042258969978a93@group.calendar.google.com';
    
    const backgroundImageStyle = {
      backgroundImage: `url(${schoolImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      width: '100%',
      boxSizing: 'border-box',
    };
  
    return (
      <div className="sports-page-container" style={backgroundImageStyle}>
        <div className="sports-header">
          <h1>Sports Calendar</h1>
          </div>
          <div className="sports-page-container">
          <SportsCalendar apiKey={apiKey} calendarId={calendarId} />
          <div className="nav-buttons">
            <NavButton to="/" icon={FaHome}>Home</NavButton>
            <NavButton to="/map-page" icon={FaMap}>Map</NavButton>
            <NavButton to="/events-page" icon={FaCalendarAlt}>Events</NavButton> 
            <NavButton to="/gallery-page" icon={FaImages}>Gallery</NavButton>
        </div>
        </div>
      </div>
    );
  };
  

export default Sports;
