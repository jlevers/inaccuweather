import React, { Component } from 'react';
import '../styles/RiseSetWidget.css';

function RiseSetWidget(props) {
  const rise = props.planet + 'rise';
  const set = props.planet + 'set';
  return (
    <div className={'RiseSetWidget feature-element ' + props.planet}>
      <div className='feature-title'>
        {rise}/{set}
      </div>
      <ul className='rise-set-times'>
        <li><span className='feature-label'>{rise}:</span> {props.rise}</li>
        <li><span className='feature-label'>{set}:</span> {props.set}</li>
        <li><span className='feature-label'>Duration:</span> {props.duration} hr</li>
      </ul>
      <div className='day-or-night icon'></div>
    </div>
  );
}

export default RiseSetWidget;
