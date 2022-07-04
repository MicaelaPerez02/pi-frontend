import React from 'react';
import { Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';
import useFetchAuth from '../../../hooks/useFetchAuth';

function ButtonsHeaderSession() {
    const { data, isLoaded } = useFetchAuth(`/users/findUser/${localStorage.getItem("userId")}`);

    const avatarUser = data.avatar;

    return (
        <div className="buttonHeaderContainer">
            <div className='navTextUser'>
                <DropdownMenu />
            </div>
            <div className="userOptions">
                <p className='nameUser'> Hola, <span>{localStorage.getItem("username")}</span> </p>
            </div>
            {localStorage.getItem("user").length> 5? <div> {(avatarUser == "https://www.gravatar.com/avatar/466dcf1001d04d8e101cf4a5cc9bc41d") ?
                <p className='avatarUser'> {localStorage.getItem("avatar")}</p> :
                <img src={avatarUser} alt="img perfil" className='avatarGravatar' />}
            </div> : null}
        </div>
    )
}

export default ButtonsHeaderSession;