import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = props => (
  <div className='date-form'>
    <label>Select Another Date: </label>
    <DatePicker
      selected={props.date}
      onChange={props.handleChange}
      popperPlacement='bottom-end'
    />
  </div>
);

export default DateInput;
