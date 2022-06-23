import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import "../../styles/CalendarDetail.css";

function CalendarDetail() {
    return (
        <Calendar
            showDoubleView={true}
            selectRange={true}
            minDate={new Date()}
            maxDate={new Date(2023, 11, 16)}
            onChange={(date) => {
                localStorage.setItem('start_date', JSON.stringify((date[0])));
                localStorage.setItem('finish_date', JSON.stringify((date[1])))
            }}
        />
    );

};

export default CalendarDetail;