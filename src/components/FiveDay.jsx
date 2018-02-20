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

    this.end = this.props.start + this.props.step;
  }

  // Render a FullDay element with its relevant weather info
  renderFullDay(i) {
    return (
      <FullDay date={this.state.days[i].date}
        high={this.state.days[i].high}
        low={this.state.days[i].low}
        description={this.state.days[i].description}
        active={i === this.props.active}
      />
    );
  }

  render() {

    let dayList = [];

    // Iterate over 5 days
    for (let i = 0; i < this.props.step; i++) {
      let day = [];
      let classes = [];

      // If it's the first day in the list, add class 'first' and back arrow if appropriate
      if (i === 0) {
        classes.push('first');
        day.push(
          this.props.prev && <a className='left-arrow icon' href={'/en/th/bangkok/318849/daily-weather-forecast/318849?day=' + (this.props.start - this.props.step)}>
              Last {this.props.step} days
          </a>
        );
      }

      // If it's the last day in the list, add class 'last' and forward arrow if appropriate
      if (i === 4) {
        classes.push('last');
        day.push(
          this.props.next && <a className='right-arrow icon' href={'/en/th/bangkok/318849/daily-weather-forecast/318849?day=' + (this.props.start + this.props.step)}>
              Next {this.props.step} days
          </a>
        );
      }

      day.push(this.renderFullDay(i));
      dayList.push(<li className={classes.join(' ')}>{day}</li>);
    }

    return (
      <ul className='FiveDay main-body'>
        {dayList}
      </ul>
    )
  }
}

export default FiveDay;
