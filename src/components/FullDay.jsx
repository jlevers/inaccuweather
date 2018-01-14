import React from 'react';

/*
 * Returns a day of weather info
 */
function FullDay(props) {
    return (
        <div className="FullDay">
            <div className='date'>{props.date}</div>
            {/* <img src={} className='Weather-type' /> */}
            <div className='highTemp'>{props.high}</div>
            <div className='lowTemp'>{props.low}</div>
            <div className='weatherDescription'>{props.description}</div>
        </div>
    );
}

export default FullDay;
