import {
    useContext
} from "react";
import Context from "./userContext";
const API_URL = "http://localhost:8080";

export default function ReservationPost({
    start_time,
    start_date,
    finish_date,
    products,
    users,
}) {
    const authToken = JSON.parse(localStorage.getItem("user"));

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
                products: {
                    id: 2,
                },
                users: {
                    id: 7,
                },
            }),
        })
        .then((res) => {
            if (res.status !== 200)
                throw new Error(
                    "Lo sentimos, la reserva no pudo ser registrada. Intentelo más tarde" +
                    res.status,
                    console.log(authToken)
                );
            return res.json();
        })
        .then((res) => console.log(res));
}