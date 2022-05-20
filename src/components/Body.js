import React from 'react';
import '../styles/Body.css';
import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {DropdownListComponent} from '@syncfusion/ej2-react-dropdowns';

function Body() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    const [calendar, setCalendar] = useState(false);

    const showCalendar = () => setCalendar(!calendar);

    return (
        <div className='body_container'>
            <p className='body_title'>Buscar ofertas en hoteles, casas y mucho más</p>
            <div className='body_input_container'>
                <input type='text' placeholder='Seleccione el destino'  className='body_input' />
                <Calendar onChange={onChange}   value={date} className='calendar_mobile' showDoubleView={false} selectRange={true} />
                <Calendar onChange={onChange} value={date} className='calendar_desktop' showDoubleView={true} />
                <button className='body_button' onClick={showCalendar}>Buscar</button>
            </div>
        </div>
    )
}
export default Body;