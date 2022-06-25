import { useContext } from "react";
import Context from "./userContext";
const API_URL = "http://3.133.114.51:8086";

export default function ReservationPost({ start_time, start_date, finish_date, products, users }) {
    const jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJMaW9NZXNzaSIsImV4cCI6MTY1NjI2MzQyMiwiaWF0IjoxNjU2MTc3MDIyfQ.oWiONSXes44sS1y5szGRXhqO4RS0ef9fCAJRUwedO-w';
    
    return fetch(`${API_URL}/bookings/addBooking`, {
        method: "POST",
        headers: {
            Authentication: 'Bearer ' + jwt
        },
        body: JSON.stringify({
            start_time,
            start_date,
            finish_date,
            products: {
                id: 2,
            },
            users: {
                id: 50,
            }
        })
    })
        .then(res => {
            if (res.status !== 200) throw new Error("Lo sentimos, la reserva no pudo ser registrada. Intentelo más tarde" + res.status);
            return res.json();
        }).then(res => console.log(res));
}