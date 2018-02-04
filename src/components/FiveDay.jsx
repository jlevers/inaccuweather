import React, { Component } from 'react';
import datesBetween from 'dates-between';
import FullDay from './FullDay.jsx';
import '../styles/FiveDay.css';

class FiveDay extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    // Get dates from today until 5 days from now
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 5);
    const dates = Array.from(datesBetween(startDate, endDate))

    // Map dates to days in state
    this.state.days = dates.map(function(value, index) {
      return ({
        date: dates[index],
        high: 90,
        low: 80,
        description: 'Mostly sunny and beautiful'
      });
    }, this);
  }

  // Render a FullDay element with its relevant weather info
  renderFullDay(i) {
    return (
      <FullDay date={this.state.days[i].date}
        high={this.state.days[i].high}
        low={this.state.days[i].low}
        description={this.state.days[i].description}
        active={this.state.days[i].date.getDate() === new Date().getDate()}
      />
    );
  }

  render() {
    return (
      <ul className='FiveDay main-body'>
        <li className='first'>
          {this.props.prev && <a className='left-arrow icon' href={'/en/th/bangkok/318849/daily-weather-forecast/318849?day=' + (this.props.start - this.props.step)}>
              Last {this.props.step} days
          </a>}
          {this.renderFullDay(0)}
        </li>
        <li>{this.renderFullDay(1)}</li>
        <li>{this.renderFullDay(2)}</li>
        <li>{this.renderFullDay(3)}</li>
        <li className='last'>
          {this.renderFullDay(4)}
          {this.props.next && <a className='right-arrow icon' href={'/en/th/bangkok/318849/daily-weather-forecast/318849?day=' + (parseInt(this.props.start) + this.props.step)}>
            Next {this.props.step} days
          </a>}
        </li>
      </ul>
    )
  }
}

export default FiveDay;
