import React from 'react';
import { Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

function CarrouselProduct(props) {

    return (
        <Carousel>
            <img className={props.url} src={props.url} alt={props.title} />
        </Carousel>
    )
}

export default CarrouselProduct;