import React, { Component } from 'react';
import DataTable from './DataTable.jsx';
import '../styles/TempSummary.css';

function TempSummary(props) {
  return (
    <div className='TempSummary feature-element main-body'>
      <div className='temp-summary-main primary-section'>
        <div className='title'>
          <span className='feature-title'>Temperature Summary&nbsp;</span>
          <span className='feature-label time'>{new Date().toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit'
            })}</span>
        </div>
        <DataTable
          headerVals={['', 'Temp (°F)']}
          rowTitles={['Now', 'Yesterday', 'UnrealFeel®', 'UnrealFeel® Shade', 'Wind Chill', 'Dew Point']}
          tableVals={[['77°'], ['75°'], ['76°'], ['76°'], ['77°'], ['61°']]}
        />
      </div>
      <div className='temp-summary-prev'>
        <DataTable
          headerVals={['', 'HI/LO']}
          rowTitles={['Previous 6 Hours', '', 'Previous 12 Hours', '', 'Previous 24 Hours', '']}
          tableVals={[['90°/76°'], [''], ['90°/72°'], [''], ['90°/72°'], ['']]}
          />
      </div>
    </div>
  );
}

export default TempSummary;
