import React from 'react';
import '../styles/Body.css';
import { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import DateRangePicker from 'rsuite/DateRangePicker';
import Categories from './Categories';
import Cards from './Cards';
import data from '../utils/city.json';

function Body() {
    return (
        <>
            <div className='body_container'>
                <p className='body_title'>Buscar ofertas en hoteles, casas y mucho más</p>
                <div className='body_input_container'>
                    <form className='form_InputSelect'>
                        <select id="city" name="city" className='form_select' defaultValue={'DEFAULT'}>
                            <option className="form_option" value="DEFAULT" disabled hidden>Selecciona el destino</option>
                            {data.city.map((item, index) => (
                                <option key={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </form>
                    <DateRangePicker placeholder="Seleccione el rango de fechas" className='calendar_desktop' format='dd-MM-yyyy' />
                    <DateRangePicker placeholder="Seleccione el rango de fechas" oneTap showOneCalendar hoverRange="week" format='dd-MM-yyyy' className='calendar_mobile' />
                    <button className='body_button'>Buscar</button>
                </div>
            </div>
            <div className='categories'>
                <Categories />
            </div>
            <div className='cards'>
                <Cards />
            </div>
        </>
    )
}
export default Body;