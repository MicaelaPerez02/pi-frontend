import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import "../../styles/Header.css";
import "../../styles/Sidebar.css";

function Sidebar(props) {
    const icon_close = () => {
        localStorage.clear();
    }

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='' className='menu-bars'>
                            <FaWindowClose className='icon_close' />
                        </Link>
                    </li>
                    <li className="nav-text-menu">
                        <span>MENÚ</span>
                    </li>
                    {props.buttonLogin != localStorage.getItem("email") ? (
                        <>
                            <li className="nav-text">
                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                    <span>Iniciar Sesión</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                    <span>Crear cuenta</span>
                                </Link>
                            </li>
                        </>)
                        :
                        (
                            <li className="nav-text-user" onClick={() => { icon_close(); window.location.reload(); }}>
                                <div className='nav-text-user'>
                                    <p className='avatar_user'> {JSON.parse(localStorage.getItem("avatar"))}</p>
                                    <p className='name_user'> ¡Hola  {JSON.parse(localStorage.getItem("email"))}! </p>
                                </div>
                                <button className='button_close_sesion'> Cerrar Sesión <FaWindowClose className='icon_close_sesion' /> </button>
                            </li>)

                    }
                </ul>

                <div className={sidebar ? 'menu_footer active' : 'menu_footer'}>
                    <a href='http://www.facebook.com/' rel="noopener noreferrer" target="_blank" className='icon_footer'><FaFacebook /></a>
                    <a href='http://www.linkedin.com/' rel="noopener noreferrer" target="_blank" className='icon_footer'><FaLinkedin /></a>
                    <a href='https://www.instagram.com/homuproyect/' rel="noopener noreferrer" target="_blank" className='icon_footer'><FaInstagramSquare /></a>
                    <a href='http://www.twitter.com/' rel="noopener noreferrer" target="_blank" className='icon_footer'><FaTwitterSquare /></a>
                </div>
            </nav>

            <div className="navbar">
                <Link to="" className='menu-bars'>
                    <FaBars onClick={showSidebar} className='icon_menu' />
                </Link>
                {props.buttonLogin != localStorage.getItem("email") ? (
                    <>
                        <Link to="/login">
                            <button className='header_button'>
                                Iniciar Sesion
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className='header_button'>
                                Crear Cuenta
                            </button>
                        </Link>
                    </>) : (

                    <div className='session_container'>
                        <button className="button_session" onClick={() => { icon_close(); window.location.reload(); }}>
                            <div className='nav-text-user'>
                                <p> <FaWindowClose className='icon_close_sesion' /> </p>
                                <p className='name_user'> ¡Hola  {JSON.parse(localStorage.getItem("email"))}! </p>
                            </div>
                        </button>
                        <p className='avatar_user'> {JSON.parse(localStorage.getItem("avatar"))}</p>
                    </div>)

                }
            </div>
        </div>
    )
}

export default Sidebar;