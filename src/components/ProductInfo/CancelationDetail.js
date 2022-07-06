import React from 'react';
import { BsFileEarmarkRuled } from 'react-icons/bs';

function CancelationDetail(props) {
    return (
        <>
            <h3 className="rulesDetailSubtitle"><BsFileEarmarkRuled className='rulesIcon'/>Políticas de cancelación</h3>
            <section className='detailFeaturesContainer'>
                {props.cancellations.map((cancellation, index) => (
                    <ul className='detailFeatureUl' key={index}>
                        <li>{cancellation.icon} {cancellation.description}</li>
                    </ul>
                ))}
            </section>
        </>
    )
}

export default CancelationDetail;