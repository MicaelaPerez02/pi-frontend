import React from 'react';
import { Link } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go';
import CalendarDetail from '../../ProductInfo/CalendarDetail';

function ReservationDetail(props) {
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
                <CalendarDetail className="reservationCalendarComponent" />
            </div>
            <div className='reservationCheckInHour'>
                <h4 className='reservationTitle'>Tu horario de llegada</h4>
            </div>
        </div>
    )
}

export default ReservationDetail;