import React from 'react'
import useFetch from '../../../hooks/useFetch';

function GetCancellations() {
    const { data, isLoaded } = useFetch(`/cancellations/allCancellations`);
    let key = 0;

    const cancellationsList =
        data.map((cancellations, index) => {
            return (
                <option value={cancellations.id} key={index}>{cancellations.description}</option>
            )
        })

    const ids = data.map(id =>{
        return id.id;
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;


    return (
        <form>
            <label for="Políticas de cancelación">Políticas de cancelación</label>
            <select id="Politicas de cancelación" key={key++}>
                {cancellationsList}
                {localStorage.setItem("maxIdCancellation", maxIdPlus)}
            </select>
        </form>
    )
}

export default GetCancellations;