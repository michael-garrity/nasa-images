import React, { Fragment } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = props => (
  <Fragment>
    Select Another Date:{' '}
    <DatePicker selected={props.date} onChange={props.handleChange} />
  </Fragment>
);

export default DateInput;
