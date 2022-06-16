import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import "../../styles/CalendarDetail.css";

function CalendarDetail() {
    return (
        <Calendar
            selectRange={true}
        />
    );
};

export default CalendarDetail;