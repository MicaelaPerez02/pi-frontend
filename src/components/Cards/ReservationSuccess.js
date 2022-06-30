import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import "../../styles/Components/ReservationSuccess.css";

function ReservationSuccess() {
    return (
        <div className="reservationSuccess">
            <Header />
            <div className='reservationSuccessContainer'>
                <IoIosCheckmarkCircle className='reservationSuccessIcon' />
                <h2>¡Muchas gracias!</h2>
                <p>Su reserva se ha realizado con éxito</p>
                <button>
                    <Link to="/">OK</Link>
                </button>

            </div>
            <Footer />
        </div>
    )
}

export default ReservationSuccess;