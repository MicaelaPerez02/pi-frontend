import React from 'react';
import "../../styles/MapDetail.css";

function MapDetail(props) {
    return (
        <div className="mapDetailContainer">
        <p className='mapDetailTitle'>¿Dónde vas a estar?</p>
        <h3 className='mapDetailCity'>{props.cities}</h3>
        <iframe className='Map' width="600" height="500" id="gmap_canvas" src={props.map_url} frameborder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
    )
}

export default MapDetail;