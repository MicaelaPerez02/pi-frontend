import React from 'react';
import {FaRegCopyright } from 'react-icons/fa';
import FooterSocialMedia from '../Header/Sidebar/FooterSocialMedia';
import '../../styles/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_info'>
                <span><FaRegCopyright className='icon_copy'/></span>
                <span>2022</span>
                <span>HOMU</span>
            </div>
            <div className='footer_menu'>
                <FooterSocialMedia />
            </div>
        </div>
    )
}

export default Footer;