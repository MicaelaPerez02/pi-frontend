import React from 'react';
import '../../styles/Footer.css';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaRegCopyright } from 'react-icons/fa';
function Footer() {
    return (
        <div className='footer'>
            <div className='footer_info'>
                <span><FaRegCopyright className='icon_copy'/></span>
                <span>2022</span>
                <span>HOMU</span>
            </div>
            <div className='footer_menu'>
                <a href='http://www.facebook.com/' rel="noopener noreferrer" target="_blank" className='footer_icon' style={{textDecoration:"none"}}>
                    <FaFacebook/>
                </a>
                <a href='http://www.linkedin.com/' rel="noopener noreferrer" target="_blank" className='footer_icon' style={{textDecoration:"none"}}>
                    <FaLinkedin/>
                </a>
                <a href='http://www.twitter.com/' rel="noopener noreferrer" target="_blank" className='footer_icon' style={{textDecoration:"none"}}>
                    <FaTwitterSquare/>
                </a>
                <a href='https://www.instagram.com/homuproyect/' rel="noopener noreferrer" target="_blank" className='footer_icon' style={{textDecoration:"none"}}>
                    <FaInstagramSquare/>
                </a>
            </div>
        </div>
    )
}

export default Footer;