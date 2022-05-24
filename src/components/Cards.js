import React from 'react';
import data from '../utils/products.json';
import '../styles/Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <p className='card_info'>Recomendaciones</p>
            <div className='cards_item'>
                {data.products.map((item, index) => {
                    return (
                        <div key={item.id} className='card_box_recomendations'>
                            <div className='img_container'>
                                <img className='cards_img' src={item.url} alt={item.name} />
                            </div>
                            <p className='cards_name'>{item.title}</p>
                            <p className='cards_description'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;