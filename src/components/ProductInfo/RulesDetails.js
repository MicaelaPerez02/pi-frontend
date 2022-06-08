import React from 'react';
import "../../styles/RulesDetails.css";

function RulesDetails() {
    return (
        <div className="rulesDetailsContainer">
            <div className="rulesDetailOne">
                <h2 className="rulesDetailTitle">¿Qué tenes que saber?</h2>
                <h3 className="rulesDetailSubtitle">Normas de la casa</h3>
                <p>Checkout: 10:00</p>
                <p>No se permiten fiestas</p>
                <p>No se permite fumar</p>
            </div>
            <div className="rulesDetailTwo">
                <h3 className="rulesDetailSubtitle">Salud y seguridad</h3>
                <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
                <p>Detector de humo</p>
                <p>Deposito de seguridad</p>
            </div>
            <div className='rulesDetailThree'>
                <p>Agrega las fechas de tu viaje para obtener los detalles de cancelación de esta estadía</p>
            </div>
        </div>
    )
}

export default RulesDetails;