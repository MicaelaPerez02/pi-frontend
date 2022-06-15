import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import CalendarDetail from '../../ProductInfo/CalendarDetail';
import CalendarDetailResponsive from '../../ProductInfo/CalendarDetailResponsive';
import DropdownHours from './DropdownHours';
import hours from '../../../utils/hours';
import RulesDetails from '../../ProductInfo/RulesDetails';

function ReservationDetail(props) {
    const [value, setValue] = useState(null);

    return (
        <div className='reservationPage'>
            <div className="reservationContainer">
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
            <div className='reservationFormContainer'>
                <form className='reservationForm'>
                    <h4 className="reservationTitle">Completá tus datos</h4>
                    <div className="reservationInput">
                        <h5 className='reservationInputTitle'>Nombre</h5>
                        <input type="text" placeholder="Ingrese su nombre" className="input" />
                    </div>
                    <div className="reservationInput">
                        <h5 className='reservationInputTitle'>Apellido</h5>
                        <input name="text" placeholder="Ingrese su apellido" className="input" />
                    </div>
                    <div className="reservationInput">
                        <h5 className='reservationInputTitle'>Correo electrónico</h5>
                        <input type="email" placeholder="Ingrese su correo electrónico" className="input" />
                    </div>
                    <div className="reservationInput">
                        <h5 className='reservationInputTitle'>Ciudad</h5>
                        <input type="city" placeholder="Ingrese su ciudad" className="input" />
                    </div>
                </form>
            </div>
            <div className='reservationCalendar'>
                <h4 className='reservationTitleCalendar'>Seleccioná tu fecha de reserva</h4>
                <div className='reservationCalendarOne'>
                    <CalendarDetail className="reservationCalendarComponent" />
                </div>
                <div className='reservationCalendarComponentDouble'>
                    <CalendarDetailResponsive />
                </div>
            </div>
            <div className='reservationCheckHour'>
                <h4 className='reservationCheckHourTitle'>Tu horario de llegada</h4>
                <div className='reservationCheckHourBox'>
                    <div className='reservationCheckInfo'>
                        <AiOutlineCheckCircle className='reservationIconCheck' />
                        <p className='reservationCheckInfo'> Tu habitación va a estar lista para el check-in entre las *props* y *props*</p>
                    </div>
                    <p className='reservationCheckEstimated'>Indicá tu horario estimado de llegada</p>
                    <div className="ReservationDropdownHour">
                        <DropdownHours
                            options={hours}
                            prompt="Seleccioná tu horario"
                            value={value}
                            onChange={val => setValue(val)}
                        />
                    </div>
                </div>
            </div>
            <div className='reservationCardHotel'>
                <p className="reservationCardTitle">Detalle de la reserva</p>
                <div className='reservationCardInfo'>
                    <img src={props.images} alt={props.title} className='reservationCardImage' />
                    <p className='reservationCardCategory'>{props.categories}</p>
                    <p className='reservationCardName'>{props.title}</p>
                    <span className="reservationRating">{
                        Array(props.rating)
                            .fill()
                            .map((_, index) => (
                                <p key={index} className="reservationStars">⭐</p>
                            ))
                    }</span>
                    <p className='reservationCities'><FaMapMarkerAlt className='productIconMap' />{props.cities}</p>
                    <hr className='hrReservation'></hr>
                    <div className='reservationCheckInOutContainer'>
                        <p className='reservationCheckInOut'>Check in </p>
                        <span>*props reserva*</span>
                    </div>
                    <hr className='hrReservation'></hr>
                    <div className='reservationCheckInOutContainer'>
                        <p className='reservationCheckInOut'>Check out </p>
                        <span>*props reserva*</span>
                    </div>
                    <hr className='hrReservation'></hr>
                    <button className='reservationButtonConfirm'>Confirmar reserva</button>
                </div>
            </div>
            <div className='reservationRules'>
                <RulesDetails />
            </div>
        </div>
    )
}

export default ReservationDetail;