import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import '../../styles/Header.css';
import "../../styles/Sidebar.css";
import HeaderLogoMotto from './HeaderLogoMotto';


function HeaderLogin(props) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className='header'>
            <div className='header_container'>
                <HeaderLogoMotto />
                <div className="navbar">
                    <Link to="" className='menu-bars'>
                        <FaBars onClick={showSidebar} className='icon_menu' />
                    </Link>
                    <Link to="/register">
                        <button className='header_button'>Registrate</button>
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
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <span>Registrate</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default HeaderLogin;