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
                description: 'high of 90 low of 80'
            });
        }, this);
    }

    // Render a FullDay element with its relevant weather info
    renderFullDay(i) {
        return (
            <FullDay date={this.state.days[i].date.toLocaleDateString('en-US', { weekday: 'long' })}
                    high={this.state.days[i].high}
                    low={this.state.days[i].low}
                    description={this.state.days[i].description}
            />
        );
    }

    render() {
        return (
            <ul className='FiveDay'>
                <li>{this.renderFullDay(0)}</li>
                <li>{this.renderFullDay(1)}</li>
                <li>{this.renderFullDay(2)}</li>
                <li>{this.renderFullDay(3)}</li>
                <li>{this.renderFullDay(4)}</li>
            </ul>
        )
    }
}

export default FiveDay;
