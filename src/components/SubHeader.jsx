import React from 'react';
import CityHeader from './CityHeader.jsx';
import SubNav from './SubNav.jsx';
import '../styles/SubHeader.css';

function SubHeader(props) {
  return (
    <div id='SubHeader'>
      <CityHeader />
      <SubNav />
    </div>
  );
}

export default SubHeader;
