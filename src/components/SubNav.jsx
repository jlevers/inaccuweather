import React from 'react';
import '../styles/SubNav.css';

function SubNav(props) {
  return (
    <div className={'SubNav ' + props.width}>
      <div className='subnav-container limit-width'>
        <ul className='subnav-tabs'>
          {props.children}
          {/* <li className='left-border'>
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
              </li> */}
        </ul>
      </div>
    </div>
  );
}

export default SubNav;
