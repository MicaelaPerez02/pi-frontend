import React from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import "../../styles/CalendarDetail.css";

function CalendarDetail() {
    const minimumDate = {
        year: 2022,
        month: 6,
        day: 8
    };

    const maximumDate = {
        year: 2022,
        month: 6,
        day: 22
    }

    const handleDisabledSelect = disabledDay => {
        console.log('Tried selecting a disabled day', disabledDay);
    };

    return (
        <Calendar
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            onDisabledDayError={handleDisabledSelect} // handle error
            shouldHighlightWeekends
        />
    );
};

export default CalendarDetail;