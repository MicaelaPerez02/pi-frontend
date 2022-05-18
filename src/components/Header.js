import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

import { Container, Wrapper, Menu, MenuItem, MobileIcon } from "./Header.elements";
import { FaBars, FaTimes} from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper className='header'>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <div className="logo">
                        <img
                            className='header_logo'
                            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
                            alt='Logo Empresa'
                        />
                        <p className='header_motto'>Lema de la empresa</p>
                    </div>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        <MenuItem>
                            <button className='header_login'>CREAR CUENTA</button>
                        </MenuItem>
                        <MenuItem>
                            <button className='header_login'>INICIAR SESION</button>
                        </MenuItem>
                    </Menu>
    
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Navbar;