import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import "../../styles/Accesories/CalendarDetail.css";

function CalendarDetail() {
    return (
        <Calendar
            selectRange={true}
            minDate={new Date()}
            maxDate={new Date(2023, 11, 16)}
            onChange={(date) => {
                localStorage.setItem('date', JSON.stringify((date[0])));
                localStorage.setItem('date2', JSON.stringify((date[1])))
            }}
        />
    );
};

export default CalendarDetail;