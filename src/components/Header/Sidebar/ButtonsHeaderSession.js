import React from 'react';
import { Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';

function ButtonsHeaderSession() {
    const icon_close = () => {
        localStorage.clear();
    }

    return (
        <div className="buttonHeaderContainer">
            <div className='navTextUser'>
                <button className="button_session" onClick={() => { icon_close(); window.location.reload(); }}>
                    <Link to="/"><p><FaWindowClose className='iconCloseSesion' /> </p></Link>
                </button>
                <DropdownMenu />
            </div>
            <div className="userOptions">
                <p className='nameUser'> Hola, <span>{localStorage.getItem("username")}</span> </p>
            </div>
            <p className='avatarUser'> {localStorage.getItem("avatar")}</p>
        </div>
    )
}

export default ButtonsHeaderSession;