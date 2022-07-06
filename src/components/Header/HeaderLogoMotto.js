import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLogoMotto() {
    return (
        <div className="headerLogoMotto">
            <Link to='/'>
                <img
                    className='header_logo'
                    src="https://bucket-pig6.s3.us-east-2.amazonaws.com/Logos+Homu/Recurso+2finals.png"
                    alt='Logo Homu'
                />
            </Link>
            <h2 className='headerMotto'>Estás en el lugar correcto</h2>
        </div>
    )
}

export default HeaderLogoMotto;