import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { fetchUpcomingEvents } from "./api";
import './Events.css';
import schoolImage from '../school-image.jpg';
import schoolLogo from '../school-logo.png';
import { FaHome, FaUserGraduate, FaMap, FaCalendarAlt, FaBasketballBall, FaImages } from 'react-icons/fa';

const NavButton = ({ to, icon: Icon, children }) => (
    <NavLink to={to} className="nav-button" activeClassName="selected">
      <button className="nav-button-content">
        <Icon size="1.5em" />
        <span>{children}</span>
      </button>
    </NavLink>
  );

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchUpcomingEvents()
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const backgroundImage = {
    backgroundImage: `url(${schoolImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <div className="events-container" style={backgroundImage}>
    <img src={schoolLogo} alt="School Logo" className="school-logo" />
      <h1 className="events-header">Upcoming Events</h1>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <div className="event-date">
              {new Date(event.start.dateTime || event.start.date).toLocaleString('en-US', { month: 'short', day: '2-digit' }).toUpperCase()}
            </div>
            <div className="event-info">
              <div className="event-title">{event.summary}</div>
              <div className="event-location">Location: {event.location}</div>
              <div className="event-time">
                Time: {new Date(event.start.dateTime || event.start.date).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="nav-buttons">
        <NavButton to="/" icon={FaHome}>Home</NavButton>
        <NavButton to="/map-page" icon={FaMap}>Map</NavButton>
        <NavButton to="/gallery-page" icon={FaImages}>Gallery</NavButton> 
        <NavButton to="/sports-page" icon={FaBasketballBall}>Sports</NavButton>
      </div>
    </div>
  );
};
export default Events;
