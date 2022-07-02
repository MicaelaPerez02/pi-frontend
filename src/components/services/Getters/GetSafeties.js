import React from 'react'
import useFetch from '../../../hooks/useFetch';

function GetSafeties() {
    const { data, isLoaded } = useFetch(`/safeties/allSafeties`);

    const safetiesList =
        data.map((safety, index) => {
            return (
                <option value={safety.id} type="textarea">{safety.description}</option>
            )
        })

    return (
        <table>
            <th>Safeties</th>
            {safetiesList}
        </table>
    )
}

export default GetSafeties;