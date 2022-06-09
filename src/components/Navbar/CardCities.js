import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';

function CardCities() {
    const { data, isLoaded } = useFetch(`/cities/allCities`);
    let history = useNavigate();

    function handleChange(event) {
        console.log(localStorage.setItem('cities', event.target.value));
        console.log(event.target.value);
    }

    return (
        <select id="city" name="city" className='form_select' defaultValue={'DEFAULT'} onChange={handleChange}>
            <option className="form_option" disabled hidden>Selecciona el destino</option>
            {data.map((city, index) => {
                return (
                    <option
                        value={city.id}
                        key={index}
                    >{city.name}, {city.country}
                    </option>
                )
            })}
        </select>
    )
}

export default CardCities;