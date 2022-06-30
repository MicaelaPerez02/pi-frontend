import React from 'react';
import useFetchAuth from '../../hooks/useFetchAuth';

function MyBookings() {
  const { data, isLoaded } = useFetchAuth("/bookings/allBookings");

  const bookingsList = data.map((bookings) => {
    if (bookings.users.id == localStorage.getItem("userId")) {
      return (
        <>
          <p>{bookings.start_time}</p>
          <p>{bookings.start_date}</p>
          <p>{bookings.finish_date}</p>
          <p>{bookings.products.title}</p>
        </>
      )
    }
  });


  return (
    <div>
      {isLoaded ? bookingsList : <p>Cargando</p>}
    </div>

  )
}

export default MyBookings;