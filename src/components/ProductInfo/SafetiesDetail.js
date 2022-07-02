import React from 'react';
import { BsFileEarmarkRuled } from 'react-icons/bs';
import useFetch from '../../hooks/useFetch';

function SafetiesDetail() {
    const { data, isLoaded } = useFetch(`/safeties/allSafeties`);

    const safeties = data.map((safetie, index) => {
        if (localStorage.getItem('idProduct') == safetie.products.id) {
            return (
                <p>{safetie.description}</p>
            )
        }
    })

    return (
        <>
            <h3 className="rulesDetailSubtitle"><BsFileEarmarkRuled className='rulesIcon' />Salud y seguridad</h3>
            {safeties}
        </>
    )
}

export default SafetiesDetail