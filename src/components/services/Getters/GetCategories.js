import React from 'react';
import useFetch from '../../../hooks/useFetch';

function GetCategories(props) {
    const { data, isLoaded } = useFetch(`/categories/allCategories`);

    const categoryList =
        data.map((category, index) => {
            return (
                <option value={category.id} onChange={props.onChange} key={index}>{category.title}</option>
            )
        })

    return (
        <form>
            <h5 className="inputTitleProdGenerator">Categoría</h5>
            <select id="category" name="category" className='form_select'>
                <option className="form_option" hidden >Selecciona la categoría</option>
                <option className="form_option" disabled >Selecciona la categoría</option>
                {categoryList}
            </select>
        </form>
    )
}

export default GetCategories;