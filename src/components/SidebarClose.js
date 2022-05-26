import React from 'react';
import { SidebarData } from './SidebarData';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import Login from './Login';

function SidebarClose() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [mail, setMail] = useState('');

    const getData = () => {
        return localStorage.getItem('mail');
    }

    useEffect(() => {
        setMail(getData());
    }, []);

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    
    return (
        <div>
            <nav
                className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='' className='menu-bars'>
                            <FaWindowClose className='icon_close' />
                        </Link>
                    </li>
                    <li className="nav-text-menu">
                        <span>Hola, {mail}</span>
                    </li>
                    <div className='logout'>
                        <button onClick={logout}>Cerrar Sesión</button>
                    </div>
                </ul>
                <div className={sidebar ? 'menu_footer active' : 'menu_footer'}>
                    <a href='http://www.facebook.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaFacebook /></a>
                    <a href='http://www.linkedin.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaLinkedin /></a>
                    <a href='http://www.instagram.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaInstagramSquare /></a>
                    <a href='http://www.twitter.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaTwitterSquare /></a>
                </div>
            </nav>
            <div className="navbar">
                <Link to="" className='menu-bars'>
                    <FaBars onClick={showSidebar} className='icon_menu' />
                </Link>

            </div>
            <div className='mail'>
                Hola {mail}
            </div>
        </div>
    )
}

export default SidebarClose;