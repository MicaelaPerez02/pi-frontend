import React from 'react';
import { Link } from 'react-router-dom';

function ButtonsSidebar() {
    return (
        <ul>
            <li className="nav-text">
                <Link to="/login">
                    <span>Iniciar Sesión</span>
                </Link>
            </li>
            <li className="nav-text">
                <Link to="/register">
                    <span>Crear cuenta</span>
                </Link>
            </li>
        </ul>
    )
}

export default ButtonsSidebar;