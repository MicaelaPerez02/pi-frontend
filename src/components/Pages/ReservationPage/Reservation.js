import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import ReservationDetail from './ReservationDetail';
import useFetch from '../../../hooks/useFetch';
import { useParams } from "react-router-dom";
import "../../../styles/ProductDetails.css";
import "../../../styles/Reservation.css";

function Reservation() {
    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const { productId } = useParams();

    const reservationProduct = data.map((product) => {
        if (product.title == productId) {
            return (
                <ReservationDetail
                    key={product.id}
                    categories={product.categories.title}
                    title={product.title}
                    rating={product.rating}
                    cities={product.cities.name}
                    images={product.url}
                />
            )
        }
    })

    return (
        <>
            <Header />
            {isLoaded ? reservationProduct : <div>Cargando...</div>}
            <Footer />
        </>
    )
}

export default Reservation;