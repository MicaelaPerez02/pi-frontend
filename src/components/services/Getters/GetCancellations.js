import React from 'react'
import useFetch from '../../../hooks/useFetch';

function GetCancellations() {
    const { data, isLoaded } = useFetch(`/cancellations/allCancellations`);

    const cancellationsList =
        data.map((cancellations, index) => {
            return (
                <option value={cancellations.id} type="textarea">{cancellations.description}</option>
            )
        })

    return (
        <table>
            <th>Cancellations</th>
            {cancellationsList}
        </table>
    )
}

export default GetCancellations;