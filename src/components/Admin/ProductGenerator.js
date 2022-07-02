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

function ProductGeneratorCard(props) {
  const { Images } = useImages();
  const { Cities } = useCities();
  const { Rules } = useRules();
  const { Cancellations } = useCancellations();
  const { Safeties } = useSafeties();
  const { Features } = useFeatures();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [newRule, setNewRule] = useState("");
  const [newCancellation, setNewCancellation] = useState("");
  const [newSafety, setNewSafety] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const [newIcon, setNewIcon] = useState("");
  const [cityName, setCityName] = useState("");

  /*post crear producto, agarro el id en algun lado y se lo seteo a la images post*/

  const handleSubmit = (e) => {
    e.preventDefault();
    Cities({ name });

    Features({
      icon: newIcon,
      description: newFeature
    })

    Rules({
      description: newRule
    });

    Cancellations({
      description: newCancellation
    });

    Safeties({
      description: newSafety
    });

    /* Images({ url }); */
    /*categories: category*/
    /*products: {localStorage.getItem(cityId)}*/
  }

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        <section>
          <GetCategories />
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