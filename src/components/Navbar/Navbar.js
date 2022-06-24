import React from 'react';
import DateRangePicker from 'rsuite/DateRangePicker';
import "../../styles/Components/Navbar.css";
import '../../styles/Accesories/DatePickerLibrary.css';
import 'rsuite/dist/rsuite.min.css';
import CardCities from '../Cards/CardCities';

function Navbar(props) {
    return (
        <>
            <div className='body_container'>
                <p className='body_title'>Buscar ofertas en hoteles, casas y mucho más</p>
                <div className='body_input_container'>
                    <CardCities
                    />
                    <DateRangePicker placeholder="Seleccione el rango de fechas" className='calendar_desktop' format='dd-MM-yyyy' />
                    <DateRangePicker placeholder="Seleccione el rango de fechas" oneTap showOneCalendar hoverRange="week" format='dd-MM-yyyy' className='calendar_mobile' />
                    <button className='body_button'>Buscar</button>
                </div>
            </div>
        </>
    )
}
export default Navbar;