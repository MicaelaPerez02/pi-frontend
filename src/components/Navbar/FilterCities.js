import React from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../Cards/CardProduct';
import useFetch from '../../hooks/useFetch';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Categories from '../Cards/Categories';

function FilterCities() {
    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const { citiesId } = useParams();

    const citySelected = data.map((products, index) => {
        if (products.cities.name == citiesId) {
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
        }
        else {
            return null;
        }
    });

    return (
        <>
            <Header />
            <Navbar />
            <Categories />
            <div className='productContainer' key={citiesId}>
                <p className='productInfoTitle'>Recomendaciones</p>
                <div className='productCardItems'>
                    <div className='productCardBox'>
                        {isLoaded ? citySelected : <div>Cargando...</div>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FilterCities;