// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import schoolLogo from './school-logo.png';
import schoolImage from './school-image.jpg';
import { FaMap, FaCalendarAlt, FaGraduationCap, FaImages } from 'react-icons/fa';
import { FaTemperatureHigh } from 'react-icons/fa';
import Events from './Pages/Events';
import MapPage from './Pages/MapPage';
import LowerMapPage from './Pages/LowerMapPage';
import Grads from './Pages/Grads';
import Sports from './Pages/Sports';
import './global.css';
import Gallery from './Pages/Gallery';
//import Map from './components/SchoolMap';
//import Home from '.Home'


const NavButton = ({ to, icon: Icon, children }) => (
  <NavLink to={to} className="nav-button" activeClassName="selected">
    <button className="nav-button-content">
      <Icon size="1.5em" />
      <span>{children}</span>
    </button>
  </NavLink>
);

const Home = () => (
  <div className="page home" style={{ backgroundImage: `url(${schoolImage})` }}>
    <div className="home-content">
      <img src={schoolLogo} alt="School Logo" className="school-logo" />
      <h1>Welcome to PHS</h1>
      </div>
      <div className="nav-buttons">
        
        <NavButton to="/map-page" icon={FaMap}>Map</NavButton>
        <NavButton to="/events-page" icon={FaCalendarAlt}>Events</NavButton>
        <NavButton to="/gallery-page" icon={FaImages}>Gallery</NavButton> 
        <NavButton to="/grads-page" icon={FaGraduationCap}>Seniors</NavButton>
      </div>
    <FortCollinsTime/>
    <WeatherInfo />
  </div>
);

// <NavButton to="/" icon={FaHome}>Home</NavButton>  to add HOME icon

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const apiKey = '1ef94d81eb88965994ddb3e1b606ef27'; 
  const fortCollinsCoordinates = '40.5853,-105.0844';
  const units = 'imperial';

  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${fortCollinsCoordinates.split(',')[0]}&lon=${fortCollinsCoordinates.split(',')[1]}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Failed to fetch weather data: ${response.status} ${response.statusText}`);
        }
      })
      .then(data => setWeatherData(data))
      .catch(error => {
        console.error(error);
        setError(error);
      });
  }, []);

  const dayFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    weekday: 'short',
  });

  if (error) {
    return <div className="weather-info">Error: {error.message}</div>;
  }

  return (
    <div className="weather-info">
      {weatherData && weatherData.current ? (
        <>
          <div className="day">{dayFormatter.format(new Date())}</div>
          <FaTemperatureHigh className="temp-icon" />
          <div className="temperature">{Math.round(weatherData.current.temp)}°F</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};


const FortCollinsTime = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    });

    return () => clearInterval(timer);
  }, []);

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    hour: 'numeric',
    minute: 'numeric',
    //second: 'numeric',
  });

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="fort-collins-time">
      <div className="time">{timeFormatter.format(time)}</div>
      <div className="date">{dateFormatter.format(time)}</div>
    </div>
  );
};


//function App() {
  
const App = () => (
  <Router>
    <div className="App">
      
        <div className="app">
          <nav className="nav"></nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grads-page" element={<Grads />} />
            <Route path="/map-page" element={<MapPage />} />
            <Route path="/events-page"element={<Events />} />
            <Route path="/sports-page" element={<Sports />} />
            <Route path="/upper-level" element={<MapPage />} />
            <Route path="/lower-level" element={<LowerMapPage />} />
            <Route path="/gallery-page" element={<Gallery />}
            />
          </Routes>
        </div>
      
    </div>
    </Router>
)
//}


export default App;
