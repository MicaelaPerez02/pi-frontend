import React from 'react';
import useFetch from '../../../hooks/useFetch';

function GetRules() {
    const { data, isLoaded } = useFetch(`/rules/allRules`);

    const rulesList =
        data.map((rules, index) => {
            return (
                <th value={rules.id} type="textarea" >{rules.description}</th>
            )
        })

    return (
        <table>
            <th>Reglas</th>
            {rulesList}
        </table>
    )
}

export default GetRules;