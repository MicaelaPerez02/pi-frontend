import React from 'react';
import DateRangePicker from 'rsuite/DateRangePicker';
import useFetch from '../../hooks/useFetch';
import '../../styles/Navbar.css';
import '../../styles/DatePickerLibrary.css';
import 'rsuite/dist/rsuite.min.css';
import { useParams } from 'react-router-dom';
import CardCities from './CardCities';

function Navbar(props) {
    const { data, isLoaded } = useFetch(`/cities/allCities`);
    const { citiesId } = useParams();

    return (
        <>
            <div className='body_container'>
                <p className='body_title'>Buscar ofertas en hoteles, casas y mucho más</p>
                <div className='body_input_container'>
                    <CardCities 
                        name={props.name}
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