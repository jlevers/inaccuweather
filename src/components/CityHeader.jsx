import React from 'react';
import '../styles/CityHeader.css';

function CityHeader(props) {
  return (
    <div id='CityHeader'>
      <ul className='city-header-nav limit-width'>
          <li id='current-country-tab' className='left left-border'>
            <a href='/en/th/thailand-weather'>
              Thailand Weather
            </a>
          </li>
          <li id='country-dropdown-tab' className='left'>
            <a href='#'>
              <span className='arrow'></span>
            </a>
          </li>
          <li id='current-city-tab' className='left active'>
            <a href='/en/th/bangkok/318849/weather-forecast/318849'>
              <span className='current-city'>Bangkok, Thailand</span>
              <span className='weather-icon'></span>
              <span className='local-temp'>91&deg;F</span>
              <span className='more-info-arrow'></span>
            </a>
          </li>
          <li id='locations-dropdown-tab' className='left'>
            <a href='#'>
              <span className='arrow'></span>
            </a>
          </li>
          <li id='lifestyle-dropdown-tab' className='right'>
            <a href='#'>
              <span className='arrow'></span>
            </a>
          </li>
          <li id='special-forecasts-dropdown-tab' className='right left-border'>
            <a href='/en/th/bangkok/318849/allergies-weather/318849'>
              <div id='special-forecast-icon' className='allergies'></div>
              <span id='special-forecast-label'>Allergies</span>
              <span>: </span>
              <span id='special-forecast-rating' className='forecast-extreme'>Extreme</span>
            </a>
          </li>
        </ul>
    </div>
  );
}

export default CityHeader;
