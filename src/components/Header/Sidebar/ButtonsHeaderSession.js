import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

function ButtonsHeaderSession() {
    const icon_close = () => {
        localStorage.clear();
    }

    return (
        <>
            <button className="button_session" onClick={() => { icon_close(); window.location.reload(); }}>
                <div className='nav-text-user'>
                    <p> <FaWindowClose className='icon_close_sesion' /> </p>
                    <p className='name_user'> ¡Hola  {JSON.parse(localStorage.getItem("email"))}! </p>
                </div>
            </button>
            <p className='avatar_user'> {JSON.parse(localStorage.getItem("avatar"))}</p>
        </>
    )
}

export default ButtonsHeaderSession;