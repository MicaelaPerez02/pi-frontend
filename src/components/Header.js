import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import '../styles/Header.css';
import Login from './Login';
import Sidebar from './Sidebar';
import SidebarClose from './SidebarClose';



function Header() {
    const [mail, setMail] = useState('');

    const getData = () => {
        return sessionStorage.getItem('mail');
    }

    useEffect(() => {
        setMail(getData());
    }, []);

    return (
        <div className='header'>
            <div className='header_container'>
                <div className="header_logo_motto">
                    <img
                        className='header_logo'
                        src="https://fv9-5.failiem.lv/thumb_show.php?i=p9ex3xf8c&download_checksum=3aecc5a468db23099426e4f52e8a9fce89571c3d&download_timestamp=1653513355"
                        alt='Logo Empresa'
                    />
                    <p className='header_motto'>You are in the right place</p>
                </div>
                <Sidebar></Sidebar>
            </div>
        </div>

    )
}

export default Header;