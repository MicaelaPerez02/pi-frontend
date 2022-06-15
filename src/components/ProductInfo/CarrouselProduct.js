import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarrouselProduct(props) {
    return (
        <Carousel>
            <img className={props.url} src={props.url} alt={props.title} />
        </Carousel>
    )
}

export default CarrouselProduct;