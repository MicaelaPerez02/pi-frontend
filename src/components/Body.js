import React from 'react';
import '../styles/Body.css';
import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Today } from '@mui/icons-material';

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
                <Calendar onChange={onChange} value={value} className='body_input' showDoubleView={true} />
                <button className='body_button'>Buscar</button>
            </div>
        </div>
    )
}
export default Body;