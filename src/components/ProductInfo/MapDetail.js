import React from 'react';
import "../../styles/MapDetail.css";

function MapDetail(props) {
    return (
        <div className="mapDetailContainer">
        <p className='mapDetailTitle'>¿Dónde vas a estar?</p>
        <p className='mapDetailCity'>{props.cities}</p>
        <iframe className='Map' width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Soltigua%20Apart%20Hotel%20Mendoza&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    )
}

export default MapDetail;