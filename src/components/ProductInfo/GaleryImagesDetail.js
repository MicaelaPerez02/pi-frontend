import React from 'react';

function GaleryImagesDetail(props) {
    return (
        <div className='detailImageGaleryPrincipal'>
            <img className='detailImage' src={props.url} alt={props.title} />
            <div className='detailImageGaleryFlex'>
                <div className='detailImageGalerySecondary'>
                    <img className='detailImageSecond' src={props.url} alt={props.title} />
                    <img className='detailImageSecond' src={props.url} alt={props.title} />
                </div>
                <div className='detailImageGaleryThird'>
                    <img className='detailImageThird' src={props.url} alt={props.title} />
                    <img className="detailImageThird" src={props.url} alt={props.title} />
                </div>
            </div>
        </div>
    )
}

export default GaleryImagesDetail;