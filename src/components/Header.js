import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='header_container'>
                <div className="header_logo_motto">
                    <img
                        className='header_logo'
                        src="https://pbs.twimg.com/media/FCz8CeXXMA88prw.png"
                        alt='Logo Empresa'
                    />
                    <p className='header_motto'>Sentite como en tu hogar</p>
                </div>
                <div className="navbar">
                    <Link to="/" className='menu-bars'>
                        <FaBars onClick={showSidebar} className='icon_menu' />
                    </Link>
                    <button className='header_button'>Inicia Sesion</button>
                    <button className='header_button'>Crear cuenta</button>
                </div>
            </div>
            <nav
                className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='/' className='menu-bars'>
                            <FaWindowClose className='icon_close' />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <span>{item.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div className={sidebar ? 'menu_footer active' : 'menu_footer'}>
                    <a href='http://www.facebook.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaFacebook /></a>
                    <a href='http://www.linkedin.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaLinkedin /></a>
                    <a href='http://www.instagram.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaInstagramSquare /></a>
                    <a href='http://www.twitter.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaTwitterSquare /></a>
                </div>
            </nav>
        </>
    )
}

export default Header;