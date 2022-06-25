import React from 'react';
import useFetch from '../../hooks/useFetch';

function CardCities() {
    const { data, isLoaded } = useFetch(`/cities/allCities`);

    function handleChange(event) {
        localStorage.setItem('cities', event.target.value);
    }

    const citiesList =
        data.map((city, index) => {
            return (
                <>
                    <option value={city.id} key={index}>{city.name}, {city.country} </option>
                </>
            )
        })

    return (
        <>
            <form className='formInputSelect' onChange={handleChange}>
                <select id="city" name="city" className='form_select' defaultValue={'DEFAULT'} >
                    <option className="form_option" hidden >Selecciona el destino</option>
                    <option className="form_option" disabled >Selecciona el destino</option>
                    {citiesList}
                </select>
            </form>
        </>
    )
}

export default CardCities;