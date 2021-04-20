import React from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Things from '../Things/Things';
import ProtectedRoute from '../../utils/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';
// import * as auth from '../../utils/auth';

const App = () => {

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [things, setThings] = React.useState([]);

  const history = useHistory();
  const location = useLocation();


  function handleLoginPopup() {
    setIsLoginPopupOpen(true);
  };

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    setCurrentUser({});
    history.push('/');
  };

  function handleLoginPopup() {
    setIsLoginPopupOpen(true);
  };

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
  };

  function handleLogin(email, password) {
    mainApi.authorize(email, escape(password))
      .then((data) => {
        mainApi.checkToken(data)
          .then((res) => setCurrentUser(res.data))
          .catch((err) => console.log(err));
        setLoggedIn(true);
        setIsLoginPopupOpen(false);
      })
      .catch((err) => console.log(err));
  };

  function handleRegister(name, secondName, password, email, phone) {
    mainApi.register(name, secondName, escape(password), email, phone)
      .then((res) => {
        setIsRegisterPopupOpen(false);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    if ((loggedIn === false) && location.pathname === '/things') {
      history.push('/');
    } else if (loggedIn && location.pathname === '/things') {
      history.push('/things')
    }
  }, [loggedIn, location.pathname, history]);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser({ res }); //?
          history.push('/things')
        })
        .catch((err) => console.log(err));
    }
  }, []);

  function handleTogglePopup() {
    setIsLoginPopupOpen(!isLoginPopupOpen);
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
  };

  React.useEffect(() => {
    if (loggedIn === true) {
    mainApi.getThings()
      .then((res) => {
        setCurrentUser(res[1]);
        setThings(res[0].reverse());
      })
      .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header
          loggedIn={loggedIn}
          openLogin={handleLoginPopup}
          handleLogout={handleLogout}
        />
        <Switch>
          <Route exact path='/'>
            <Main

            />
          </Route>
          <Route exact path='/things'>
            <Things
              things={things}
            />
          </Route>
          <ProtectedRoute
            path='/things'
            loggedIn={loggedIn}
          >
            {/* <Things

            /> */}
          </ProtectedRoute>
        </Switch>
        {/* <Footer /> */}
        <Register
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onRegister={handleRegister}
          onChange={handleTogglePopup}
        />
        <Login
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onLogin={handleLogin}
          onChange={handleTogglePopup}
        />
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;