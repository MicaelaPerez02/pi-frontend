import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Slide } from 'react-slideshow-image';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import "react-slideshow-image/dist/styles.css";

function CarrouselProduct(props) {
    const { data, isLoaded } = useFetch(`/images/allImages`);

    const { productId } = useParams();

    return (
        <>
            <Slide autoplay transitionDuration={500}>
                {data.map((image, index) =>
                    image.products.title == productId ? (
                        (
                            <div key={index}>
                                <div
                                    style={{ height: '50vh', backgroundImage: `url(${image.url})`, backgroundSize: 'cover'}}>
                                    <div
                                        style={{
                                            padding: '5px 0',
                                            width: 140,
                                            borderBottomRightRadius: '10px',
                                            boxShadow: '4px 5px 0 rgba(0,0,0,0.2)',
                                            backgroundColor: 'rgba(255,255,255,0.8)',
                                        }}>
                                        {image.title}
                                    </div>
                                </div>
                            </div>
                        )): null)}
            </Slide>
        </>
    )
}

export default CarrouselProduct;