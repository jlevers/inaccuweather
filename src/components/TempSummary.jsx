import React, { Component } from 'react';
import DataTable from './DataTable.jsx';
import '../styles/TempSummary.css';

function TempSummary(props) {
  return (
    <div className='TempSummary feature-element main-body'>
      <div className='title'>
        <span className='feature-title'>Temperature Summary&nbsp;</span>
        <span className='feature-label time'>{new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
          })}</span>
      </div>
      <div className='temp-summary-main'>
        <DataTable
          headerVals={['', 'Temp (°F)']}
          rowTitles={['Now', 'Yesterday', 'UnrealFeel®', 'UnrealFeel® Shade', 'Wind Chill', 'Dew Point']}
          tableVals={[['77°'], ['75°'], ['76°'], ['76°'], ['77°'], ['61°']]}
        />
      </div>
      <div className='temp-summary-prev'>
      </div>
    </div>
  );
}

export default TempSummary;
