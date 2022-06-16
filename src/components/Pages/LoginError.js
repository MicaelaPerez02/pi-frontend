import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import "../../styles/LoginError.css";

function LoginError() {
    return (
        <div className='loginErrorContainer'>
            <div className='loginErrorFlex'>
                <span><RiErrorWarningFill /></span>
                <p>Para realizar una reserva necesitas estar logueado</p>
            </div>
        </div>
    )
}

export default LoginError