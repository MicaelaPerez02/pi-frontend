import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import Sidebar from './Sidebar';
import '../styles/Header.css';

function HeaderLogin(props) {
    return (
        <div className='header'>
            <div className='header_container'>
                <div className="header_logo_motto">
                    <Link to='/'>
                        <img
                            className='header_logo'
                            src="https://fv9-5.failiem.lv/thumb_show.php?i=p9ex3xf8c&download_checksum=3aecc5a468db23099426e4f52e8a9fce89571c3d&download_timestamp=1653513355"
                            alt='Logo Empresa'
                        />
                    </Link>
                    <p className='header_motto'>Estas en el lugar correcto</p>
                </div>
                <Sidebar buttonLogin={props.email} buttonRegister="Crear Cuenta" className="sidebar_header"></Sidebar>
            </div>
        </div>
    )
}


export default HeaderLogin;