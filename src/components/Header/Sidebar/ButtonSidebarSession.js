import React from 'react';
import {Link} from "react-router-dom";
import { FaWindowClose } from 'react-icons/fa';
import useUser from '../../../hooks/useUser';

function ButtonSidebarSession() {
    const { logOut, isLogged } = useUser();
    const icon_close = () => {
        logOut();
        localStorage.clear();
    }

    return (
        <li className="nav-text-user" onClick={() => { icon_close(); window.location.reload(); }}>
            <div className='nav-text-user'>
                <p className='avatar_user'> {JSON.parse(localStorage.getItem("avatar"))}</p>
                <p className='name_user'> ¡Hola  {JSON.parse(localStorage.getItem("username"))}! </p>
            </div>
            {JSON.parse(localStorage.getItem("username")) === "admin@gmail.com" ?
                <Link to="/product/addProduct">
                    <button> Generar producto </button>
                </Link> : <p></p>}
            <button className='button_close_sesion'> Cerrar Sesión <FaWindowClose className='icon_close_sesion' /> </button>
        </li>
    )
}

export default ButtonSidebarSession