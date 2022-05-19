import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

import { Menu, MenuItem, MobileIcon } from "./Header.elements";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Link to='/' className= 'header_link'>
            <nav className='header'>
                <div className='header_wrapper'>

                    <Link to='/' className= 'header_link'>
                        <div className="header_logo_motto">
                            <img
                                className='header_logo'
                                src="https://pbs.twimg.com/media/FCz8CeXXMA88prw.png"
                                alt='Logo Empresa'
                            />
                            <p className='header_motto'>Sentite como en tu hogar</p>
                        </div>
                    </Link>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <CloseIcon className='close_icon' /> : <MenuIcon />}
                    </MobileIcon>

                    <Link to='/' className= 'header_link'>
                        <Menu open={showMobileMenu}>
                            <MenuItem>
                                <p className='header_login_menu'>MENÚ</p>
                            </MenuItem>
                            <MenuItem>
                                <span className='header_login'>CREAR CUENTA</span>
                            </MenuItem>
                            <MenuItem>
                                <span className='header_login'>INICIAR SESION</span>
                            </MenuItem>
                        </Menu>
                    </Link>

                </div>
            </nav>
        </Link>
    );
};

export default Navbar;