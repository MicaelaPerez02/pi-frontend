import React from 'react';
import { Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function CarrouselProduct(props) {
    return (
        <Carousel autoplay className="custom-slider">
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="100" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="100" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="100" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="100" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="100" />
        </Carousel>
    )
}

export default CarrouselProduct;