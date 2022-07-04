import React from 'react';
import { BsFileEarmarkRuled } from 'react-icons/bs';
import useFetch from '../../hooks/useFetch';

function SafetiesDetail(props) {
    
    return (
        <>
            <h3 className='detailFeatureTitle'>Salud y seguridad<hr className='hrFeatureDetail' /></h3>
            <div className='detailFeaturesContainer'>
                {props.safeties.map((safetie, index) => (
                    <ul className='detailFeatureUl' key={index}>
                        <li>{safetie.description}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default SafetiesDetail