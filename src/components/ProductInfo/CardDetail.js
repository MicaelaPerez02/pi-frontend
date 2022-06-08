import React from 'react';
import { GoChevronLeft } from "react-icons/go";
import "../../styles/ProductDetails.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaHotjar, FaTemperatureHigh } from 'react-icons/fa';
import { BiWifi } from 'react-icons/bi';
import { RiParkingFill } from 'react-icons/ri';
import { GiGymBag } from 'react-icons/gi';

function CardDetail(props) {
    return (
        <>
            <div className="detailContainer">
                <div className="detailHeaderContainer">
                    <div className="detailHeader">
                        <p className='detailCategories'>{props.categories}</p>
                        <strong className='detailTitle'>{props.title}</strong>
                    </div>
                    <Link to="/" >
                        <GoChevronLeft className='detailIcon' />
                    </Link>
                </div>
            </div>
            <div className="detailCityContent">
                <div className='detailCity'>
                    <p className='detailCityTitle'> <FaMapMarkerAlt className='detailIconMap' />{props.cities}</p>
                    <div className='detailOpinion'>
                        <span className="detailRating">{
                            Array(props.rating)
                                .fill()
                                .map((_) => (
                                    <p key={props.id} className="detailStars">⭐</p>
                                ))
                        }</span>
                        <p className='detailReview'>{props.review}</p>
                    </div>
                </div>
            </div>
            <div className='detailCarrousel'>
                <img className="detailImageCarrousel" src={props.url} alt={props.name} />
            </div>
            <div className='detailDescription'>
                <p className='detailDescriptionSlogan'>Slogan</p>
                <p className='detailDescriptionInfo'>{props.description} <span className='detailWatchMore'>...ver más</span></p>
            </div>
            <div className='detailFeatures'>
                <h3 className='detailFeatureTitle'>¿Qué ofrece este lugar?</h3>
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
            </div>
            <br></br><br></br><br></br>
        </>
    )
}

export default CardDetail;