import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import '../../styles/Header.css';
import "../../styles/Sidebar.css";


function HeaderRegister() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='header'>
            <div className='header_container'>
                <Link to="/" style={{textDecoration:"none"}}>
                    <div className="header_logo_motto">
                        <img
                            className='header_logo'
                            src="https://bucket-pig6.s3.us-east-2.amazonaws.com/Logos+Homu/Recurso+2finals.png"
                            alt='Logo Empresa'
                        />
                        <p className='header_motto'>Estás en el lugar correcto</p>
                    </div>
                </Link>
                <div className="navbar">
                    <Link to="" className='menu-bars'>
                        <FaBars onClick={showSidebar} className='icon_menu' />
                    </Link>
                    <Link to="/login">
                        <button className='header_button'>Inicia Sesion</button>
                    </Link>

                </div>
            </div>
            <nav
                className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='' className='menu-bars'>
                            <FaWindowClose className='icon_close' />
                        </Link>
                    </li>
                    <li className="nav-text-menu">
                        <span>MENÚ</span>
                    </li>
                    <li className="nav-text">
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <span>Iniciar Sesión</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default HeaderRegister;