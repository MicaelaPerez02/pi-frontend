import React from 'react';
import '../styles/Body.css';
import { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import DateRangePicker from 'rsuite/DateRangePicker';
import Categories from './Categories';
import Cards from './Cards';
import data from '../utils/city.json';

function Body() {
    const [setDate] = useState(new Date());
    return (
        <>
            <div className='body_container'>
                <p className='body_title'>Buscar ofertas en hoteles, casas y mucho más</p>
                <div className='body_input_container'>
                    <form className='form'>
                        <select id="city" name="city" className='form_select'>
                            <option className="form_option" value="" disabled selected hidden>Selecciona el destino</option>
                            {data.city.map((item, index) => (
                            <option key={item.id}>{item.name}</option>
                        ))}
                        </select>
                    </form>
                    <DateRangePicker placeholder="Select Date Range" className='calendar_desktop' />
                    <DateRangePicker placeholder="Select Date Range" oneTap showOneCalendar hoverRange="week" ranges={[]} className='calendar_mobile' />
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