import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useImages from '../services/Post Images/useImages';
import { TbCirclePlus } from 'react-icons/tb';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function UploadImages() {
    const [newImagesUrl, setNewImagesUrl] = useState("");
    const { Images } = useImages();
    let maxIdProduct = JSON.parse(localStorage.getItem("maxIdProduct"));

    function handleImages(e) {
        Images({
            "url": newImagesUrl,
            "products": {
                "id": maxIdProduct
            }
        })
    }

    return (
        <>
            <Header />
            <section className="imagesCreateContainer">
                <form className='formCreateImages'>
                    <fieldset className='fieldsetCreateImage'>
                        <legend>Cargar imágenes</legend>
                        <input type="url" value={newImagesUrl} onChange={e => setNewImagesUrl(e.target.value)} placeholder="Insertar url de la imágen" />
                        <div>
                            <TbCirclePlus className='iconPlusProduct' />
                        </div>
                    </fieldset>

                    <Link to="/product/addProduct/success">
                        <button className='buttonCreate' onClick={handleImages}>Cargar imagenes</button>
                    </Link>
                </form>
                <Footer />
            </section>
        </>
    )
}

export default UploadImages;