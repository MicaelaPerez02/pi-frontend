import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function CardCities() {
    const { data, isLoaded } = useFetch(`/cities/allCities`);
    let [city, setCity] = useState("");
    const navigate = useNavigate();

    function cityName() {
        data.map((city, index) => {
            if (localStorage.getItem("cities") == city.id) {
                return (
                    localStorage.setItem("cityName", city.country)
                )
            }
        })
    }

    const citiesList =
        data.map((city, index) => {
            return (
                <option value={city.id} onClick={handleClick} key={city.id}>{city.name}, {city.country} </option>
            )
        })

    function handleChange(event) {
        localStorage.setItem('cities', event.target.value);
        localStorage.setItem('cityId', city);
        cityName();
    }

    function handleClick(e) {
        navigate("/cities" + city.id)
    }

    return (
        <>
            <form className='formInputSelect' onChange={handleChange}>
                <select id="city" name="city" className='form_select' value={city} onChange={e => setCity(e.target.value)}>
                    <option className="form_option" hidden >Selecciona el destino</option>
                    <option className="form_option" disabled >Selecciona el destino</option>
                    {citiesList}
                    {localStorage.setItem("cityName", city)}
                </select>
            </form>
        </>
    )
}

export default CardCities;