import React from 'react';
import { Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function CarrouselProduct(props) {
    return (
        <Carousel autoplay className="custom-slider">
            <img className="carrouselImages" src={props.url} alt={props.title}/>
            <img className="carrouselImages" src={props.url} alt={props.title}/>
            <img className="carrouselImages" src={props.url} alt={props.title}/>
            <img className="carrouselImages" src={props.url} alt={props.title}/>
            <img className="carrouselImages" src={props.url} alt={props.title}/>
        </Carousel>
    )
}

export default CarrouselProduct;