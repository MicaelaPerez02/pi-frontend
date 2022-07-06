import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"

function CardProduct(props) {
    return (
        <div className="productInfoContainer" key={props.id}>

            <section className='productImageContainer'>
                <AiOutlineHeart className="iconLike" />
                <img src={props.url} alt={props.title} />
            </section>

            <div className='flex_deskt'>

                <section className='productRatingContainer'>
                    <span className="productRatingFlex"><p className='productRating'> {props.categories} </p>{
                        Array(props.rating)
                            .fill()
                            .map((_, index) => (
                                <p key={index}><AiFillStar /></p>
                            ))
                    }</span>
                    <p className="productReview">{props.review}</p>
                </section>

                <section className='productTitle'>
                    <p>{props.title}</p>
                </section>

                <section className='productMap'>
                    <p><FaMapMarkerAlt className='productIconMap' /> {props.location}</p>
                    <span><a href={props.watch} target="_blank" rel="noreferrer">Ver en mapa</a></span>
                </section>

                <section className='productDescription'>
                    <p>{props.description}<span className='productMoreInfo'>...continuar leyendo</span></p>
                </section>

                <Link to={"/product/" + props.title}>
                    <div className='productButton'>
                        <button>Ver más</button>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default CardProduct;