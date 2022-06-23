

export default async function BookingService(bookingData, jwt) {
    const payload = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImV4cCI6MTY1NjA0Mjk1MCwiaWF0IjoxNjU1OTU2NTUwfQ.5AsZCSnnbkJ297X4TlPJCvVLEEVSxNQoBgtOm1KIoIg',
        },
        body: JSON.stringify(bookingData)
    }
    // const response = await fetch(`${process.env.REACT_APP_URL}/reserva`, payload);
    const response = await fetch("http://localhost:8080/bookings/addBooking", payload);
    const booking = await response.json();

    return { response, booking }
}