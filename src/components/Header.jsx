import React from 'react';
import logo from '../logo.svg';
import '../styles/Header.css';

function Header(props) {
  return (
    <div className='Header'>
      <div className='header-container limit-width'>
        <div className='logo-container'>
          <a href='/'>
            <img className='logo' src={logo} alt='logo' />
          </a>
        </div>
        <div className='search-container'>
          <form className='search-bar-form' action='/en/search-locations' method='post'>
            <input className='search-bar' placeholder='Enter a location' type='text' />
            <button className='search-button' type='button'>
              <img src='https://vortex.accuweather.com/adc2010/images/slate/search-glass.svg' alt='search' />
            </button>
          </form>
        </div>
        <div className='social-media-container'>
          <ul className='social-list'>
            <li className='label-text'>Follow us on</li>
            <li className='social-icon'>
              <a className='facebook' href='https://www.facebook.com/Accuweather' target='_blank' rel='noreferrer noopener'></a>
            </li>
            <li className='social-icon'>
              <a className='twitter' href='https://twitter.com/breakingweather' target='_blank' rel='noreferrer noopener'></a>
            </li>
            <li className='social-icon'>
              <a className='instagram' href='https://instagram.com/accuweather' target='_blank' rel='noreferrer noopener'></a>
            </li>
            <li className='social-icon'>
              <a className='youtube' href='https://www.youtube.com/user/accuweather' target='_blank' rel='noreferrer noopener'></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
