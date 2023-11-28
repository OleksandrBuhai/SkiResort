
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useLocation } from 'react-router-dom';

import './style.css';

export default function Description() {
  const location = useLocation();
  const { img, description, about, price } = location.state;
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='background'>
      <div className='contentProductContainer'>
        <div className='back-link'>
          <Link to='/' style={{ cursor: 'pointer' }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
        <div className='imgProductContainer' data-aos="fade-right">
          <img src={img} alt='Product' />
        </div>
        <div className='textProductContainer' data-aos="fade-left">
          <h2>{description}</h2>
          {about ? <span>About: {about}</span> : ''}
          <span>Price: {price}</span>
          <div>
            <h3>Select a Date</h3>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              wrapperClassName="date-picker-wrapper"
              calendarClassName="date-picker-calendar"
            />
            {selectedDate && (
              <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
