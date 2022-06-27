import React from 'react';
import "../../styles/Accesories/ImageGaleryDetail.css";

function ImageGaleryDetail(props) {
  return (
    <div className='detailImage' key={props.id}> 
      <img className={props.title} src={props.url} alt={props.title} /> 
    </div>
  )
}

export default ImageGaleryDetail;