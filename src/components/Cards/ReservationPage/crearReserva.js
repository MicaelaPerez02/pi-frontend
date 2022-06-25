export default async function crearReserva(reservaData, jwt) {
    const payload = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + jwt
        },
        body: JSON.stringify(reservaData)
    }
    // const response = await fetch(`${process.env.REACT_APP_URL}/reserva`, payload);
    const response = await fetch("http://3.133.114.51:8086/bookings/addBooking", payload);
    const reserva = await response.json();

    return { response, reserva }
}