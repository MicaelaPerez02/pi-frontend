import React from 'react';
import useFetch from '../../hooks/useFetch';
import CardProduct from './CardProduct';
import {AiOutlineHeart} from "react-icons/ai"
import '../../styles/Components/Product.css';

function Cards() {
    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const productList = data.map((product) => {
        return (
            <CardProduct
                key={product.id}
                id={product.id}
                url={product.url}
                rating={product.rating}
                review={product.review}
                location={product.location}
                map_url={product.map_url}
                watch={product.watch}
                title={product.title}
                description={product.description}
                categories={product.categories.title}
            />
        )
    });

    return (
        <section className='productContainer'>
            <h2 className='productInfoTitle'>Recomendaciones</h2>

            <div className='productCardItems'>
                <section className='productCardBox' key={productList.length++}>
                    {isLoaded ? productList : <p>Cargando...</p>}
                </section>
            </div>
            
        </section>
    )
}

export default Cards;