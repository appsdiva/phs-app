import React from 'react';
import './Sports.css';
import schoolImage from '../school-image.jpg';
import SportsCalendar from './SportsCalendar';

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
      <div className="sports-page-content">
        <h1>Photo Gallery</h1>
        <SportsCalendar apiKey={apiKey} calendarId={calendarId} />
      </div>
    </div>
  );
};

export default Sports;
