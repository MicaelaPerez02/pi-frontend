import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "../../../styles/Accesories/DropdownMenu.css";

export default function DropdownMenu() {
    return (
        <Menu menuButton={<MenuButton>Menú</MenuButton>} transition>
            {JSON.parse(localStorage.getItem("username")) === "admin@gmail.com" ?
                <Link to="/product/addProduct">
                    <MenuItem>Generar Producto</MenuItem>
                </Link> :
                <>
                    <Link to="/profile">
                        <MenuItem>Mis reservas</MenuItem>
                    </Link>
                    <Link to="/profile">
                    <MenuItem>Mis favoritos</MenuItem>
                    </Link>
                </>
            }
        </Menu>
    );
}
