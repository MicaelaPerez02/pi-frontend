import React from 'react';

function FeaturesDetail(props) {
    return (
        <>
            <h3 className='detailFeatureTitle'>¿Qué ofrece este lugar?<hr className='hrFeatureDetail' /></h3>
            <div className='detailFeaturesContainer'>
                {props.features.map((feature, index) => (
                    <ul className='detailFeatureUl' key={index}>
                        <li>{feature.icon} {feature.description}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default FeaturesDetail;