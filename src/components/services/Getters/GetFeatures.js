import React, { useState, useContext } from 'react';
import useFetch from '../../../hooks/useFetch';
import ContextCheckbox from '../checkboxContext';

function GetFeatures(props) {
    const { data, isLoaded } = useFetch(`/features/allFeatures`);
    const [checked, setChecked] = useState([]);
    const { checkboxArray, setCheckboxArray } = useContext(ContextCheckbox);
    let { index, setIndex } = useState(0);
    // Add/Remove checked item from list

    let handleCheck = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, + event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);

        props.funct(updatedList);
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

export default GetFeatures;