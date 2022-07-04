import React from 'react';
import { BsFileEarmarkRuled } from 'react-icons/bs';

function CancelationDetail(props) {
    return (
        <>
            <h3 className="rulesDetailSubtitle"><BsFileEarmarkRuled className='rulesIcon'/>Políticas de cancelación</h3>
            <div className='detailFeaturesContainer'>
                {props.cancellations.map((cancellation, index) => (
                    <ul className='detailFeatureUl' key={index}>
                        <li>{cancellation.icon} {cancellation.description}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default CancelationDetail;