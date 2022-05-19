import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

import { Menu, MenuItem, MobileIcon } from "./Header.elements";
import  CloseIcon  from '@mui/icons-material/Close';
import  MenuIcon  from '@mui/icons-material/Menu';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Link to="/">
        <div className='header'>
            <div className='header_wrapper'>
                    <div className="header_logo_motto">
                        <img
                            className='header_logo'
                            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
                            alt='Logo Empresa'
                        />
                        <p className='header_motto'>Lema de la empresa</p>
                    </div>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <CloseIcon className='close_icon'/> : <MenuIcon/>}
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        <MenuItem>
                            <button className='header_login'>CREAR CUENTA</button>
                        </MenuItem>
                        <MenuItem>
                            <button className='header_login'>INICIAR SESION</button>
                        </MenuItem>
                    </Menu>
    
            </div>
        </div>
        </Link>
    );
};

export default Navbar;