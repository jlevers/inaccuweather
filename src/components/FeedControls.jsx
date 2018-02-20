import React from 'react';
import '../styles/FeedControls.css';

function FeedControls(props) {

  let content = (
    <div className='FeedControls main-body feature-element'>
      <div className='left'>
        <span className='current-range'>{props.start} - {props.end} of {props.maxPredictionSpan} days&nbsp;|&nbsp;</span>
        <span className='full-forecast'>
          <a href='/en/th/bangkok318849/month/318849?view=table'>
            All {props.maxPredictionSpan} days
          </a>
        </span>
      </div>
      <div className='right'>
        {props.prev && <div className='prev-5'>
          <a href='/en/th/bangkok/318849/daily-weather-forecast/318849?day=1'>
            <span className='arrow-left'></span>
            <span>Prev {props.step}</span>
          </a>
        </div> }
        {props.next && <div className='next-5'>
          <a href='/en/th/bangkok/318849/daily-weather-forecast/318849?day=11'>
            <span>Next {props.step}</span>
            <span className='arrow-right'></span>
          </a>
        </div> }
      </div>
    </div>
  );

  return content;
}

export default FeedControls;
