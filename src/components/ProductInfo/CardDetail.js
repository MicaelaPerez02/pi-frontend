import React from 'react';
import { GoChevronLeft } from "react-icons/go";
import "../../styles/ProductDetails.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from 'react-icons/fa';
import CarrouselProduct from './CarrouselProduct';
import CalendarDetail from './CalendarDetail';
import CalendarDetailResponsive from './CalendarDetailResponsive';
import MapDetail from './MapDetail';
import RulesDetails from './RulesDetails';
import FeaturesDetail from './FeaturesDetail';
import Images from './Images';

function CardDetail(props) {
    return (
        <div>
            <div className="detailContainer">
                <div className="detailHeaderContainer">
                    <div className="detailHeader">
                        <p className='detailCategories'>{props.categories}</p>
                        <strong className='detailTitle'>{props.title}</strong>
                    </div>
                    <a href="/">
                        <GoChevronLeft className='detailIcon' />
                    </a>
                </div>
            </div>
            <div className="detailCityContent">
                <div className='detailCity'>
                    <p className='detailCityTitle'> <FaMapMarkerAlt className='detailIconMap' />{props.cities}</p>
                    <div className='detailOpinion'>
                        <span className="detailRating">{
                            Array(props.rating)
                                .fill()
                                .map((_, index) => (
                                    <p key={index} className="detailStars">⭐</p>
                                ))
                        }</span>
                        <p className='detailReview'>{props.review}</p>
                    </div>
                </div>
            </div>
            <div className='detailCarrouselContainer'>
                <CarrouselProduct className='detailCarrousel'
                    url={props.url}
                />
                <div className='detailImageGalery'>
                    <Images 
                        key={props.id}
                        url={props.url}
                        title={props.title}
                        id={props.id}
                    />
                </div>
            </div>
            <div className='detailDescription'>
                <p className='detailDescriptionSlogan'>{props.title}</p>
                <p className='detailDescriptionInfo'>{props.description} <span className='detailWatchMore'>...ver más</span></p>
            </div>
            <div className='detailFeatures'>
                <FeaturesDetail 
                    features={props.features}
                />
            </div>
            <div className='detailCalendar'>
                <h3 className='detailCalendarTitle'>Fechas disponibles <hr className='hrProdDetail'></hr></h3>
                <div className="detailCalendarFlex">
                    <CalendarDetail className="detailCalendarDisplay" />
                    <div className="detailCalendarDouble">
                        <CalendarDetailResponsive className="detailCalendarDisplayDos" />
                    </div>
                </div>
                <div className="detailCalendarReservationContainer">
                    <p className="detailInfoReservation">Agrega tus fechas de viajes para obtener precios exactos</p>
                    <Link to={"/product" + "/" + props.title + "/reservation" } style={{textDecoration: "none"}}>
                    <button className="detailButtonReservation">Iniciar reserva</button>
                    </Link>
                </div>
            </div>
            <div className='detailMap'>
                <MapDetail cities={props.cities}
                    map_url={props.map_url} />
            </div>
            <div className='detailRules'>
                <RulesDetails />
            </div>
        </div >
    )
}

export default CardDetail;