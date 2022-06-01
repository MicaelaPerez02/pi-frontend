import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import '../styles/Header.css';

function Header(props) {
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
                <Sidebar buttonLogin={JSON.parse(localStorage.getItem("email"))} buttonRegister="Crear Cuenta"/>
            </div>
        </div>
    )
}

export default Header;