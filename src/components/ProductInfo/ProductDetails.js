import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardDetail from '../ProductInfo/CardDetail';
import "../../styles/Components/ProductDetails.css";

function ProductDetails() {
    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const { productId } = useParams();

    const productSelected = data.map((product) => {
        if (product.title == productId) {
            return (
                <CardDetail
                    key={product.id}
                    categories={product.categories.title}
                    title={product.title}
                    cities={product.cities.name}
                    rating={product.rating}
                    review={product.review}
                    url={product.url}
                    description={product.description}
                    features={product.features}
                    map_url={product.map_url}
                    images={product.images}
                />
            )
        }
    })

    return (
        <div>
            <Header className="productHeader" />
            <div className='productInfoContent'>
                <div className='productBanner'>
                    {isLoaded ? productSelected : <div>Cargando...</div>}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ProductDetails;