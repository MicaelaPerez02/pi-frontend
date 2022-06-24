import { useCallback } from "react";
import ReservationPost from "../components/Cards/ReservationPage/ReservationPost";

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