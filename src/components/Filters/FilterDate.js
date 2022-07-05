import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardProduct from '../Cards/CardProduct';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Categories from '../Cards/Categories';
import useFetch from '../../hooks/useFetch';

function FilterDate() {
    let datePicker = localStorage.getItem('datePicker').substring(1, 11);
    let datePicker2 = localStorage.getItem('datePicker2').substring(1, 11);

    const { data, isLoaded } = useFetch(`/products/productsAvailable/${datePicker}/${datePicker2}/`);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/products/" + datePicker + datePicker2);
    }

    const productOnDateSelected = data.map((products, index) => {
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
        <>
            <Header />
            <Navbar />
            <Categories />
            <div className='productContainer'>
                <h2 className='productInfoTitle'>Recomendaciones</h2>
                <div className='productCardItems'>
                    <div className='productCardBox'>
                        {isLoaded ? <div onClick={handleClick}>{productOnDateSelected} </div> : <div>Cargando...</div>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FilterDate;