import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">
          Sign Up
          </NavLink>
      </>
    );
  }

  return (
    <>
      {sessionUser ?
      <>
      <div className='navContainer'>
              <NavLink exact to="/">
                <div className='home-icon-box'>
                  <img src='https://www.freeiconspng.com/thumbs/shark-icon/shark-icon-png-9.png' className='home-icon'/>
                <div className='home-title'>
                  SoundShark
                </div>
              </div>
              </NavLink>
              {isLoaded && sessionLinks}
              <NavLink exact to="/songs/upload">
                Upload Song
              </NavLink>
              <NavLink to="/songs">
                <div className='tracks-link-div'>
                  Tracks
                  </div>
              </NavLink>
        </div>
        <div className='footer'>
        </div>
        <div className='space'>
        </div>
        </> : 
        <div className='backgroundSplash'>
          <img src='https://free4kwallpapers.com/uploads/originals/2020/07/29/black-ocean-wallpaper.jpg'>
          </img>
          <div className='welcomeContainer'>
            <h1>Welcome to the ocean.</h1>
              <h3>Start streaming your favorites with others today</h3>
              <div className='splashButtonsContainer'>
                <div className='splashLoginButton'>
                  <LoginFormModal/>
                </div>
                <div className='splashSignupButton'>
                  <SignupFormModal/>
                </div>
              </div>
          </div>
        </div> }
      
    </> 
  );
}

export default Navigation;