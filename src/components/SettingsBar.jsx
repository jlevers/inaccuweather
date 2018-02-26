import React, { Component } from 'react';
import CountryChooser from './CountryChooser.jsx';
import '../styles/SettingsBar.css';

class SettingsBar extends Component {
  render() {
    const breadcrumbs = this.props.breadcrumbs;

    return (
      <div className='SettingsBar'>
        <div className='settings-bar-container limit-width'>
          <div className='location-settings'>

            {/* Display country flag and country selector*/}
            <CountryChooser />

            {/* Display location breadcrumbs */}
            <ul className='country-breadcrumbs'>
              <li className='first'>{breadcrumbs.world}</li>
              <li>{breadcrumbs.continent}</li>
              <li>{breadcrumbs.country}</li>
              <li>{breadcrumbs.region}</li>
              <li className='last'>{breadcrumbs.city}</li>
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

  onHover() {

  }
}

export default SettingsBar;
