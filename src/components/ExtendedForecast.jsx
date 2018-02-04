import React, { Component } from 'react';
import FeedControls from './FeedControls.jsx';
import FiveDay from './FiveDay.jsx';
import DayDetails from './DayDetails.jsx';

class ExtendedForecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const prevNext = this.prevAndNext();

    return (
      <div className='ExtendedForecast'>
        <FeedControls
          start={this.props.start}
          end={this.props.end}
          prev={prevNext[0]}
          next={prevNext[1]}
          step={this.props.step}
          maxPredictionSpan={this.props.maxPredictionSpan}
        />
        <FiveDay
          start={this.props.start}
          prev={prevNext[0]}
          next={prevNext[1]}
          step={this.props.step}
        />
        <DayDetails
          start={this.props.start}
        />
      </div>
    );
  }

  /*
   * Checks if there are prediction days before and/or after the current
   * prediction range, and returns a two-element array of boolean values where
   * [0] is whether or not there are more preceding prediction days, and [1] is
   * whether or not there are more proceeding prediction days.
   */
  prevAndNext() {
    const prev = this.props.start - this.props.step > 0;
    const next = this.props.end + this.props.step <= this.props.maxPredictionSpan;

    return [prev, next];
  }
}

export default ExtendedForecast;
