import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardDetail from '../ProductInfo/CardDetail';
import { GoChevronLeft } from "react-icons/go";
import "../../styles/ProductDetails.css";

function ProductDetails(props) {
    const { productId } = useParams();

    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const productSelected = data.map((product) => {
        if (product.id == productId) {
            return (
                <CardDetail
                    key={product.id}
                    categories={product.categories.title}
                    title={product.title}
                />
            )
        }
    })

    return (
        <>
            <Header className="productHeader" />
            <div className='productInfoContent'>
                <div className='productBanner'>
                    <p>{productSelected}</p>
                   
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ProductDetails;