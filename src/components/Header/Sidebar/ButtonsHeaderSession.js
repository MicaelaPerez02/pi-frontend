import React from 'react';
import { Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';
import useFetchAuth from '../../../hooks/useFetchAuth';

function ButtonsHeaderSession() {
    return (
        <div className="buttonHeaderContainer">
            <section className="userOptions">
                <p className='nameUser'> Hola, <span>{localStorage.getItem("username")}</span> </p>
            </section>

            <section className='navTextUser'>
                <DropdownMenu />
            </section>
        </div>
    )
}

export default ButtonsHeaderSession;