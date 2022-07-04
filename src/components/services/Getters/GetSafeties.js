import React from 'react'
import useFetch from '../../../hooks/useFetch';

function GetSafeties() {
    const { data, isLoaded } = useFetch(`/safeties/allSafeties`);
    let key = 0;

    const safetiesList =
        data.map((safety, index) => {
            return (
                <option value={safety.id} key={index}>{safety.description}</option>
            )
        })

    const ids = data.map(id => {
        return id.id;
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;

    return (
        <form>
            <label for="Salud y seguridad">Salud y seguridad</label>
            <select id="Salud y seguridad" key={key++}>
                {safetiesList}
                {localStorage.setItem('maxIdSafeties', maxIdPlus)}
            </select>
        </form>
    )
}

export default GetSafeties;