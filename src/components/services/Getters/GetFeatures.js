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

    return (
        <form>
            <fieldset>
                <legend>Características</legend>
                {featuresList}
            </fieldset>
        </form>
    )
}

export default GetFeatures