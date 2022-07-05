import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import DateRangePicker from 'rsuite/DateRangePicker';
import "../../styles/Components/Navbar.css";
import '../../styles/Accesories/DatePickerLibrary.css';
import '../../styles/General/Buttons.css';
import 'rsuite/dist/rsuite.min.css';
import CardCities from '../Cards/CardCities';
import CardProduct from '../Cards/CardProduct';
import Categories from '../Cards/Categories';

function FilterCityAndDate() {
    let datePicker = localStorage.getItem('datePicker').substring(1, 11);
    let datePicker2 = localStorage.getItem('datePicker2').substring(1, 11);
    let cityId = localStorage.getItem('cities');

    const { data, isLoaded } = useFetch(`/products/productsAvailable/${datePicker}/${datePicker2}/${cityId}`);

    const cityAndDateSelected = data.map((products, index) => {
        return (
            <CardProduct
                key={index}
                id={products.categories.id}
                url={products.url}
                rating={products.rating}
                review={products.review}
                location={products.location}
                watch={products.watch}
                title={products.title}
                description={products.description}
                cities={products.cities.name}
            />
        )
    });

    return (
        <div className='filterCategoryContainer'>
            <Header />
            <div className='navbarContainer'>
                <h2 className="title">Buscar ofertas en hoteles, casas y mucho más</h2>
                <section className='navbarElementsContainer'>
                    <CardCities  />
                    <DateRangePicker placeholder="Seleccione el rango de fechas" className='datePickerDesktop' format='dd-MM-yyyy'
                        onChange={(date) => {
                            localStorage.setItem('datePicker', JSON.stringify((date[0])));
                            localStorage.setItem('datePicker2', JSON.stringify((date[1])))
                        }} />
                    <DateRangePicker placeholder="Seleccione el rango de fechas" oneTap showOneCalendar hoverRange="week" format='dd-MM-yyyy' className='datePickerMobile'
                        onChange={(date) => {
                            localStorage.setItem('datePicker', JSON.stringify((date[0])));
                            localStorage.setItem('datePicker2', JSON.stringify((date[1])))
                        }} />
                    <section className="navbarButtonContainer">
                        <Link to={"/products/cityAndDate"}>
                            <button className='navbarButton'>Buscar</button>
                        </Link>
                    </section>

                </section>
            </div>
            <Categories />
            <div className='productContainer'>
                <p className='productInfoTitle'>Recomendaciones</p>
                <div className='productCardItems'>
                    <div className='productCardBox'>
                        {isLoaded ? cityAndDateSelected : <div>Cargando...</div>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FilterCityAndDate;