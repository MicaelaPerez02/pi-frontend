import React from 'react';
import useFetchAuth from '../../hooks/useFetchAuth';

function Profile() {
  const { data, isLoaded } = useFetchAuth("/bookings/allBookings");

  const bookingsList = data.map((bookings) => {
    return (
      <>
        <p>{bookings.start_time}</p>
        <p>{bookings.start_date}</p>
        <p>{bookings.finish_date}</p>
        <p>{bookings.products.title}</p>
        <p>{bookings.users.id}</p>
        <p>{bookings.users.username}</p>
      </>
    )
  });


  return (
    <div>
      {isLoaded ? bookingsList : <p>Cargando</p>}
    </div>

  )
}

export default Profile;