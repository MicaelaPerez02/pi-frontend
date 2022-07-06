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
            <Navbar />
            <Categories />

            <section className='productContainer'>
                <h2 className='productInfoTitle'>Recomendaciones</h2>
                <div className='productCardItems'>
                    <div className='productCardBox'>
                        {isLoaded ? cityAndDateSelected : <div>Cargando...</div>}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default FilterCityAndDate;