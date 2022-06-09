import React from 'react';
import { BsFileEarmarkRuled } from 'react-icons/bs';
import { AiOutlineClockCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { GiHealthNormal, GiSmokeBomb } from 'react-icons/gi';
import { FaMoneyCheck } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import "../../styles/RulesDetails.css";

function RulesDetails() {
    return (
        <>
            <div className="rulesDetailsContainer">
                <h2 className="rulesDetailTitle">¿Qué tenes que saber? <hr className='hrRuleDetail' /></h2>
                <div className='rulesDetailFlex'>
                    <div className="rulesDetailOne">
                        <h3 className="rulesDetailSubtitle"><BsFileEarmarkRuled className='rulesIcon' />Normas de la casa</h3>
                        <p><span><AiOutlineClockCircle className="rulesIconList" /></span>Checkout: 10:00</p>
                        <p><AiOutlineCloseCircle className="rulesIconList" />No se permiten fiestas</p>
                        <p><AiOutlineCloseCircle className="rulesIconList" />No se permite fumar</p>
                    </div>
                    <div className="rulesDetailList">
                        <h3 className="rulesDetailSubtitle"><MdHealthAndSafety className='rulesIcon' />Salud y seguridad</h3>
                        <p><GiHealthNormal className="rulesIconList" />Se aplican las pautas de distanciamiento social y otras normas</p>
                        <p><GiSmokeBomb className="rulesIconList" />Detector de humo</p>
                        <p><FaMoneyCheck className="rulesIconList" />Deposito de seguridad</p>
                    </div>
                </div>
                <div className='rulesDetailThree'>
                    <hr className='hrRuleDetailFinal' />
                    <p>Agrega las fechas de tu viaje para obtener los detalles de cancelación de esta estadía</p>
                </div>
            </div>
        </>
    )
}

export default RulesDetails;