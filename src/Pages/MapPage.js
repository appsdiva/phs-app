import {React, useState} from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import UpperLevelMap from '../upper-level-map.png'; 
import LowerLevelMap from '../lower-level-map.png';
import schoolImage from '../school-image.jpg';
import { FaHome, FaCalendarAlt, FaBasketballBall, FaImages } from 'react-icons/fa';
import '../MapPage.css';
import '../NavButtons.css';

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

const MapPage = () => {

  const [currentMap, setCurrentMap] = useState(UpperLevelMap);

  const handleClick = (level) => {
    if (level === 'upper') {
      setCurrentMap(UpperLevelMap);
    } else if (level === 'lower') {
      setCurrentMap(LowerLevelMap);
    }
  };
/*
    const navigate = useNavigate();

    const location = useLocation();
    const currentPath = location.pathname;


    const handleButtonClick = (route) => {
        navigate(route);
      };
*/

    return (
        <div className="school-map-container" style={backgroundImage}>
            <div className="map-and-buttons-container">
          <TransformWrapper>
            <TransformComponent>
              <img src={currentMap} alt="School Map" className="school-map-image" />
            </TransformComponent>
          </TransformWrapper>
          <div className="level-buttons">
        <button
           className={`level-button ${currentMap === UpperLevelMap ? 'active' : ''}`}
           onClick={() => handleClick('upper')}>Upper Level
          </button>
        <button
           className={`level-button ${currentMap === LowerLevelMap ? 'active' : ''}`}
           onClick={() => handleClick('lower')}>Lower Level
          </button>
      </div>
          </div>
          <div className="nav-buttons">
            <NavButton to="/" icon={FaHome}>Home</NavButton>
            <NavButton to="/events-page" icon={FaCalendarAlt}>Events</NavButton>
            <NavButton to="/gallery-page" icon={FaImages}>Gallery</NavButton> 
            <NavButton to="/sports-page" icon={FaBasketballBall}>Sports</NavButton>
          </div>
          
          
        </div>
      );
    };
  

export default MapPage;