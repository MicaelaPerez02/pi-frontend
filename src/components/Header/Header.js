import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import '../../styles/Components/Header.css';
import HeaderLogoMotto from './HeaderLogoMotto';

function Header() {
    return (
        <div className='header'>
            <div className='header_container'>
                <HeaderLogoMotto />
                <Sidebar buttonLogin={localStorage.getItem("username") ? localStorage.getItem("username") : "Iniciar Sesion"} />
                
            </div>
        </div>
    )
}

export default Header;