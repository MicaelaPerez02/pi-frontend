import React, { useState } from 'react';
import useFetch from '../../../hooks/useFetch';

function GetFeatures() {
    const { data, isLoaded } = useFetch(`/features/allFeatures`);
    const [feature, setFeature] = useState(false);

    const selectFeature = () => {
        setFeature(prevState => !prevState);
    }

    const featuresList =
        data.map((feature, index) => {
            return (
                <section className='infoCheckbox'>
                    <label>{feature.description}</label>
                    <input type="checkbox" value={feature.description} id={feature.description} key={index} className="inputCheckbok" />
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