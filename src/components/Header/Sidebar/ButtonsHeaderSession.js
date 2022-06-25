import React from 'react';
import { Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';

function ButtonsHeaderSession() {
    const icon_close = () => {
        localStorage.clear();
    }

    return (
        <div className="buttonHeaderContainer">
            <div className='nav-text-user'>
                <button className="button_session" onClick={() => { icon_close(); window.location.reload(); }}>
                    <Link to="/"><p><FaWindowClose className='icon_close_sesion' /> </p></Link>
                </button>
            </div>
            <section className="userOptions">
                <p className='name_user'> ¡Hola  {JSON.parse(localStorage.getItem("username"))}! </p>
                <Link to="/profile">
                    <p className='perfilUser'> Mi perfil </p>
                </Link>
            </section>
            <p className='avatar_user'> {JSON.parse(localStorage.getItem("avatar"))}</p>
        </div>
    )
}

export default ButtonsHeaderSession;