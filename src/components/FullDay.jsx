import React from 'react';
import '../styles/FullDay.css';

/*
 * Returns a day of weather info
 */
function FullDay(props) {
  const active = props.active ? ' active' : '';

  // If the day being rendered is today, change day name to "today"
  let dayName = props.date.toLocaleDateString('en-US', { weekday: 'short' });
  if (props.date.getDate() === new Date().getDate()) {
    if (props.date.getHours() < 17) {
      dayName = 'Today';
    } else {
      dayName = 'Tonight';
    }
  }

  const date = props.date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

  const day = (
    <div className={'FullDay' + active}>
      <div className='day'>{dayName}</div>
      <div className='date'>{date}</div>
      <div className='weather-image icon'></div>
      <div className='temp'>
        <span className='high-temp'>{props.high}&deg;</span>
        <span className='low-temp'>/{props.low}&deg;</span>
      </div>
      <div className='weather-description'>{props.description}</div>
      <a href='/en/th/bangkok/318849/daily-weather-forecast/318849?day=2' className='more-button'>More</a>
    </div>
  );

  return day;

}

export default FullDay;
