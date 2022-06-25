import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import CalendarDetail from "../ProductInfo/CalendarDetail";
import CalendarDetailResponsive from "../ProductInfo/CalendarDetailResponsive";
import DropdownHours from "./ReservationPage/DropdownHours";
import RulesDetails from "../ProductInfo/RulesDetails";
import hours from "../../utils/hours.json";
import useReservation from "../../hooks/useReservation";
import { setAuthToken } from "./ReservationPage/setAuthToken";
import axios from "axios";
import { reservationService } from "./ReservationPage/crearReserva";
import crearReserva from "./ReservationPage/crearReserva";

function CardReservation(props) {
  const [value, setValue] = useState(null);
  const [date, setDate] = useState("");
  /*const [start_time, setStartTime] = useState("");
  const [start_date, setStartDate] = useState("");
  const [finish_date, setFinishDate] = useState("");*/
  let navigate = useNavigate();

  const [start_time, SetStartTime] = useState("10:00:30");
  const [start_date, setStartDate] = useState("probandoooo");
  const [finish_date, setFinishDate] = useState("uno doss");
  const jwt = localStorage.getItem("user");


 /* const handleReserva = async () => {
    if (start_time && start_date && finish_date !== "Default") {
      // POST RESERVA
      const body = {
        start_time: start_time,
        start_date: start_date,
        finish_date: finish_date,
        products: {
          id: "2"
        },
        users: {
          id: "2"
        },
      }
      console.log(jwt);
      const { response } = await crearReserva(body, jwt)
      if (response.status === 200) {
        alert("FUNCIONAAAAAAAAAAAAAAAAAAA")
      } else {
        alert("NO FUNCIONAAAAAAAAA")
      }
    }}

*/

    // const { ReservationUp, isReserved } = useReservation();

    /*const handleReservationUp = (e) => {
      e.preventDefault();
  
        ReservationUp({ start_time, start_date, finish_date });
        navigate("/login");
     
    }*/

    /*const handleSubmit = (start_time, start_date, finish_date, products, users) => {
      const submitPayload = {
        start_time: "10:00:00",
        start_date: "PORfa FUNCIONA",
        finish_date: "PORFA",
        products: {
          "id": 3
        },
        users: {
          "id": 2
        }
      }
  
      axios.post("http://3.133.114.51:8086/bookings/addBooking", submitPayload)
        .then(response => {
          //get token from response
          const token = response.data.token;
  
          //set JWT token to local
          localStorage.setItem("token", token);
  
          //set token to axios common header
          setAuthToken(token);
  
          //redirect user to home page
          window.location.href = '/'
        })
        .catch(err => console.log(err));
      
    };*/

    /* const [reservation, setReservation] = useState({
       start_time: "10:00:00",
       start_date: "PORfa FUNCIONA",
       finish_date: "PORFA",
       products: {
         id: 3
       },
       users: {
         id: 2
       }
     });
   
     const responseSubmit = (response) => {
       if (response === 200) {
         alert("funcionaaaaaaaaaaAAAAAAAA")
       }
     }
   
     const submitForm = (e) => {
       e.preventDefault()
       try {
         reservationService.sendReservation(reservation, token).then(status => responseSubmit(status))
           .catch(error => {
             console.log(error);
             alert("errorrr")
           })
       }
       catch (e) {
         console.log("ERROR" + e);
       }
     }
   */
    const checkIn = localStorage.getItem("date");
    const checkOut = localStorage.getItem("date2");

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
                {/*<Link to={"/product/" + props.title + "/reservation/success"}> */}
                <button className="reservationButtonConfirm" onClick={handleReserva}>
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
