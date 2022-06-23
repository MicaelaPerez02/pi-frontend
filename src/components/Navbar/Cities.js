import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import CardCities from './CardCities';

function Cities(props) {
    const { data, isLoaded } = useFetch(`/cities/allCities`);

    const cityList = data.map((city) => {
        return (
            <CardCities
                key={city.id}
                name={city.name}
                country={city.country}
                id={city.id}
            />
        )
    })

    return (
        <form className='form_InputSelect'>
                {isLoaded ? cityList : <option>Cargando...</option>}
        </form>
    )
}

export default Cities