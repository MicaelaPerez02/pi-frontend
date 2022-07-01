export default function ReservationPost({
    start_time,
    start_date,
    finish_date,
    products,
    users,
}) {
    const authToken = localStorage.getItem("user");

    return fetch(`http://localhost:8080/bookings/addBooking`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            start_time,
            start_date,
            finish_date,
            products,
            users
        }),
    })
        .then((res) => {
            if (res.status !== 201)
                throw new Error(
                    "Lo sentimos, la reserva no pudo ser registrada. Intentelo más tarde" +
                    res.status,
                );
            return res.json();
        })
        .then((res) => console.log(res));
}