import React from 'react';
import '../../styles/Components/Categories.css';
import { Link } from 'react-router-dom';

function CardCategory(props) {
    return (
        <section className="cardCategory" key={props.id}>
            <Link to={"/category/" + props.title}>
                <img className='categoryImg' src={props.url} alt={props.title} />
            </Link>
            <h2 className='categoryTitle'>{props.title}</h2>
            <h3 className='categoryDescription'>{props.description}</h3>
        </section>
    )
}

export default CardCategory;