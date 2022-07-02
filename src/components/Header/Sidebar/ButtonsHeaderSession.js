import React from 'react';
import { Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';
import useFetchAuth from '../../../hooks/useFetchAuth';

function ButtonsHeaderSession() {
    const { data, isLoaded } = useFetchAuth(`/users/findUser/${localStorage.getItem("userId")}`);

    const avatarUser = data.avatar;

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
            <div> {(avatarUser == "https://www.gravatar.com/avatar/466dcf1001d04d8e101cf4a5cc9bc41d") ?
                <p className='avatarUser'> {localStorage.getItem("avatar")}</p> :
                <img src={avatarUser} alt="img perfil" className='avatarGravatar' />}
            </div>
        </div>
    )
}

export default ButtonsHeaderSession;