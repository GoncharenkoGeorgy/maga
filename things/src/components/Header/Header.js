import React from 'react';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  
  const { loggedIn, handleLogout, openLogin } = props;
  
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  
  const handleMenu = () => {
    setIsMenuPopupOpen(!isMenuPopupOpen)
  }

  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname === "/" ? 'header_image' : ''}`}>
      <div className='header__container'>
        <h2 className={`header__title ${isMenuPopupOpen || pathname === '/' ? 'header__title_light' : 'header__title_black'}`}>Интернет вещей</h2>
        <Navigation
          loggedIn={loggedIn}
          pathname={pathname}
          isMenuPopupOpen={isMenuPopupOpen}
          handleLogout={handleLogout}
          openLogin={openLogin}
          handleMenu={handleMenu}
        />
      </div>
    </header>
  );
}

export default Header;