import React, { Component } from 'react';
import SubNav from './SubNav.jsx';
import DayDetailInfo from './DayDetailInfo.jsx';
import '../styles/DayDetails.css';

class DayDetails extends Component {
  constructor(props) {
    super(props);

    this.detailProps = {
      mainTemp: 82,
      unrealFeelTemp: 86,
      weatherDescription: 'Partly sunny',
      wind: {
        direction: 'ENE',
        speed: 12
      },
      humidity: 47,
      pressure: {
        pressure: 29.94,
        change: false
      },
      uvIndex: 6,
      cloudCover: 35,
      ceiling: 30000,
      dewPoint: 16,
      visiblity: 10
    };
  }

  render() {
    return (
      <div className='DayDetails main-body'>
        <SubNav width='parent-width'>
          <li className='left-border active'>
            <a href='/en/th/bangkok/318849/current-weather/318849'>
              <span>Now</span>
            </a>
          </li>
          <li>
            <a href='/en/th/bangkok/318849/daily-weather-forecast/318849'>
              <span>Daily</span>
            </a>
          </li>
          <li>
            <a href={'/en/th/bangkok/318849/daily-weather-forecast/318849?day=' + this.props.start}>
              <span>Hourly</span>
            </a>
          </li>
          <li>
            <a href='/en/th/bangkok/318849/hourly-weather-forecast/318849'>
              <span>Morning</span>
            </a>
          </li>
          <li>
            <a href='/en/th/bangkok/318849/afternoon-weather-forecast/318849'>
              <span>Afternoon</span>
            </a>
          </li>
          <li>
            <a href='/en/th/bangkok/318849/evening-weather-forecast/318849'>
              <span>Evening</span>
            </a>
          </li>
          <li>
            <a href={'/en/th/bangkok/318849/overnight-weather-forecast/318849?day=' + this.props.start}>
              <span>Overnight</span>
            </a>
          </li>
        </SubNav>
        <DayDetailInfo
          detailProps={this.detailProps}
        />
      </div>
    );
  }
}

export default DayDetails;
