import React from 'react';
import { Link } from 'react-router-dom';

function ButtonsSidebar() {
    return (
        <>
            <li className="nav-text">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <span>Iniciar Sesión</span>
                </Link>
            </li>
            <li className="nav-text">
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <span>Crear cuenta</span>
                </Link>
            </li>
        </>
    )
}

export default ButtonsSidebar;