import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Navigation.css';

const Navigation = (props) => {

  const {
    loggedIn,
    isMenuPopupOpen,
    pathname,
    handleLogout,
    openLogin,
    handleMenu
  } = props;

  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <div onClick={handleMenu} className={`navigation__button`}>
        <span className={`navigation__button-line ${pathname === '/' ? '' : 'navigation__button-line_black'} ${isMenuPopupOpen ? 'navigation__button-line_esc navigation__button-line_white' : ''}`}></span>
        <span className={`navigation__button-line ${pathname === '/' ? '' : 'navigation__button-line_black'} ${isMenuPopupOpen ? 'navigation__button-line_esc navigation__button-line_white' : ''}`}></span>
      </div>
      <nav className={isMenuPopupOpen ? 'navigation navigation_visible' : 'navigation'}>
        <div className={isMenuPopupOpen ? 'navigation__container navigation__container_active' : 'navigation__container'}>
          {((pathname === '/') || isMenuPopupOpen)
            ? <NavLink to='/' className={isMenuPopupOpen ? 'navigation__link navigation__light' : 'navigation__link navigation__light navigation__link_active_light-theme'}>Главная</NavLink>
            : <NavLink to='/' className='navigation__link navigation__black'>Главная</NavLink>
          }
          {(loggedIn)
            ? (pathname === '/')
              ? <NavLink to='/things' className={`${isMenuPopupOpen ? 'navigation__link navigation__light' : 'navigation__link navigation__light'}`}>Вещи</NavLink>
              : <NavLink to='/things' className={`${isMenuPopupOpen ? 'navigation__link navigation__light' : 'navigation__link navigation__black navigation__link_active'}`}>Вещи</NavLink>
            : (pathname === '/')
              ? ''
              : <NavLink to='/things' className={`${isMenuPopupOpen ? 'navigation__link navigation__light' : 'navigation__link navigation__black navigation__link_active'}`}>Вещи</NavLink>
          }
          {loggedIn
            ? <div onClick={handleLogout}
              className={`navigation__border ${pathname === '/' ? 'navigation__light' : 'navigation__border_dark'} ${isMenuPopupOpen ? 'navigation__border_light' : ''} `}>
                <span className={`navigation__border-link ${(isMenuPopupOpen || pathname === '/') ? 'navigation__light' : ''}`} >{currentUser.email}</span>
                <span className={`navigation__logout ${pathname === '/' ? 'navigation__logout_light' : 'navigation__logout_dark'} ${isMenuPopupOpen ? 'navigation__logout_light' : 'navigation__logout_dark'}`} />
              </div>
            : <div onClick={openLogin} className={`navigation__border ${pathname === '/' ? 'navigation__light' : 'navigation__border_dark'} ${isMenuPopupOpen ? 'navigation__border_light' : ''} `}>
                <span className={`navigation__border-link ${(isMenuPopupOpen || pathname === '/') ? 'navigation__light' : ''}`} >Начать пользоваться умным домом</span>
              </div>
          }
        </div>
      </nav>
    </ >

  );
}

export default Navigation;