import React from 'react';
import FlagIcon from './FlagIcon.jsx';
import '../styles/SettingsBar.css';

function SettingsBar(props) {
  return (
    <div className='SettingsBar'>
      <div className='settings-bar-container limit-width'>
        <div className='location-settings'>

          {/* Display country flag */}
          <FlagIcon code={props.location.code} className='FlagIcon' />

          {/* Display location breadcrumbs */}
          <ul className='country-breadcrumbs'>
            <li className='first'>World</li>
            <li>Asia</li>
            <li>Thailand</li>
            <li>Bangkok</li>
            <li className='last'>Bangkok</li>
          </ul>
        </div>

        {/* Display language and units settings */}
        <div className='data-settings'>
          <span>English (US), &deg;F</span>
        </div>
      </div>
    </div>
  );
}

export default SettingsBar;
