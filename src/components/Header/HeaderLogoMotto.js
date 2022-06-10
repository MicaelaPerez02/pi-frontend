import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLogoMotto() {
    return (
        <div className="header_logo_motto">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <img
                    className='header_logo'
                    src="https://bucket-pig6.s3.us-east-2.amazonaws.com/Logos+Homu/Recurso+2finals.png"
                    alt='Logo Empresa'
                />
            </Link>
            <p className='header_motto'>Estás en el lugar correcto</p>
        </div>
    )
}

export default HeaderLogoMotto;