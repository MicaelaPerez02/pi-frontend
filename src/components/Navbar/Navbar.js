import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DateRangePicker from 'rsuite/DateRangePicker';
import "../../styles/Components/Navbar.css";
import '../../styles/Accesories/DatePickerLibrary.css';
import '../../styles/General/Buttons.css';
import 'rsuite/dist/rsuite.min.css';
import CardCities from '../Cards/CardCities';

function Navbar(props) {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate("/cities/" + localStorage.getItem("cities"));
        window.location.reload();
    }

    return (
        <div className='navbarContainer'>
            <h2 className="title">Buscar ofertas en hoteles, casas y mucho más</h2>
            <section className='navbarElementsContainer'>
                <CardCities key={props.id} />
                <DateRangePicker placeholder="Seleccione el rango de fechas" className='datePickerDesktop' format='dd-MM-yyyy' />
                <DateRangePicker placeholder="Seleccione el rango de fechas" oneTap showOneCalendar hoverRange="week" format='dd-MM-yyyy' className='datePickerMobile' />
                <section className="navbarButtonContainer">
                    <Link to={"/cities/" + localStorage.getItem("cities")} >
                        <button className='navbarButton' onClick={handleClick}>Buscar</button>
                    </Link>
                </section>
            </section>
        </div>
    )
}
export default Navbar;