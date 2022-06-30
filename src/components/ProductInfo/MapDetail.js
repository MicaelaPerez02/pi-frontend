import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import "../../styles/Accesories/MapDetail.css";

function MapDetail(props) {
    return (
        <div className="mapDetailContainer">
            <h2 className='mapDetailTitle'>¿Dónde vas a estar? <hr className='hrMapDetail' /></h2>
            <h3 className='mapDetailCity'><FaMapMarkedAlt className='mapDetailIcon' />{props.cities}</h3>
            <iframe className='Map' width="600" height="500" id="gmap_canvas" title="Mapa" src={props.map_url} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
    )
}

export default MapDetail;