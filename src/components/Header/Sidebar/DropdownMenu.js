import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "../../../styles/Accesories/DropdownMenu.css";

export default function DropdownMenu() {
    const closeSesion = () => {
        localStorage.clear();
    }
    return (
        <Menu menuButton={<MenuButton>Menú</MenuButton>} transition>
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
