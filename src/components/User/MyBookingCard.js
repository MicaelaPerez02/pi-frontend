import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

function MyBookingCard(props) {
    return (
        <div className="reservationCardHotel">
            <p className="reservationCardTitle">Detalle de la reserva</p>
            <div className="reservationCardInfo">
                <div className="reservationCardImage">
                    <img
                        src={props.url}
                        alt={props.title}
                        className="reservationCardImage"
                    />
                </div>
                <div className="reservationCardInfoFlex">
                    <p className="reservationCardCategory">{props.categories}</p>
                    <p className="reservationCardName">{props.title}</p>
                    <span className="reservationRating">
                        {Array(props.rating)
                            .fill()
                            .map((_, index) => (
                                <p key={index} className="reservationStars">
                                    ⭐
                                </p>
                            ))}
                    </span>
                    <p className="reservationCities">
                        <FaMapMarkerAlt className="productIconMap" />
                        {props.cities}
                    </p>
                    <hr className="hrReservation"></hr>
                    <div className="reservationCheckInOutContainer">
                        <p className="reservationCheckInOut">Check in </p>
                        <span>{props.start_date}</span>
                    </div>
                    <hr className="hrReservation"></hr>
                    <div className="reservationCheckInOutContainer">
                        <p className="reservationCheckInOut">Check out</p>
                        <span>{props.finish_date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBookingCard;