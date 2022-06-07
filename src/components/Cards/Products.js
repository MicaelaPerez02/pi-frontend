import React from 'react';
import useFetch from '../../hooks/useFetch';
import CardProduct from './CardProduct';
import '../../styles/Product.css';

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
                watch={product.watch}
                title={product.title}
                description={product.description}
            />
        )
    })

    return (
        <div className='productContainer'>
            <p className='productInfoTitle'>Recomendaciones</p>
            <div className='productCardItems'>
                <div className='productCardBox'>
                    {isLoaded ? productList : <p>Cargando...</p>}
                </div>
            </div>
            )
        </div>
    )
}

export default Cards;