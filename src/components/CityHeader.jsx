import React from 'react';
import '../styles/CityHeader.css';

function CityHeader(props) {
  return (
    <div id='CityHeader'>
      <div id='city-header-container' class='limit-width'>
        <ul id='city-header-nav'>
          <li id='current-country-tab'>
            <a href='/en/th/thailand-weather'>
              Thailand Weather
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CityHeader;
