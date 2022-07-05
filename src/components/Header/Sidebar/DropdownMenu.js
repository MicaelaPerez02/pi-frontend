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
                <div> {(avatarUser == "https://www.gravatar.com/avatar/466dcf1001d04d8e101cf4a5cc9bc41d") ?
                    <p className='avatarUser'> {localStorage.getItem("avatar")}</p>
                    :
                    <img src={avatarUser} alt="img perfil" className='avatarGravatar' />}
                </div> : null}
            </MenuButton>} transition>
            {localStorage.getItem("username") === "admin@gmail.com" ?
                <>
                    <Link to="/product/addProduct">
                        <MenuItem>Generar Producto</MenuItem>
                    </Link>
                    <Link to="/">
                        <MenuItem onClick={() => { closeSesion(); window.location.reload(); }}>Cerrar sesión</MenuItem>
                    </Link>
                </> :
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
