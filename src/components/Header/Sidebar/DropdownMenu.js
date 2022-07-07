import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
import useFetchAuth from '../../../hooks/useFetchAuth';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "../../../styles/Accesories/DropdownMenu.css";

export default function DropdownMenu() {
    const { data, isLoaded } = useFetchAuth(`/users/findUser/${localStorage.getItem("userId")}`);

    const closeSesion = () => {
        localStorage.clear();
    }

    const avatarUser = data.avatar;
    
    return (
        <Menu menuButton={
            <MenuButton>{localStorage.getItem("user").length > 2 ?
                <div> {(avatarUser == "http://www.gravatar.com/avatar/bd0e4cf4cb4a75b48e1734ec8693cb55.png?d=https%3A%2F%2Fbucket-pig6.s3.us-east-2.amazonaws.com%2FLogos%2BHomu%2FLogoH.png") ?
                    <p className='avatarUser'> {localStorage.getItem("avatar")}</p>
                    :
                    <img src={avatarUser} alt="Imagen de perfíl gravatar" className='avatarGravatar' />}
                    {console.log(avatarUser)}
                </div> : "null"}
            </MenuButton>
            } transition>

            {localStorage.getItem("username") === "administrador@homu.com" ?
                <>
                    <Link to="/product/addProduct">
                        <MenuItem>Generar Producto</MenuItem>
                    </Link>
                    <Link to="/">
                        <MenuItem onClick={() => { closeSesion(); window.location.reload(); }}>Cerrar sesión</MenuItem>
                    </Link>
                </>
                :
                <>
                    <Link to="/myBookings">
                        <MenuItem>Mis reservas</MenuItem>
                    </Link>
                    <Link to="/myFavorites">
                        <MenuItem>Mis favoritos</MenuItem>
                    </Link>
                    <Link to="/">
                        <MenuItem onClick={() => { closeSesion(); window.location.reload(); }}>Cerrar sesión</MenuItem>
                    </Link>
                </>
            }
        </Menu>
    );
}
