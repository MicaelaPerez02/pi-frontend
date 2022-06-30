import React from 'react';
import { Link } from "react-router-dom";
import useUser from '../../../hooks/useUser';

function ButtonSidebarSession() {
    const { logOut } = useUser();

    const icon_close = () => {
        logOut();
        localStorage.clear();
    }

    return (
        <li className="navTextUser">
            {JSON.parse(localStorage.getItem("username")) === "admin@gmail.com" ?
                <Link to="/product/addProduct">
                    <button> Generar producto </button>
                </Link> :
                <>
                    <li className="nav-text">
                        <Link to="/profile">
                            <span>Mis reservas</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <span>Mis favoritos</span>
                    </li>
                </>}
            <p className='closeSesion'> ¿Deseas <span className='spanCloseSesion' onClick={() => { icon_close(); window.location.reload(); }}>Cerrar Sesión</span>? </p>
        </li>
    )
}

export default ButtonSidebarSession