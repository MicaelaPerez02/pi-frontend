import React from 'react';
import useFetchAuth from '../../hooks/useFetchAuth';

function MyBookings() {
  const { data, isLoaded } = useFetchAuth("/bookings/allBookings");

  const bookingsList = data.map((bookings, index) => {
    if (bookings.users.id == localStorage.getItem("userId")) {
      return (
        <div key={index}>
          <p>{bookings.start_time}</p>
          <p>{bookings.start_date}</p>
          <p>{bookings.finish_date}</p>
          <p>{bookings.products.title}</p>
        </div>
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