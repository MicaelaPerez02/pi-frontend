import React from 'react';
import useFetch from '../../hooks/useFetch';
import { BsFileEarmarkRuled } from 'react-icons/bs';

function CancelationDetail() {
    const { data, isLoaded } = useFetch(`/cancellations/allCancellations`);

    const cancellations = data.map((cancel, index) => {
        if (localStorage.getItem('idProduct') == cancel.products.id) {
            return (
                <p>{cancel.description}</p>
            )
        }
    })

    return (
        <>
            <h3 className="rulesDetailSubtitle"><BsFileEarmarkRuled className='rulesIcon' />Políticas de cancelación</h3>
            {cancellations}
        </>
    )
}

export default CancelationDetail;