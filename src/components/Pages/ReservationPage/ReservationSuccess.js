import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import "../../../styles/ReservationSuccess.css";

function ReservationSuccess() {
    return (
        <div className="reservationSuccess">
            <Header />
            <div className='reservationSuccessContainer'>
                <IoIosCheckmarkCircle className='reservationSuccessIcon'/>
                <h2>¡Muchas gracias!</h2>
                <p>Su reserva se ha realizado con éxito</p>
                <button>Ok</button>
            </div>
            <Footer />
        </div>
    )
}

export default ReservationSuccess;