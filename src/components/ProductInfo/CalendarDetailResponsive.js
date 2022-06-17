import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import "../../styles/CalendarDetail.css";

function CalendarDetail() {
    
    return (
        <Calendar
            showDoubleView={true}
            selectRange={true}
            minDate={new Date()}
            maxDate={new Date(2023, 11, 16)}
            onChange={(date) => { console.log(date) }}
            
            
            
        />
      
    );

};

export default CalendarDetail;