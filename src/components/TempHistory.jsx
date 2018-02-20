import React, { Component } from 'react';
import DataTable from './DataTable.jsx';
import '../styles/TempHistory.css';

function TempHistory(props) {

  /* const date = new Date().setDate(new Date().getDate() + props.active);*/
  const date = new Date();
  const dateString = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

  const yearAgo = new Date(date);
  yearAgo.setFullYear(date.getFullYear() - 1);

  const yearAgoString = yearAgo.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });

  return (
    <div className='TempHistory main-body feature-element primary-section'>
      <div className='title'>
        <span className='feature-title'>Temperature History&nbsp;</span>
        <span className='date'>{dateString}</span>
      </div>
      <DataTable
        headerVals={
          ['', 'Today', 'Normal', 'Record', yearAgoString]
        }
        rowTitles={['High', 'Low']}
        tableVals={[
          ['89°', '91°', 'N/A', '91°'],
          ['74°', '71°', 'N/A', '78°']
        ]}
      />
      <a href='/en/th/bangkok/318849/month/318849?view=table'>
        <span>More Historical Weather Data</span>
        <span className='arrow-right'></span>
      </a>
    </div>
  );
}

export default TempHistory;
