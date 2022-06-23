import { useCallback } from "react";
import ReservationPost from "../components/Pages/ReservationPage/ReservationPost";
import SignUpAuth from "../components/services/SignUpAuth";

export default function useReservation() {
    const postReservation = useCallback(({ start_time,
        start_date,
        finish_date,
        products,
        users }) => {
        ReservationPost({
            start_time,
            start_date,
            finish_date,
            products,
            users
        })
            .then(() => {
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return {
        postReservation,
    }
}