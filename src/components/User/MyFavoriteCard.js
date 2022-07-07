import React, { useState } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import FavDelete from '../User/FavDelete';
import '../../styles/Components/Product.css';
import useFavs from "../../hooks/useFavs";
import useUser from "../../hooks/useUser";
import useFetchAuth from '../../hooks/useFetchAuth';

function MyFavoriteCard(props) {
    const [products, setProducts] = useState();
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const { Favs } = useFavs();
    const { addFav } = useUser();
    const { data } = useFetchAuth(`/favourites/allFavourites`);
    const [isFaved, setIsFaved] = useState("");
    const [isFav, setIsFav] = useState(false);
    const [state, setState] = useState(false);
    const idsFavs = data.map(fav => console.log(fav.id));

    const handleDelete = () => {
        props.onDelete(props.id2)
    }
    
    const authToken = localStorage.getItem("user");

    return (
        <>
            <div className="productInfoContainer" key={props.id}>

                <button onClick={() => { handleDelete(); }} id="favIcon">
                    <span role="img" aria-label="❤">❤</span>
                </button>

                <div className='productImageContainer'>
                    <img src={props.url} alt={props.title} />
                </div>
                <div className='flex_deskt'>
                    <div className='productRatingContainer'>
                        <span className="productRatingFlex"><p className='productRating'> {props.categories} </p>{
                            Array(props.rating)
                                .fill()
                                .map((_, index) => (
                                    <p key={index}><AiFillStar /></p>
                                ))
                        }</span>
                        <p className="productReview">{props.review}</p>
                    </div>
                    <div className='productTitle'>
                        <p>{props.title}</p>
                    </div>
                    <div className='productMap'>
                        <p><FaMapMarkerAlt className='productIconMap' /> {props.location}</p>
                        <span><a href={props.watch} target="_blank" rel="noreferrer">Ver en mapa</a></span>
                    </div>
                    <div className='productDescription'>
                        <p>{props.description}<span className='productMoreInfo'>...continuar leyendo</span></p>
                    </div>
                    <Link to={"/product/" + props.title}>
                        <div className='productButton'>
                            <button>Ver más</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MyFavoriteCard