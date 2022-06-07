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
        if (product.id == productId) {
            return (
                <CardDetail
                    key={product.id}
                    title={product.title}
                    categories={product.categories}
                />
            )
            
        }
        {console.log(product.categories.title);}
    })

    return (
        <div className='productInfoContainer'>
            <div className='productInfoContent'>
                <div className='productBanner'>
                    <p>{productSelected}</p>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails;