import React from 'react';
import CityHeader from './CityHeader.jsx';
import SubNav from './SubNav.jsx';
import '../styles/SubHeader.css';

function SubHeader(props) {
  return (
    <div className='SubHeader'>
      <CityHeader />
      <SubNav width='full-width'>
        <li className='left-border'>
          <a href='/en/th/bangkok/318849/weather-forecast/318849'>
            <span>Now</span>
          </a>
        </li>
        <li>
          <a href='/en/th/bangkok/318849/weekend-weather/318849'>
            <span>Weekend</span>
          </a>
        </li>
        <li className='active'>
          <a href='/en/th/bangkok/318849/daily-weather-forecast/318849'>
            <span>Extended</span>
          </a>
        </li>
        <li>
          <a href='/en/th/bangkok/318849/january-weather/318849'>
            <span>Month</span>
          </a>
        </li>
        <li>
          <a href='/en/th/bangkok/318849/satellite/318849'>
            <span>Satellite</span>
          </a>
        </li>
        <li className='subnav-promo left-border'>
          <a href='/en/th/news'>
            <span>Watch News</span>
          </a>
        </li>
      </SubNav>
    </div>
  );
}

export default SubHeader;
