import React from 'react';
import '../styles/Body.css';
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';
import 'react-calendar/dist/Calendar.css';

function Body() {
    const currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

    return (
        <div className='body_container'>
            <p className='body_title'>Buscar ofertas en hoteles, casas y mucho más</p>
            <div className='body_input_container'>
                <input type='text' placeholder='Seleccione el destino' className='body_input' />
                <DateRangePickerComponent placeholder="Seleccione la fecha" className='body_input' min={currentDate} format='dd-MMM-yyyy'/>
                <button className='body_button'>Buscar</button>
            </div>
        </div>
    )
}
export default Body;