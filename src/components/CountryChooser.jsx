import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlagIcon from './FlagIcon.jsx';
import '../styles/CountryChooser.css';

class CountryChooser extends Component {

  render() {

    const flagCode = this.props.recent[0][0].toLowerCase();
    const flag = <FlagIcon code={flagCode} className='FlagIcon' />;
    const country = this.props.recent[0][1];

    // Solitary flag icon for when the flag is not being hovered on
    let render = (
      <div
        onMouseEnter={this.props.onHover}
        className='flag-container'>
        {flag}
      </div>
    );

    if (this.props.hover) {
      // Country selector popup (appears on hover)
      render = (
        <div onMouseLeave={this.props.onHover}
          className='flag-selector-container'>
          <div className='flag-selector-top-section'>
            <div className='current-country'>
              <span className='current-flag'>{flag}</span>
              <span>&nbsp;{country}</span>
            </div>
            <div>My Recent Countries</div>
          </div>
          <div className='recent-countries'>
            {this.recentCountries()}
            <div>
              <button className='more-countries'>More Countries</button>
            </div>
          </div>
        </div>
      );
    }

    return render;
  }

  // Renders list of recent countries
  recentCountries() {
    const recents = [];

    for (let i = 0; i < this.props.recent.length; i++) {
      recents.push(
        <li key={i}
          onClick={ (e) => {
            this.props.countryClick(this.props.recent[i][0]);
          }}
        >
          <FlagIcon
            code={this.props.recent[i][0].toLowerCase()}
            className='FlagIcon'
          />
          <span>&nbsp;{this.props.recent[i][1]}</span>
        </li>
      );
    }

    return <ul className='recent-country-list'>{recents}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    hover: state.locationSettings.flagHover,
    recent: state.locationSettings.recents
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHover: () => {
      dispatch({
        type: 'TOGGLE_HOVER'
      });
    },
    countryClick: (country) => {
      dispatch({
        type: 'CHANGE_COUNTRY',
        country
      })
    }
  }
};

CountryChooser = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryChooser);

export default CountryChooser;
