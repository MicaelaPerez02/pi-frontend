import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { TbCirclePlus } from "react-icons/tb";
import "../../styles/Components/ProductGenerator.css"
import useCities from '../services/POST cities/useCities';
import useFetch from '../../hooks/useFetch';
import CardCities from '../Cards/CardCities';
import useImages from '../services/Post Images/useImages';

function ProductGenerator() {
  const { data, isLoaded } = useFetch(`/categories/allCategories`);
  const { Images } = useImages;
  const { Cities } = useCities();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  /*post crear producto, agarro el id en algun lado y se lo seteo a la images post*/


  const handleSubmit = (e) => {
    e.preventDefault();
    Cities({ name });
    Images({ url });
    /*categories: category*/
    /*products: {localStorage.getItem(cityId)}*/
  }

  const categoryList =
    data.map((category, index) => {
      return (
        <>
          <option value={category.id} key={index}>{category.title}</option>
        </>
      )
    })

  return (
    <>
      <Header />
      <div className='productGeneratorContainer'>
        <div className="productGeneratorHeader">
          <p className="detailTitle">Administración</p>
        </div>
        <section className='productGeneratorBody'>
          <form className='formContainerProductGenerator'>
            <p className='prodGeneratorTitle'>Crear propiedad</p>
            <div className='prodGeneratorInputFlex'>
              <section>
                <div className="inputProdGenerator">
                  <h5 className="inputTitleProdGenerator">Nombre de la propiedad</h5>
                  <input
                    type="text"
                    placeholder="Ingrese el nombre de la propiedad"
                    className="inputProdGenerator"
                  />
                </div>
                <div className="inputProdGenerator">
                  <h5 className="inputTitleProdGenerator">Categoría</h5>
                  <select id="category" name="category" className='form_select'
                    value={category} onChange={e => setCategory(e.target.value)}>
                    <option className="form_option" hidden >Selecciona la categoría</option>
                    <option className="form_option" disabled >Selecciona la categoría</option>
                    {categoryList}
                    {console.log(category)}
                  </select>
                </div>
              </section>
              <section>
                <div className="inputProdGenerator">
                  <h5 className="inputTitleProdGenerator">Dirección</h5>
                  <input
                    name="text"
                    placeholder="Ingrese la dirección de la propiedad"
                    className="inputProdGenerator"
                  />
                </div>
                <div className="inputProdGenerator">
                  <h5 className="inputTitleProdGenerator">Ciudad</h5>
                  <CardCities />
                  <input
                    value={name} onChange={e => setName(e.target.value)}
                    name="text"
                    placeholder="Ingrese la ciudad de la propiedad"
                    className="inputProdGenerator"
                  />
                </div>
              </section>
            </div>
            <div className='sectionLastInput'>
              <div className="inputProdGenerator2">
                <h5 className="inputTitleProdGenerator2">Descripción</h5>
                <input
                  name="text"
                  placeholder="Escriba aquí"
                  className="inputProdGenerator2"
                />
              </div>
            </div>
            <p className='prodGeneratorTitle'>Agregar atributos</p>
            <div className='productAtributesFlex'>
              <section className='productAtributes'>
                <div className="inputProdGenerator">
                  <h5 className="inputTitleProdGenerator">Nombre</h5>
                  <input
                    name="text"
                    placeholder="Nombre del atributo"
                    className="inputProdGenerator"
                  />
                </div>
                <div className="inputProdGenerator">
                  <h5 className="inputTitleProdGenerator">Icono</h5>
                  <input
                    name="text"
                    placeholder="Nombre del ícono"
                    className="inputProdGenerator"
                  />
                </div>
              </section>
              <TbCirclePlus className='iconPlusProduct' />
            </div>
            <p className='prodGeneratorTitle'>Políticas del producto</p>
            <div className='productAtributesFlex'>
              <section>
                <div className="inputProdGenerator">
                  <h4 className="subtitleProduct">Normas de la casa</h4>
                  <h5 className="inputTitleProdGenerator">Descripción</h5>
                  <input
                    name="text"
                    placeholder="Escriba aquí"
                    className="inputProdGenerator"
                  />
                </div>
                <div className="inputProdGenerator">
                  <h4 className="subtitleProduct">Salud y seguridad</h4>
                  <h5 className="inputTitleProdGenerator">Descripción</h5>
                  <input
                    name="text"
                    placeholder="Escriba aquí"
                    className="inputProdGenerator"
                  />
                </div>
                <div className="inputProdGenerator">
                  <h4 className="subtitleProduct">Política de cancelación</h4>
                  <h5 className="inputTitleProdGenerator">Descripción</h5>
                  <input
                    name="text"
                    placeholder="Escriba aquí"
                    className="inputProdGenerator"
                  />
                </div>
              </section>
            </div>
            <button className='buttonSubmit' onClick={handleSubmit}>Crear</button>
          </form>
          <form>
            <p className='prodGeneratorTitle'>Cargar imágenes</p>
            <div className='productAtributesFlex'>
              <section className='productAtributes'>
                <div className="inputProdGenerator">
                  <input
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    name="text"
                    placeholder="Insertar url de la imágen"
                    className="inputProdGenerator"
                  />
                </div>
              </section>
              <TbCirclePlus className='iconPlusProduct' />
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ProductGenerator;