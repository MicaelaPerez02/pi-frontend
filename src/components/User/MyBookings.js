import React from 'react';
import useFetchAuth from '../../hooks/useFetchAuth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MyBookingCard from './MyBookingCard';
import "../../styles/Components/MyBookings.css"
import MyBookingsEmpty from './MyBookingsEmpty';

function MyBookings() {
  const { data } = useFetchAuth("/bookings/allBookings");

  const bookingsList = data.map((bookings) => {
    if (bookings.users.id === JSON.parse(localStorage.getItem("userId"))) {
      return (
        <MyBookingCard
          id={bookings.id}
          url={bookings.products.url}
          categories={bookings.products.categories.title}
          start_date={bookings.start_date}
          finish_date={bookings.finish_date}
          title={bookings.products.title}
          rating={bookings.products.rating}
          cities={bookings.products.cities.name}
        />
      )
    }
  });



  return (
    <>
      <Header />
      <div className="bookingsContainer">
        <h3 className="title bookingTitle">Mis reservas</h3>
        {bookingsList[0] === undefined ?
          <section className="emptyBookingList"> <MyBookingsEmpty /> </section>
          :
          <section> {bookingsList} </section>}
      </div>
      <Footer />
    </>
  )
}

export default MyBookings;