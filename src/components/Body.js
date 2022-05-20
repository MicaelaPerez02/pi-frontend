import React from 'react';
import '../styles/Body.css';
import { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import DateRangePicker from 'rsuite/DateRangePicker';

function Body() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    return (
        <div className='body_container'>
            <p className='body_title'>Buscar ofertas en hoteles, casas y mucho más</p>
            <div className='body_input_container'>
                <input type='text' placeholder='Seleccione el destino' className='body_input' />
                <DateRangePicker placeholder="Select Date Range" className='calendar_desktop'/>
                <DateRangePicker placeholder="Select Date Range" oneTap showOneCalendar hoverRange="week" ranges={[]} className='calendar_mobile'/>
                <button className='body_button'>Buscar</button>
            </div>
        </div>
    )
}
export default Body;