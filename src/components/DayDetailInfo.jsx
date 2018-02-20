import React, { Component } from 'react';
import '../styles/DayDetailInfo.css';

function DayDetailInfo(props) {

  props = props.detailProps;

  // If props.pressureChange is true, pressure has gone up. Otherwise,
  // pressure has gone down.
  const pressureSymbol = props.pressure.pressureChange ? '↑' : '↓';
  return (
    <div className='DayDetailInfo feature-element'>
      <div className='forecast-main primary-section'>
        <div className='weather-image icon'></div>
        <div className='temp'>
          <span className='main-temp'>{props.mainTemp}&deg;</span>
          <span className='unrealfeel-temp'>UnrealFeel&reg; {props.unrealFeelTemp}</span>
        </div>
        <div className='weather-description'>
          {props.weatherDescription}
        </div>
      </div>
      <div className='forecast-details'>
        <div className='wind-viz'>
          <div className='wind-compass icon'></div>
          <div className={'wind-arrow icon ' + props.wind.direction}></div>
        </div>
        <div className='stats'>
        </div>
        <ul className='details-list feature-label'>
          <li className='wind-info'>Winds from the {props.wind.direction}</li>
          <li className='wind-info'>{props.wind.speed} mph</li>
          <li>Humidity: {props.humidity}%</li>
          <li>Pressure: {props.pressure.pressure} in {pressureSymbol}</li>
          <li>UV Index: {props.uvIndex}</li>
          <li>Cloud Cover: {props.cloudCover}%</li>
          <li>Ceiling: {props.ceiling} ft</li>
          <li>Dew Point: {props.dewPoint}&deg;F</li>
          <li>Visibility: {props.visiblity} mi</li>
        </ul>
      </div>
    </div>
  );
}

export default DayDetailInfo;
