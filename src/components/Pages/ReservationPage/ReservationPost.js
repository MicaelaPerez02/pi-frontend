const API_URL = "http://localhost:8080";
export default function ReservationPost({ start_time,
    start_date,
    finish_date,
    users }) {
    return fetch(`${API_URL}/bookings/addBooking`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            start_time,
            start_date,
            finish_date,
            users
        }
        )

    }).then(res => {
        if (!res.ok) throw new Error("Response is not ok")
        return res.json()
    }).then(res => {
        const { jwt } = res
        return jwt
    })
}

