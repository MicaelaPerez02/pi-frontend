import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

function CardCities(props) {
    const { data, isLoaded } = useFetch(`/cities/allCities`);
    let history = useNavigate();

    function handleChange(event) {
        console.log(localStorage.setItem('cities', event.target.value));
        console.log(event.target.value);
    }

    const citiesList =
        data.map((city, index) => {
            return (
                <>
                    <option
                        value={city.id}
                        key={index}
                    >{city.name}, {city.country}
                    </option>
                </>
            )
        })

    return (
        <>
            <Link to={"/cities/" + localStorage.getItem("cities")} >
                <form className='form_InputSelect'>
                    <select id="city" name="city" className='form_select' defaultValue={'DEFAULT'} onChange={handleChange}>
                        <option className="form_option" disabled hidden>Selecciona el destino</option>
                        {citiesList}
                    </select>
                </form>
            </Link>
        </>
    )
}

export default CardCities;