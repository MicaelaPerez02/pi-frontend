import { useCallback } from "react";
import SignUpAuthService from "../components/services/SignUpAuthService";

export default function useUserSingnUp() {
    const SignUp = useCallback(({ name, surname, username, email, password, city, roles }) => {
        SignUpAuthService({ name, surname, username, email, password, city, roles })
            .then(() => {
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    return {
        SignUp,
    }
}