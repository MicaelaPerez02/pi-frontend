import { useCallback } from "react";
import SignUpAuth from "../components/services/SignUpAuth";

export default function useUserSingnUp() {
    const SignUp = useCallback(({ name, surname, username, email, password, city, role }) => {
        SignUpAuth({ name, surname, username, email, password, city, role })
            .then(() => {
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return {
        SignUp,
    }
}