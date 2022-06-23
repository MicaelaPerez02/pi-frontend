import { useCallback, useContext } from "react";
import Context from "../../services/userContext";
const API_URL = "http://localhost:8080";
export default function ReservationPost({ start_time,
    start_date,
    finish_date,
    users }) {
    const { jwt, setJWT } = useContext(Context)
    return fetch(`${API_URL}/bookings/addBooking`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + jwt
        },
        body: JSON.stringify({

            start_time,
            start_date,
            finish_date,
            products: {
                id: 2
            },
            users: {
                id: 4
            }
        }
        )
    }).then(res => {
        if (!res.ok) throw new Error("Lamentablemente no ha podido reservarse. Por favor intente más tarde");
        return res.json()
    }).then(res => {
        console.log(res);
    })
}

