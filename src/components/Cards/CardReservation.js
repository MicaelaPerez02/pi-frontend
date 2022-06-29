import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import CalendarDetail from "../ProductInfo/CalendarDetail";
import CalendarDetailResponsive from "../ProductInfo/CalendarDetailResponsive";
import RulesDetails from "../ProductInfo/RulesDetails";
import useReservation from "../../hooks/useReservation";
import TimePicker from 'react-time-picker';

function CardReservation(props) {
  const [date, setDate] = useState("");
  let navigate = useNavigate();

  const [start_time, setStartTime] = useState("");
  const [start_date, setStartDate] = useState("");
  const [finish_date, setFinishDate] = useState("");
  const [products, setProducts] = useState(localStorage.getItem('idProduct'));
  // const [name, setName] = useState({name}); del atributo que viene del get usuarios 
  // const [surname, setSurname] = useState({surname}); del atributo que viene del get usuarios
  // const [city, setCity] = useState({city}); del atributo que viene del get usuarios
  // const [email, setEmail] = useState({email}); del atributo que viene del get usuarios 
  const { Reservation } = useReservation();

  const handleReservation = () => {
    Reservation({
      start_time,
      start_date,
      finish_date,
      products: {
        id: products
      }
    });
  }

  const checkIn = JSON.parse(localStorage.getItem("date"));
  const checkOut = JSON.parse(localStorage.getItem("date2"));


  const clickCalendar = (e) => {
    setDate(prevState => !prevState);
    setStartDate(checkIn);
    setFinishDate(checkOut);
    e.preventDefault();
  }

  const removeDates = (e) => {
    localStorage.removeItem("date");
    localStorage.removeItem("date2");
    setDate(prevState => !prevState);
    e.preventDefault();
  }

  return (
    <div className="reservationPage">
      <div className="reservationContainer">
        <div className="detailHeaderContainer">
          <div className="detailHeader">
            <p className="detailCategories">{props.categories}</p>
            <strong className="detailTitle">{props.title}</strong>
          </div>
          <Link to="/">
            <div className="detailIconContainer">
              <GoChevronLeft className="detailIcon" />
            </div>
          </Link>
        </div>
      </div>
      <div className="reservationContainerAllFlex">
        <div className="reservationContainerFlex">
          <div className="reservationFormContainer">
            <form className="reservationForm">
              <h4 className="reservationTitle">Tus datos</h4>
              <div className="reservationNameLastName">
                <div className="reservationInput">
                  <h5 className="reservationInputTitle">Nombre</h5>
                  {/*value={name}*/}
                  <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    className="inputRes"
                  />
                </div>
                <div className="reservationInput">
                  <h5 className="reservationInputTitle">Apellido</h5>
                  {/*value={surname} */}
                  <input
                    name="text"
                    placeholder="Ingrese su apellido"
                    className="inputRes"
                  />
                </div>
              </div>
              <div className="reservationDataEmailCity">
                <div className="reservationInput">
                  <h5 className="reservationInputTitle">Correo electrónico</h5>
                  {/*value={email}*/ }
                  <input
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    className="inputRes"
                  />
                </div>
                <div className="reservationInput">
                  <h5 className="reservationInputTitle">Ciudad</h5>
                  {/*value={city}*/ }
                  <input
                    type="city"
                    placeholder="Ingrese su ciudad"
                    className="inputRes"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="reservationCalendar">
            <h4 className="reservationTitleCalendar">
              Seleccioná tu fecha de reserva
            </h4>
            <div className="reservationCalendarOne">
              <CalendarDetail className="reservationCalendarComponent" />
              <div className="reservationCalendarButton">
                <button className='buttonSelectDay' onClick={clickCalendar}>Seleccionar fecha</button>
                <button className='buttonRemoveDay' onClick={removeDates}>Remover fecha</button>
              </div>
            </div>
            <div className="reservationCalendarComponentDouble">
              <CalendarDetailResponsive onChange={setStartDate} value={start_date} />
              <div className="reservationCalendarButton">
                <button className='buttonSelectDay' onClick={clickCalendar}>Seleccionar fecha</button>
                <button className='buttonRemoveDay' onClick={removeDates}>Remover fecha</button>
              </div>
            </div>
          </div>
          <div className="reservationCheckHour">
            <h4 className="reservationCheckHourTitle">Tu horario de llegada</h4>
            <div className="reservationCheckHourBox">
              <div className="reservationCheckInfo">
                <AiOutlineCheckCircle className="reservationIconCheck" />
                <p className="reservationCheckInfo">
                  {" "}
                  Tu habitación va a estar lista para el check-in entre las
                  10 y las 11 PM
                </p>
              </div>
              <p className="reservationCheckEstimated">
                Indicá tu horario estimado de llegada
              </p>
              <div className="ReservationDropdownHour">
                <TimePicker onChange={setStartTime} value={start_time} />
              </div>
            </div>
          </div>
        </div>
        <div className="reservationCardHotel">
          <p className="reservationCardTitle">Detalle de la reserva</p>
          <div className="reservationCardInfo">
            <div className="reservationCardImage">
              <img
                src={props.images}
                alt={props.title}
                className="reservationCardImage"
              />
            </div>
            <div className="reservationCardInfoFlex">
              <p className="reservationCardCategory">{props.categories}</p>
              <p className="reservationCardName">{props.title}</p>
              <span className="reservationRating">
                {Array(props.rating)
                  .fill()
                  .map((_, index) => (
                    <p key={index} className="reservationStars">
                      ⭐
                    </p>
                  ))}
              </span>
              <p className="reservationCities">
                <FaMapMarkerAlt className="productIconMap" />
                {props.cities}
              </p>
              <hr className="hrReservation"></hr>
              <div className="reservationCheckInOutContainer">
                <p className="reservationCheckInOut">Check in </p>
                {checkIn == null ? (
                  <span>Selecciona tu fecha</span>) : (
                  <span>{checkIn.substring(0, 10)}</span>
                )}
              </div>
              <hr className="hrReservation"></hr>
              <div className="reservationCheckInOutContainer">
                <p className="reservationCheckInOut">Check out </p>
                {checkIn == null ? (
                  <span>Selecciona tu fecha</span>) : (
                  <span>{checkOut.substring(0, 10)}</span>)}

              </div>
              <hr className="hrReservation"></hr>

              <button className="reservationButtonConfirm" onClick={handleReservation}>
                Confirmar reserva
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className="reservationRules">
        <RulesDetails />
      </div>
    </div >
  );
}

export default CardReservation;
