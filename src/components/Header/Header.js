import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import '../../styles/Header.css';
import HeaderLogoMotto from './HeaderLogoMotto';

function Header() {
    return (
        <div className='header'>
            <div className='header_container'>
                <HeaderLogoMotto />
                <Sidebar buttonLogin={localStorage.getItem("email") ? localStorage.getItem("email") : "Iniciar Sesion"} />
            </div>
        </div>
    )
}

export default Header;