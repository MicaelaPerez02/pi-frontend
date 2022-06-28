import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { TbCirclePlus } from "react-icons/tb";
import "../../styles/Components/ProductGenerator.css"

function ProductGenerator() {
  return (
    <>
      <Header />
      <div className='productGeneratorContainer'>
        <div className="productGeneratorHeader">
          <p className="detailTitle">Administración</p>
        </div>
        <section className='productGeneratorBody'>
          <form className='formContainer'>
            <p className='prodGeneratorTitle'>Crear propiedad</p>
            <div className="reservationInput">
              <h5 className="reservationInputTitle">Nombre de la propiedad</h5>
              <input
                type="text"
                placeholder="Ingrese el nombre de la propiedad"
                className="inputRes"
              />
            </div>
            <div className="reservationInput">
              <h5 className="reservationInputTitle">Categoría</h5>
              <input
                name="text"
                placeholder="Ingrese la categoría de la propiedad"
                className="inputRes"
              />
            </div>
            <div className="reservationInput">
              <h5 className="reservationInputTitle">Dirección</h5>
              <input
                name="text"
                placeholder="Ingrese la dirección de la propiedad"
                className="inputRes"
              />
            </div>
            <div className="reservationInput">
              <h5 className="reservationInputTitle">Ciudad</h5>
              <input
                name="text"
                placeholder="Ingrese la ciudad de la propiedad"
                className="inputRes"
              />
            </div>
            <div className="reservationInput">
              <h5 className="reservationInputTitle">Descripción</h5>
              <input
                name="text"
                placeholder="Escriba aquí"
                className="inputRes"
              />
            </div>
            <p className='prodGeneratorTitle'>Agregar atributos</p>
            <div className='productAtributesFlex'>
              <section className='productAtributes'>
                <div className="reservationInput">
                  <h5 className="reservationInputTitle">Nombre</h5>
                  <input
                    name="text"
                    placeholder="Nombre del atributo"
                    className="inputRes"
                  />
                </div>
                <div className="reservationInput">
                  <h5 className="reservationInputTitle">Icono</h5>
                  <input
                    name="text"
                    placeholder="Nombre del ícono"
                    className="inputRes"
                  />
                </div>
              </section>
              <TbCirclePlus className='iconPlusProduct' />
            </div>
            <p className='prodGeneratorTitle'>Políticas del producto</p>
            <div className='productAtributesFlex'>
              <section>
                <div className="reservationInput">
                  <h4 className="subtitleProduct">Normas de la casa</h4>
                  <h5 className="reservationInputTitle">Descripción</h5>
                  <input
                    name="text"
                    placeholder="Escriba aquí"
                    className="inputRes"
                  />
                </div>
                <div className="reservationInput">
                  <h4 className="subtitleProduct">Salud y seguridad</h4>
                  <h5 className="reservationInputTitle">Descripción</h5>
                  <input
                    name="text"
                    placeholder="Escriba aquí"
                    className="inputRes"
                  />
                </div>
                <div className="reservationInput">
                  <h4 className="subtitleProduct">Política de cancelación</h4>
                  <h5 className="reservationInputTitle">Descripción</h5>
                  <input
                    name="text"
                    placeholder="Escriba aquí"
                    className="inputRes"
                  />
                </div>
              </section>
            </div>
            <p className='prodGeneratorTitle'>Cargar imágenes</p>
            <div className='productAtributesFlex'>
              <section className='productAtributes'>
                <div className="reservationInput">
                  <input
                    name="text"
                    placeholder="Insertar url de la imágen"
                    className="inputRes"
                  />
                </div>
              </section>
              <TbCirclePlus className='iconPlusProduct' />
            </div>
            <button className='buttonSubmit'>Crear</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ProductGenerator;