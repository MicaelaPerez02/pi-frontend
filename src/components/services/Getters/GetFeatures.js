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
                <>
                    <label>{feature.description}</label>
                    <input type="checkbox" value={feature.description} id={feature.description} key={index} className="inputCheckbok" />
                </>
            )
        })

    const ids = data.map(id => {
        return id.id;
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;
    

    return (
        <form>
            <fieldset>
                <legend>Características</legend>
                {featuresList}
                {localStorage.setItem("maxIdFeatures", maxIdPlus)}
            </fieldset>
        </form>
    )
}

export default GetFeatures