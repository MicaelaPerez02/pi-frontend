import React from 'react';
import "../../styles/ImageGaleryDetail.css";

function ImageGaleryDetail(props) {
  return (
    <div className='detailImage'> 
      <img className={props.title} src={props.url} alt={props.title} />
    </div>
  )
}

export default ImageGaleryDetail;