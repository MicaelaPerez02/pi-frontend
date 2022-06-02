import React from 'react';
import data from '../../utils/products.json';
import '../../styles/Cards.css';
import { FaMapMarkerAlt } from "react-icons/fa";

function Cards() {
    return (
        <div className='cards'>
            <p className='card_info'>Recomendaciones</p>
            <div className='cards_item'>
                {data.products.map((item, index) => {
                    return (
                        <div key={item.id} className='card_box_recomendations'>
                            <div className='card_info_container'>
                                <div className='img_container'>
                                    <img src={item.url} alt={item.name} />
                                </div>
                                <div className='flex_deskt'>
                                    <div className='rating'>
                                        <span><p className='hotel'> HOTEL </p>{
                                            Array(item.rating)
                                                .fill()
                                                .map((_) => (
                                                    <p key={item.id++}>⭐</p>
                                                ))
                                        }</span>
                                        <p className="review">{item.review}</p>
                                    </div>
                                    <div className='title'>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className='distances'>
                                        <p><FaMapMarkerAlt className='icon_map' /> {item.ubication}</p>
                                        <span>{item.watch}</span>
                                    </div>
                                    <div className='description'>
                                        <p>{item.description}<span className='more'>...continuar leyendo</span></p>
                                    </div>
                                    <div className='button'>
                                        <button>Ver más</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;