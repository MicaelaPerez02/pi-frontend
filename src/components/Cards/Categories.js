import React from 'react';
import data from '../../utils/categories.json';
import '../../styles/Categories.css';

function Categories() {
    return (
        <div className='categories'>
            <p className='categories_info'>Buscar por tipo de alojamiento</p>
            <div className='categories_item'>
                {data.categories.map((item, index) => {
                    return (
                        <div key={item.id} className='card_box'>
                            <img className='categories_img' src={item.url} alt={item.name} />
                            <p className='categories_name'>{item.name}</p>
                            <p className='categories_description'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories;
