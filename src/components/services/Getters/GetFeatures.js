import React, { useState, useEffect } from 'react';
import { useResolvedPath } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

function GetFeatures() {
    const { data, isLoaded } = useFetch(`/features/allFeatures`);
    const [checked, setChecked] = useState([]);

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked + event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 9);
        }
        setChecked(updatedList);

        localStorage.setItem('featurePost', updatedList);
    };

    const isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

    const featuresList =
        data.map((feature, index) => {
            return (
                <section className='infoCheckbox'>
                    <label>{feature.description}</label>
                    <input type="checkbox" value={feature.id} id={feature.description} key={index} className={isChecked(feature)} onChange={handleCheck} />
                </section>
            )
        })

    const ids = data.map(id => {
        return id.id;
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;

    return (
        <fieldset className='fieldsetCreateProductCheckbox'>
            <legend>Características</legend>
            {featuresList}
            {localStorage.setItem("maxIdFeatures", maxIdPlus)}
        </fieldset>
    )
}

export default GetFeatures