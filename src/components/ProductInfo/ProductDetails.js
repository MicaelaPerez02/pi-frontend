import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import CardProduct from '../Cards/CardProduct';
import "../../styles/ProductDetails.css";
import CardDetail from '../ProductInfo/CardDetail';

function ProductDetails(props) {
    const { productId } = useParams();

    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const productSelected = data.map((product) => {
        return (
            <CardDetail
                title={product.title}
            />
        )
    })

    return (
        <div className='productInfoContainer'>
            <div className='productInfoContent'>
                <div className='productBanner'>
                    <p>Hola {productId}</p>
                    <p>AAA{productSelected}</p>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails;