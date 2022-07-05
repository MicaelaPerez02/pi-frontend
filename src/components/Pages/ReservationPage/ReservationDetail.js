import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import CalendarDetail from "../../ProductInfo/CalendarDetail";
import CalendarDetailResponsive from "../../ProductInfo/CalendarDetailResponsive";
import DropdownHours from "./DropdownHours";
import hours from "../../../utils/hours";
import RulesDetails from "../../ProductInfo/RulesDetails";
import useReservation from "../../../hooks/useReservation";
import ReservationPost from "./ReservationPost";

function ReservationDetail(props) {
  const [value, setValue] = useState(null);
  const [date, setDate] = useState("");
  const [start_time, setStartTime] = useState("10:00:00");
  const [start_date, setStartDate] = useState("2022-06-23 10:00:00");
  const [finish_date, setFinishDate] = useState("2022-06-26 10:00:00");
 
  const { postReservation, isReserved } = useReservation();
  const checkIn = localStorage.getItem("date");
  const checkOut = localStorage.getItem("date2");
  const handleReservation = (e) => {
    e.preventDefault()
    postReservation({
      start_time,
      start_date,
      finish_date,
    
    })
   
  }
  

 



  const clickCalendar = (e) => {
    setDate(prevState => !prevState);
    console.log(date);
    e.preventDefault();
  }

  const removeDates = (e) => {
    localStorage.removeItem("date");
    localStorage.removeItem("date2");
    setDate(prevState => !prevState);
    console.log(date);
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
                  <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    className="inputRes"
                    value={localStorage.getItem('name')}
                  />
                </div>
                <div className="reservationInput">
                  <h5 className="reservationInputTitle">Apellido</h5>
                  <input
                    name="text"
                    placeholder="Ingrese su apellido"
                    className="inputRes"
                    value={localStorage.getItem('surname')}
                  />
                </div>
              </div>
              <div className="reservationDataEmailCity">
                <div className="reservationInput">
                  <h5 className="reservationInputTitle">Correo electrónico</h5>
                  <input
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    className="inputRes"
                    value={localStorage.getItem('email')}
                  />
                </div>
                <div className="reservationInput">
                  <h5 className="reservationInputTitle">Ciudad</h5>
                  <input
                    type="city"
                    placeholder="Ingrese su ciudad"
                    className="inputRes"
                    value={localStorage.getItem('city')}
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
              <CalendarDetailResponsive />
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
                  *props* y *props*
                </p>
              </div>
              <p className="reservationCheckEstimated">
                Indicá tu horario estimado de llegada
              </p>
              <div className="ReservationDropdownHour">
                <DropdownHours
                  options={hours}
                  prompt="Seleccioná tu horario"
                  value={value}
                  onChange={(val) => setValue(val)}
                />
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
                  <span>{checkIn.substring(1, 11)}</span>
                )}
              </div>
              <hr className="hrReservation"></hr>
              <div className="reservationCheckInOutContainer">
                <p className="reservationCheckInOut">Check out </p>
                {checkIn == null ? (
                  <span>Selecciona tu fecha</span>) : (
                  <span>{checkOut.substring(1, 11)}</span>)}
              </div>
              <hr className="hrReservation"></hr>
              <Link to={"/product/" + props.title + "/reservation/success"}>
                <button className="reservationButtonConfirm" onClick={handleReservation}>
                  Confirmar reserva
                </button>
              </Link>
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

export default ReservationDetail;
