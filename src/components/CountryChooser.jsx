import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlagIcon from './FlagIcon.jsx';
import '../styles/CountryChooser.css';

class CountryChooser extends Component {
  constructor(props) {
    super(props);
    this.flagCode = this.props.recent[0][0];
    this.country = this.props.recent[0][1];
    this.flag = <FlagIcon code={this.flagCode} className='FlagIcon' />;
  }

  render() {
    let render = (
      <div
        onMouseEnter={this.props.onHover}
        className='flag-container'>
        {this.flag}
      </div>
    );

    if (this.props.hover) {
      render = (
        <div onMouseLeave={this.props.onHover}
          className='flag-selector-container'>
          <div className='flag-selector-top-section'>
            <div className='current-country'>
              <span className='current-flag'>{this.flag}</span>
              <span>&nbsp;{this.country}</span>
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

  recentCountries() {
    const recents = [];

    for (var i = 0; i < this.props.recent.length; i++) {
      recents.push(
        <li key={i}>
          <FlagIcon
            code={this.props.recent[i][0]}
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
    }
  }
};

CountryChooser = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryChooser);

export default CountryChooser;
