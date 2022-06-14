import React from 'react';
import ButtonsHeader from './ButtonsHeader';
import ButtonsHeaderSession from './ButtonsHeaderSession';
import ButtonsSidebar from './ButtonsSidebar';
import ButtonSidebarSession from './ButtonSidebarSession';
import FooterSocialMedia from './FooterSocialMedia';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import "../../../styles/Header.css";
import "../../../styles/Sidebar.css";

function Sidebar(props) {
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
                    {props.buttonLogin !== localStorage.getItem("email") ? (<ButtonsSidebar />) : (<ButtonSidebarSession />)}
                </ul>
                <div className={sidebar ? 'menu_footer active' : 'menu_footer'}>
                    <FooterSocialMedia />
                </div>
            </nav>

            <div className="navbar">
                <Link to="" className='menu-bars'>
                    <FaBars onClick={showSidebar} className='icon_menu' />
                </Link>
                {props.buttonLogin !== localStorage.getItem("email") ? (<ButtonsHeader/>) : (
                    <div className='session_container'>
                        <ButtonsHeaderSession />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar;