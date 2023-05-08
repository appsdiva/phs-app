import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './Sports.css';
import schoolImage from '../school-image.jpg';

const Sports = () => {
  const googleCalendarEmbedCode = `
    <iframe
      src="https://calendar.google.com/calendar/embed?src=c_3332743fa4617c6ab1f075ef4266b885e084404abd6259010042258969978a93%40group.calendar.google.com&ctz=America%2FDenver" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"
      style="border: 0"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no">
    </iframe>
  `;

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
      <h1>Sports Calendar</h1>
      <div
        className="sports-calendar"
        dangerouslySetInnerHTML={{ __html: googleCalendarEmbedCode }}
      ></div>
    </div>
  );
};


export default Sports;
