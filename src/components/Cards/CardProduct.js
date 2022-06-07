import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

function CardProduct(props) {
    return (
        <div className="productInfoContainer">
            <div className='productImageContainer'>
                <img src={props.url} alt={props.title} />
            </div>
            <div className='flex_deskt'>
                <div className='productRatingContainer'>
                    <span className="productRatingFlex"><p className='productRating'> HOTEL </p>{
                        Array(props.rating)
                            .fill()
                            .map((_) => (
                                <p key={props.rating}>⭐</p>
                            ))
                    }</span>
                    <p className="productReview">{props.review}</p>
                </div>
                <div className='productTitle'>
                    <p>{props.title}</p>
                </div>
                <div className='productMap'>
                    <p><FaMapMarkerAlt className='productIconMap'/> {props.location}</p>
                    <span>{props.watch}</span>
                </div>
                <div className='productDescription'>
                    <p>{props.description}<span className='productMoreInfo'>...continuar leyendo</span></p>
                </div>
                <div className='productButton'>
                    <button>Ver más</button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;