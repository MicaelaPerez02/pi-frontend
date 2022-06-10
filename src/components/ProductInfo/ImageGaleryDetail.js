import React from 'react';
import "../../styles/ImageGaleryDetail.css";

function ImageGaleryDetail(props) {
  return (
    <div className='detailImageGalery'>
      <div className='imageGaleryDetail'>
        <img className='imageDetail' src={props.url} alt={props.title} />
      </div>
    </div>
  )
}

export default ImageGaleryDetail;