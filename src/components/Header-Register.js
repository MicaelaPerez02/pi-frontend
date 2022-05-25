import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import '../styles/Header.css';
import Login from './Login';

function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='header'>
            <div className='header_container'>
                <div className="header_logo_motto">
                    <img
                        className='header_logo'
                        src="https://ibb.co/hc9d2mV"
                        alt='Logo Empresa'
                    />
                    <p className='header_motto'>You are in the right place</p>
                </div>
                <div className="navbar">
                    <Link to="" className='menu-bars'>
                        <FaBars onClick={showSidebar} className='icon_menu' />
                    </Link>
                    <Link to="/login">
                    <button className='header_button'>Inicia Sesion</button>
                    </Link >
                    
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
                    <li  className="nav-text-menu">
                    <Link to="/">
                                <span>MENÚ</span>
                                </Link>
                            </li>
                    <li  className="nav-text">
                        <Link to="/login">
                                <span>Iniciar Sesión</span>
                                </Link>
                            </li>
                            
                            <li  className="nav-text">
                                <Link to="/register">
                                <span>Crear cuenta</span>
                                </Link>
                            </li>
                    
                </ul>
                <div className={sidebar ? 'menu_footer active' : 'menu_footer'}>
                    <a href='http://www.facebook.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaFacebook /></a>
                    <a href='http://www.linkedin.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaLinkedin /></a>
                    <a href='http://www.instagram.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaInstagramSquare /></a>
                    <a href='http://www.twitter.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaTwitterSquare /></a>
                </div>
            </nav>
        </div>
    )
}


export default Header;