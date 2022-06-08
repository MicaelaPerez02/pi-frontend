import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import '../../styles/Header.css';

function Header(props) {

    return (
        <div className='header'>
            <div className='header_container'>
                <div className="header_logo_motto">
                    <Link to='/'>
                        <img
                            className='header_logo'
                            src="https://bucket-pig6.s3.us-east-2.amazonaws.com/Logos+Homu/Mesa+de+trabajo+9.png"
                            alt='Logo Empresa'
                        />
                    </Link>
                    <p className='header_motto'>Estas en el lugar correcto</p>
                </div>
                <Sidebar buttonLogin={localStorage.getItem("email") ? localStorage.getItem("email") : "Iniciar Sesion"} />
            </div>
        </div>
    )
}

export default Header;