import React from 'react';
import { GoChevronLeft } from "react-icons/go";
import "../../styles/Components/ProductDetails.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import CarrouselProduct from './CarrouselProduct';
import CalendarDetail from './CalendarDetail';
import CalendarDetailResponsive from './CalendarDetailResponsive';
import MapDetail from './MapDetail';
import RulesDetails from './RulesDetails';
import CancelationDetail from './CancelationDetail';
import SafetiesDetail from './SafetiesDetail';
import FeaturesDetail from './FeaturesDetail';
import ShareSocialMedia from './ShareSocialMedia';
import Images from './Images';

function CardDetail(props) {
    const handleClick = () => {
        localStorage.setItem("buttonReservationClick", true);
    }

    return (
        <div>
            <div className="detailContainer">
                <div className="detailHeaderContainer">
                    <div className="detailHeader">
                        <p className='detailCategories'>{props.categories}</p>
                        <strong className='detailTitle'>{props.title}</strong>
                    </div>
                    <Link to="/">
                        <div className='detailIconContainer'>
                            <GoChevronLeft className='detailIcon' />
                        </div>
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
                                .map((_, index) => (
                                    <p key={index} className="detailStars"><AiFillStar /></p>
                                ))
                        }</span>
                        <p className='detailReview'>{props.review}</p>
                    </div>
                </div>
                <div className="detailSocialMedia">
                    <ShareSocialMedia />
                </div>
            </div>
            <div className='detailCarrouselContainer'>
                <CarrouselProduct className='detailCarrousel'
                    url={props.url}
                />
            </div>
            <div>
                <Images
                    key={props.id}
                    url={props.url}
                    title={props.title}
                    id={props.id}
                />
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
                </div>
                <div className="detailCalendarFlexDesktop">
                    <div className="detailCalendarDouble">
                        <CalendarDetailResponsive className="detailCalendarDisplayDos" />
                    </div>
                    <div className="detailCalendarReservationContainer">
                        <div className='detailCalendarReservationFlex'>
                            <p className="detailInfoReservation">Agrega tus fechas de viajes para obtener precios exactos</p>
                            <div className='detailButtonReservationDiv'>
                                {localStorage.getItem("username") == null ? <Link to="/login">
                                    <button className="detailButtonReservation" onClick={handleClick}> Iniciar reserva</button> </Link> :
                                    <Link to={"/product/" + props.title + "/reservation"}>
                                        <button className="detailButtonReservation"> Iniciar reserva</button>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detailMap'>
                <MapDetail cities={props.cities}
                    map_url={props.map_url} />
            </div>
            <div className='detailRules'>
                <div className="rulesDetailsContainer">
                    <h2 className="rulesDetailTitle">¿Qué tenes que saber? <hr className='hrRuleDetail' /></h2>
                    <div className='rulesDetailContainerFlex'>
                        <div className='rulesDetailFlex'>
                            <div className="rulesDetailOne">
                                <RulesDetails
                                    rules={props.rules}
                                />
                            </div>
                            <div className="rulesDetailList">
                                <SafetiesDetail
                                    safeties={props.safeties}
                                />
                            </div>
                        </div>
                        <div className='rulesDetailThree'>
                            <CancelationDetail
                                cancellations={props.cancellations}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;