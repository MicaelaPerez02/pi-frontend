import React from 'react';
import useFetch from '../../../hooks/useFetch';

function GetRules() {
    const { data, isLoaded } = useFetch(`/rules/allRules`);
    let key = 0;

    const rulesList =
        data.map((rules, index) => {
            return (
                <option value={rules.id} key={index}>{rules.description}</option>
            )
        })

    const ids = data.map(id => {
        return id.id;
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;

    return (
        <form>
            <label for="Reglas">Reglas</label>
            <select id="Reglas" key={key++}>
                {rulesList}
                {localStorage.setItem('maxIdRules', maxIdPlus)}
            </select>
        </form>
    )
}

export default GetRules;