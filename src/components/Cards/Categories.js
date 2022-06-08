import React from 'react';
import '../../styles/Categories.css';
import useFetch from '../../hooks/useFetch';
import CardCategory from './CardCategory';


function Categories(props) {
    const { data, isLoaded } = useFetch(`/categories/allCategories`);

    const categoryList = data.map((category) => {
        return (
            <CardCategory
                key={category.id}
                url={category.url}
                title={category.title}
                description={category.description}
            />
        )
    })

    return (
        <div className='categoryContainer'>
            <p className='categoryP'>Buscar por tipo de alojamiento</p>
                <div key={props.id} className="categoryItem">
                    {isLoaded ? categoryList : <p>Cargando...</p>}
                </div>
        </div>
    )
}

export default Categories;
