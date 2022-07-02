import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { TbCirclePlus } from "react-icons/tb";
import "../../styles/Components/ProductGenerator.css"
import useCities from '../services/POST cities/useCities';
import useFetch from '../../hooks/useFetch';
import CardCities from '../Cards/CardCities';
import useImages from '../services/Post Images/useImages';
import useFeatures from '../services/Post Features/useFeatures';
import GetFeatures from '../services/Getters/GetFeatures';
import GetCategories from '../services/Getters/GetCategories';
import useRules from '../services/Post Rules/useRules';
import useCancellations from '../services/Post Cancellations/useCancellations';
import useSafeties from '../services/Post Safeties/useSafeties';
import useProducts from '../services/Post Products/useProducts';

function ProductGeneratorCard() {
  const { Cities } = useCities();
  const { Rules } = useRules();
  const { Cancellations } = useCancellations();
  const { Safeties } = useSafeties();
  const { Features } = useFeatures();
  const { Products } = useProducts();
  const [category, setCategory] = useState(1);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [newRule, setNewRule] = useState("");
  const [newCancellation, setNewCancellation] = useState("");
  const [newSafety, setNewSafety] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const [newIcon, setNewIcon] = useState("");
  const [newAddress, setNewAddress] = useState("Pedro Goyena 946");
  const [newRating, setNewRating] = useState(5);
  const [newReview, setReview] = useState(9);
  const [newLocation, setNewLocation] = useState("A 200m del centro");
  const [newMapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276847!2d-58.383759084813825!3d-34.60373888045945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac5f6f420b3%3A0x3874bd32ee4d4ce3!2sBroadway%20Hotel%20%26%20Suites!5e0!3m2!1ses-419!2sar!4v1656798921587!5m2!1ses-419!2sar");
  const [newWatch, setNewWatch] = useState("https://www.google.com.ar/maps/place/Broadway+Hotel+%26+Suites/@-34.6037389,-58.3837591,17z/data=!4m8!3m7!1s0x95bccac5f6f420b3:0x3874bd32ee4d4ce3!5m2!4m1!1i2!8m2!3d-34.6036576!4d-58.3833274");
  const [newTitle, setNewTitle] = useState("Tuki House");
  const [newDescription, setNewDescription] = useState("Casa equipada con 3 habitaciones, baño, cocina y comedor");
  const [newUrl, setNewUrl] = useState("https://bucket-pig6.s3.us-east-2.amazonaws.com/ProductoNuevo/PORTADAREAL.webp");
  const [selectCategories, setSelectCategory] = useState("");
  /*post crear producto, agarro el id en algun lado y se lo seteo a la images post*/

  const handleSubmit = (e) => {
    e.preventDefault();

    Products({
      address: "Pedro Goyena 946",
      rating: "4",
      review: "9",
      location: "200 m del centro",
      map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276847!2d-58.383759084813825!3d-34.60373888045945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac5f6f420b3%3A0x3874bd32ee4d4ce3!2sBroadway%20Hotel%20%26%20Suites!5e0!3m2!1ses-419!2sar!4v1656798921587!5m2!1ses-419!2sar",
      watch: "https://www.google.com.ar/maps/place/Broadway+Hotel+%26+Suites/@-34.6037389,-58.3837591,17z/data=!4m8!3m7!1s0x95bccac5f6f420b3:0x3874bd32ee4d4ce3!5m2!4m1!1i2!8m2!3d-34.6036576!4d-58.3833274",
      title: "Tuki House",
      description: "Casa equipada con 3 habitaciones, baño, cocina y comedor",
      url: "https://bucket-pig6.s3.us-east-2.amazonaws.com/ProductoNuevo/PORTADAREAL.webp",
      categories: {
        id: 1
      },
      features: [
        {
          "id": 16,
          "icon": newIcon,
          "description": newFeature
        }],
      cities: {
        "id": 1
      },
      rules: [
        {
          "id": 16,
          "description": newRule
        }],
      cancellations: [
        {
          "id": 16,
          "description": newCancellation
        }],
      safeties: [
        {
          "id": 16,
          "description": newSafety
        }]
    })
  }
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="formContainer">
        <section className='categoryContainerCreator'>
          <GetCategories
            onChange={e => setCategory(e.target.value)}
          />
          {console.log(category)}
        </section>

        <section>
          <form>
            <legend>Elegir ciudad</legend>
            <CardCities />
            <label>Ingresar otra</label>{
              setName === "" ? setName(localStorage.getItem("cities"))
                :
                <input value={name} onChange={e => setName(e.target.value)} name="text" placeholder="Ingrese la ciudad de la propiedad" />
            }
          </form>
        </section>

        <section>
          <GetFeatures />
          <form>
            <fieldset>
              <legend>Agregar atributos</legend>
              <label>Ingresar descripción</label>
              <input type="text" value={newFeature} onChange={e => setNewFeature(e.target.value)} name="text" placeholder="Nombre" />
              <label>Ingresar nombre de Icono</label>
              <input type="text" value={newIcon} onChange={e => setNewIcon(e.target.value)} name="text" placeholder="Icono" />
            </fieldset>
          </form>
        </section>

        <section>
          <legend>Elegir reglas</legend>
          <form>
            <label>Ingresar otra</label>
            <input type="text" value={newRule} onChange={e => setNewRule(e.target.value)} name="text" placeholder="Escriba aquí" />
          </form>
        </section>

        <section>
          <legend>Elegir salud y seguridad</legend>
          <form>
            <label>Ingresar otra</label>
            <input type="text" value={newSafety} onChange={e => setNewSafety(e.target.value)} name="text" placeholder="Escriba aquí" />
          </form>
        </section>

        <section>
          <legend>Elegir políticas de cancelación </legend>
          <form>
            <label>Ingresar otra</label>
            <input type="text" value={newCancellation} onChange={e => setNewCancellation(e.target.value)} name="text" placeholder="Escriba aquí" />
          </form>
        </section>

        <button onClick={handleSubmit}>Crear</button>
      </form>

      <form>
        <p>Cargar imágenes</p>
        <div>
          <section>
            <div>
              <input
                value={url}
                onChange={e => setUrl(e.target.value)}
                name="text"
                placeholder="Insertar url de la imágen"
              />
            </div>
          </section>
          <TbCirclePlus className='iconPlusProduct' />
        </div>
      </form>
      <Footer />
    </>
  )
}

export default ProductGeneratorCard;