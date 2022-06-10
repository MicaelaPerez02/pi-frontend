import React from 'react';
import { BiWifi } from 'react-icons/bi';
import { RiParkingFill } from 'react-icons/ri';
import { GiGymBag } from 'react-icons/gi';
import { FaHotjar, FaTemperatureHigh } from 'react-icons/fa';

function FeaturesDetail(props) {
    return (
        <>
            <h3 className='detailFeatureTitle'>¿Qué ofrece este lugar?<hr className='hrFeatureDetail' /></h3>
            <div className='detailFeaturesContainer'>
                {props.features.map((feature, index) => (
                    <ul className='detailFeatureUl' key={index}>
                        <li className='detailFeatureLi'><BiWifi className='detailFeatureIcon' /> Wi-Fi: {feature.wi_fi}</li>
                        <li className='detailFeatureLi'><RiParkingFill className='detailFeatureIcon' /> Estacionamiento: {feature.parking}</li>
                        <li className='detailFeatureLi'><FaTemperatureHigh className='detailFeatureIcon' /> Aire Acondicionado: {feature.air_conditioning}</li>
                        <li className='detailFeatureLi'><FaHotjar className='detailFeatureIcon' />Calefacción: {feature.heating}</li>
                        <li className='detailFeatureLi'><GiGymBag className='detailFeatureIcon' />Gimnasio: {feature.gym}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default FeaturesDetail;