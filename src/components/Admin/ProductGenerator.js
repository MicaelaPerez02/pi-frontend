import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { TbCirclePlus } from "react-icons/tb";
import "../../styles/Components/ProductGenerator.css"
import useCities from '../services/POST cities/useCities';
import CardCities from '../Cards/CardCities';
import useImages from '../services/Post Images/useImages';
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

function ProductGeneratorCard() {
  const { Cities } = useCities();
  const { Images } = useImages();
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
  const [newRating, setNewRating] = useState();
  const [newReview, setReview] = useState(9);
  const [newLocation, setNewLocation] = useState("");
  const [newMapUrl, setNewMapUrl] = useState("");
  const [newWatch, setNewWatch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newImagesUrl, setNewImagesUrl] = useState("");
  const [selectCategories, setSelectCategory] = useState("");
  
  let maxIdFeatures = JSON.parse(localStorage.getItem("maxIdFeatures"));
  let maxIdCities = JSON.parse(localStorage.getItem("maxIdCities"));
  let maxIdCancellation = JSON.parse(localStorage.getItem("maxIdCancellation"));
  let maxIdSafeties = JSON.parse(localStorage.getItem("maxIdSafeties"));
  let maxIdRules = JSON.parse(localStorage.getItem("maxIdRules"));
  let maxIdProduct = JSON.parse(localStorage.getItem("maxIdProduct"));

  function postElements(e) {
    e.preventDefault();

    Cities({
      "name": newCity
    })

    Features({
      "icon": newIcon,
      "description": newFeature,
    })

    Cancellations({
      "description": newCancellation
    })

    Rules({
      "description": newRule,
    })

    Safeties({
      "description": newSafety
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Products({
      address: newAddress,
      rating: newRating,
      review: 3,
      location: newLocation,
      map_url: newMapUrl,
      watch: newWatch,
      title: newTitle,
      description: newDescription,
      url: newUrl,
      categories: {
        id: 3
      },
      features: [{
        "id": maxIdFeatures
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

  function handleImages(e) {
    e.preventDefault();

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
      <GetProducts />
      <form className="categoryContainerCreator">
        <section className='categoryContainerCreator'>
          <fieldset>
            <legend>Crear propiedad</legend>
            <label>Nombre de la propiedad</label>
            <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
            <label>Dirección</label>
            <input type="text" value={newAddress} onChange={e => setNewAddress(e.target.value)} />
            <label>Puntación (número 1 al 5)</label>
            <input type="text" value={newRating} onChange={e => setNewRating(e.target.value)} />
            <label>¿A qué distancia del centro se encuentra?</label>
            <input type="text" value={newLocation} onChange={e => setNewLocation(e.target.value)} />
            <label>Link del mapa de API</label>
            <input type="url" value={newMapUrl} onChange={e => setNewMapUrl(e.target.value)} />
            <label>Link del mapa</label>
            <input type="url" value={newWatch} onChange={e => setNewWatch(e.target.value)} />
            <label>Link de imágen de portada</label>
            <input type="url" value={newUrl} onChange={e => setNewUrl(e.target.value)} />
            <label>Descripción</label>
            <input type="text" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
          </fieldset>
        </section>

      
        <section>
          <GetCategories
            onChange={e => setSelectCategory(e.target.value)}
          />
        </section>

        <section>
          <fieldset>
            <legend>Elegir ciudad</legend>
            <CardCities />
            <GetCities />
            <label>Ingresar otra</label>{
              setNewCity === "" ? setNewCity(localStorage.getItem("cities"))
                :
                <input value={newCity} onChange={e => setNewCity(e.target.value)} name="text" placeholder="Ingrese la ciudad de la propiedad" />
            }
          </fieldset>
        </section>

        <section>
          <GetFeatures />
          <fieldset>
            <legend>Agregar atributos</legend>
            <label>Ingresar descripción</label>
            <input type="text" value={newFeature} onChange={e => setNewFeature(e.target.value)} name="text" placeholder="Nombre" />
            <label>Ingresar nombre de Icono</label>
            <input type="text" value={newIcon} onChange={e => setNewIcon(e.target.value)} name="text" placeholder="Icono" />
          </fieldset>
        </section>

        <section>
          <GetRules />
          <fieldset>
            <legend>Elegir reglas</legend>
            <label>Ingresar otra</label>
            <input type="text" value={newRule} onChange={e => setNewRule(e.target.value)} name="text" placeholder="Escriba aquí" />
          </fieldset>
        </section>

        <section>
          <GetSafeties />
          <fieldset>
            <legend>Elegir salud y seguridad</legend>
            <label>Ingresar otra</label>
            <input type="text" value={newSafety} onChange={e => setNewSafety(e.target.value)} name="text" placeholder="Escriba aquí" />
          </fieldset>
        </section>

        <section>
          <GetCancellations />
          <fieldset>
            <legend>Elegir políticas de cancelación </legend>
            <label>Ingresar otra</label>
            <input type="text" value={newCancellation} onChange={e => setNewCancellation(e.target.value)} name="text" placeholder="Escriba aquí" />
          </fieldset>
        </section>

        <button onClick={postElements}>Crear</button>
      </form>

      <form>
        <fieldset>
          <legend>Cargar imágenes</legend>
          <input type="url" value={newImagesUrl} onChange={e => setNewImagesUrl(e.target.value)} placeholder="Insertar url de la imágen" />
        </fieldset>
        <TbCirclePlus className='iconPlusProduct' />
        <button onClick={handleImages}>Cargar imagenes</button>
      </form>

      <button className='buttonCreateProd' onClick={handleSubmit}>Crear producto</button>
      <Footer />
    </>
  )
}

export default ProductGeneratorCard;