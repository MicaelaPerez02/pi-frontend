import React from 'react';
import { GoChevronLeft } from "react-icons/go";
import "../../styles/ProductDetails.css";
import { Link } from "react-router-dom";

function CardDetail(props) {
    return (
        <div className="detailContainer">
            <div className="detailHeaderContainer">
                <div className="detailHeader">
                    <p className='detailCategories'>{props.categories}</p>
                    <strong className='detailTitle'>{props.title}</strong>
                </div>
                <Link to="/" >
                <GoChevronLeft className='detailIcon' />
                </Link>
            </div>
            <p className='detailDescription'>{props.description}</p>
        </div >
    )
}

export default CardDetail;