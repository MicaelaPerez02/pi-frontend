import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

function FooterSocialMedia() {
    return (
        <>
            <a href='http://www.facebook.com/' rel="noopener noreferrer" target="_blank" className='icon_footer'><FaFacebook /></a>
            <a href='http://www.linkedin.com/' rel="noopener noreferrer" target="_blank" className='icon_footer'><FaLinkedin /></a>
            <a href='https://www.instagram.com/homuproyect/' rel="noopener noreferrer" target="_blank" className='icon_footer'><FaInstagramSquare /></a>
            <a href='http://www.twitter.com/' rel="noopener noreferrer" target="_blank" className='icon_footer'><FaTwitterSquare /></a>
        </>
    )
}

export default FooterSocialMedia;