import React from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from './CardProduct';
import useFetch from '../../hooks/useFetch';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Categories from './Categories';
import "../../styles/Product.css";

function FilterCategory() {
    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const { categoryId } = useParams();

    const categorySelected = data.map((products, index) => {
        if (products.categories.title == categoryId) {
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
                />
            )
        }
        else {
            return null;
        }
    })

    return (
        <>
            <Header/>
            <Navbar/>
            <Categories/>
            <div className='productContainer' key={categoryId}>
                <p className='productInfoTitle'>Recomendaciones</p>
                <div className='productCardItems'>
                    <div className='productCardBox'>
                        {isLoaded ? categorySelected : <div>Cargando...</div>}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default FilterCategory;