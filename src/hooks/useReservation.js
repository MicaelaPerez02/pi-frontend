import {
    useCallback,
    useContext
} from "react";
import ReservationPost from "../components/services/ReservationPost";

export default function useReservation() {

    const Reservation = useCallback(
        (start_time, start_date, finish_date, products, users) => {
            ReservationPost(start_time, start_date, finish_date, products, users);
        }, []
    );
    const ReservationUp = useCallback(({
        start_time,
        start_date,
        finish_date,
        products,
        users
    }) => {
        ReservationPost({
                start_time,
                start_date,
                finish_date,
                products,
                users
            })
            .then(() => {})
            .catch(err => {
                console.error(err);
            })
    }, [])

    return {
        ReservationUp,
        Reservation
    }
}