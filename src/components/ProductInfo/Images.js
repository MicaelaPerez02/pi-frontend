import React from 'react'
import ImageGaleryDetail from './ImageGaleryDetail';
import useFetch from '../../hooks/useFetch';
import "../../styles/ImageGaleryDetail.css";
import { useParams } from 'react-router-dom';

function Images() {
    const { data, isLoaded } = useFetch(`/images/allImages`);

    const {productId} = useParams();

    const imagesList = data.map((img) => {
        if (img.products.title == productId) {
        return (
            <ImageGaleryDetail
                key={img.id}
                url={img.url}
                title={img.title}
            />
        )}
    })

    return (
        <div>
            {isLoaded ? imagesList : <p>Cargando...</p>}
        </div>
    )
}

export default Images;