import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import "../../styles/CalendarDetail.css";

function CalendarDetail() {
    const minimumDate = {
        year: 2022,
        month: 7,
        day: 8
    };

    const maximumDate = {
        year: 2022,
        month: 8,
        day: 22
    }

    return (
        <Calendar
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            showDoubleView={true}
            selectRange={true}
        />
    );
};

export default CalendarDetail;