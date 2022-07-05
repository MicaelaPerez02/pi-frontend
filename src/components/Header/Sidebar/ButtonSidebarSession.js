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
        <ul className="navTextUser">
            {
                localStorage.getItem("username") === "admin@gmail.com" ?
                    <li className="nav-text">
                        <Link to="/product/addProduct">
                            <button> Generar producto </button>
                        </Link>
                    </li> :
                    <>
                        <li className="nav-text">
                            <Link to="/myBookings">
                                <button>Mis reservas</button>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <button>Mis favoritos</button>
                        </li>
                    </>
            }
            <p className='closeSesion'> ¿Deseas <span className='spanCloseSesion' onClick={() => { icon_close(); window.location.reload(); }}>Cerrar Sesión</span>? </p>
        </ul>
    )
}

export default ButtonSidebarSession