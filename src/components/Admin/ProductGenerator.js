import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { TbCirclePlus } from "react-icons/tb";
import "../../styles/Components/ProductGenerator.css"
import useCities from '../services/Post Cities/useCities';
import useFeatures from '../services/Post Features/useFeatures';
import GetFeatures from '../services/Getters/GetFeatures';
import GetCategories from '../services/Getters/GetCategories';
import useRules from '../services/Post Rules/useRules';
import useCancellations from '../services/Post Cancellations/useCancellations';
import useSafeties from '../services/Post Safeties/useSafeties';
import useProducts from '../services/Post Products/useProducts';
import GetRules from '../services/Getters/GetRules';
import GetSafeties from '../services/Getters/GetSafeties';
import GetCancellations from '../services/Getters/GetCancellations';
import GetCities from '../services/Getters/GetCities';
import GetProducts from '../services/Getters/GetProducts';
import { GoChevronLeft } from "react-icons/go";
import { FaRandom } from 'react-icons/fa';

function ProductGeneratorCard() {
  const { Cities } = useCities();
  const { Rules } = useRules();
  const { Cancellations } = useCancellations();
  const { Safeties } = useSafeties();
  const { Features } = useFeatures();
  const { Products } = useProducts();
  const [newCity, setNewCity] = useState("");
  const [newRule, setNewRule] = useState("");
  const [newCancellation, setNewCancellation] = useState("");
  const [newSafety, setNewSafety] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const [newIcon, setNewIcon] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newReview, setReview] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newMapUrl, setNewMapUrl] = useState("");
  const [newWatch, setNewWatch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newLongDescription, setNewLongDescription] = useState("");

  let categorySel = JSON.parse(localStorage.getItem("categoryId"));
  let maxIdFeatures = JSON.parse(localStorage.getItem("maxIdFeatures"));
  let maxIdCities = JSON.parse(localStorage.getItem("maxIdCities"));
  let maxIdCancellation = JSON.parse(localStorage.getItem("maxIdCancellation"));
  let maxIdSafeties = JSON.parse(localStorage.getItem("maxIdSafeties"));
  let maxIdRules = JSON.parse(localStorage.getItem("maxIdRules"));

  const random = Math.floor(Math.random() * 8);;

  function postElements(e) {
    e.preventDefault();

    Cities({
      "name": newCity
    })

    Features({
      "icon": newIcon,
      "description": newFeature
    })

    Cancellations({
      "description": newCancellation
    })

    Rules({
      "description": newRule
    })

    Safeties({
      "description": newSafety
    })
  }

  const handleSubmit = (e) => {
    Products({
      address: newAddress,
      rating: 5,
      review: newReview,
      location: newLocation,
      map_url: newMapUrl,
      watch: newWatch,
      title: newTitle,
      description: newDescription,
      long_description: newLongDescription,
      url: newUrl,
      categories: {
        id: categorySel
      },
      features: [{
        "id": maxIdFeatures
      }, {
        "id": 3
      }, {
        "id": 2
      }],
      cities: {
        "id": maxIdCities
      },
      cancellations: [{
        "id": maxIdCancellation
      }],
      rules: [{
        "id": maxIdRules
      }],
      safeties: [{
        "id": maxIdSafeties
      }]
    })
  }

  return (
    <>
      <Header />
      <div className="formContainerProductGenerator">
        <GetProducts />
        <section className='subHeader'>
          <h1>Administración</h1>
          <Link to="/">
            <p className='hidden'>Volver atras</p>
            <GoChevronLeft className='iconArrowBack' />
          </Link>
        </section>
        <h2>Crear propiedad</h2>
        <form className='formCreateProduct'>
          <fieldset className='fieldsetCreateProduct'>
            <legend>Datos de la propiedad</legend>
            <section className='infoCreateProdContainer'>
              <div>
                <label>Nombre de la propiedad</label>
                <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                <label>Dirección</label>
                <input type="text" value={newAddress} onChange={e => setNewAddress(e.target.value)} />
                <label>Puntación (Número del 1 al 5)</label>
                <input type="text" value={newRating} onChange={e => setNewRating(e.target.value)} />
                <label>Descripción completa</label>
                <input type="text" className='descriptionInput' value={newLongDescription} onChange={e => setNewLongDescription(e.target.value)} />
              </div>
              <div>
                <label>¿A qué distancia del centro se encuentra?</label>
                <input type="text" value={newLocation} onChange={e => setNewLocation(e.target.value)} />
                <label>Link del mapa de API</label>
                <input type="url" value={newMapUrl} onChange={e => setNewMapUrl(e.target.value)} />
                <label>Link del mapa</label>
                <input type="url" value={newWatch} onChange={e => setNewWatch(e.target.value)} />
                <label>Pequeño resúmen</label>
                <input type="text" className='descriptionInput' value={newDescription} onChange={e => setNewDescription(e.target.value)} />
              </div>
            </section>
            <label>Link de imágen de portada</label>
            <input type="url" value={newUrl} onChange={e => setNewUrl(e.target.value)} />
          </fieldset>

          <div className='categoryAndCityContainer'>
            <section>
              <fieldset className='fieldsetCreateProduct'>
                <GetCategories />
              </fieldset>
            </section>

            <section>
              <fieldset className='fieldsetCreateProduct'>
                <legend>Elegir ciudad</legend>
                <GetCities />
                <label>Ingresar otra</label>
                <input value={newCity} onChange={e => setNewCity(e.target.value)} name="text" placeholder="Ingrese la ciudad de la propiedad" />
                {newCity === null || newCity === "" ? maxIdCities = JSON.parse(localStorage.getItem('cityId')) : console.log(newCity)}
              </fieldset>
            </section>
          </div>

          <section className='featureCreateContainer'>

            <fieldset className='fieldsetCreateProduct'>
              <legend>Crea tu propia característica</legend>
              <GetFeatures />
              {newFeature === null || newFeature === "" ? maxIdFeatures = JSON.parse(localStorage.getItem('featureId')) : console.log(newFeature)}
              <section className='featureCreateSection'>
                <div className='featureCreateInfoDiv'>
                  <label>Ingresar descripción</label>
                  <input type="text" value={newFeature} onChange={e => setNewFeature(e.target.value)} name="text" placeholder="Nombre" />
                  <label>Ingresar nombre de Icono</label>
                  <input type="text" value={newIcon} onChange={e => setNewIcon(e.target.value)} name="text" placeholder="Icono" />
                </div>

                <div className="featureCreateIcon">
                  <TbCirclePlus className='iconPlusProduct' />
                </div>
              </section>
            </fieldset>
          </section>

          <div className='createRulesSafetiesCancellContainer'>
            <section>
              <fieldset className='fieldsetCreateProduct'>
                <GetRules />
                <legend>Elegir reglas</legend>
                <label>Crea tu propia regla</label>
                <input type="text" value={newRule} onChange={e => setNewRule(e.target.value)} name="text" placeholder="Escriba aquí" />
              </fieldset>
            </section>

            <section>
              <fieldset className='fieldsetCreateProduct'>
                <GetSafeties />
                <legend>Elegir información sobre salud y seguridad</legend>
                <label>Crea tu información de salud y seguridad</label>
                <input type="text" value={newSafety} onChange={e => setNewSafety(e.target.value)} name="text" placeholder="Escriba aquí" />
              </fieldset>
            </section>

            <section>
              <fieldset className='fieldsetCreateProduct'>
                <GetCancellations />
                <legend>Elegir políticas de cancelación </legend>
                <label>Crea tu propia política de cancelación</label>
                <input type="text" value={newCancellation} onChange={e => setNewCancellation(e.target.value)} name="text" placeholder="Escriba aquí" />
              </fieldset>
            </section>
          </div>
          <button className='buttonCreate' onClick={postElements}>Guardar información</button>
        </form>

        <Link to="/product/addProduct/images">
          <button className='buttonCreateAll' onClick={handleSubmit}>Crear producto</button>
        </Link>

      </div>
      <Footer />
    </>
  )
}

export default ProductGeneratorCard;