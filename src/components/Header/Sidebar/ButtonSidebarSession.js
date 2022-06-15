import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

function ButtonSidebarSession() {
    const icon_close = () => {
        localStorage.clear();
    }

    return (
        <li className="nav-text-user" onClick={() => { icon_close(); window.location.reload(); }}>
            <div className='nav-text-user'>
                <p className='avatar_user'> {JSON.parse(localStorage.getItem("avatar"))}</p>
                <p className='name_user'> ¡Hola  {JSON.parse(localStorage.getItem("email"))}! </p>
            </div>
            <button className='button_close_sesion'> Cerrar Sesión <FaWindowClose className='icon_close_sesion' /> </button>
        </li>
    )
}

export default ButtonSidebarSession