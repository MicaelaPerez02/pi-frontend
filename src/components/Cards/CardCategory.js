import React from 'react';
import '../../styles/Categories.css';

function CardCategory(props) {
    return (
        <div className="cardCategory">
            <img className='categoryImg' src={props.url} alt={props.title} />
            <p className='categoryTitle'>{props.title}</p>
            <p className='categoryDescription'>{props.description}</p>
        </div>
    )
}

export default CardCategory;