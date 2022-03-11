import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
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
    <div>
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
    </div>
  );
}

export default Navigation;