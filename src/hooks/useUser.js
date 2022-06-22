import { useCallback, useContext } from "react";
import Context from "../components/services/userContext";
import RegisterUser from "../components/services/RegisterUser";
import LoginAuth from "../components/services/LoginAuth";

export default function useUser() {
    const { jwt, setJWT } = useContext(Context)

    const registerUser = useCallback(({ name, surname, username, email, password, city, role }) => {
        RegisterUser({ name, surname, username, email, password, city, role })
            .then(jwt => {
                console.log(jwt);
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const login = useCallback(({ username, password }) => {
        LoginAuth({ username, password })
            .then(jwt => {
                console.log(jwt);
                localStorage.setItem("user", JSON.stringify(jwt))
                setJWT(jwt)
            })
            .catch(err => {
                console.error(err)
            })
    }, [setJWT])

    const logOut = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return {
        isLoggedIn: Boolean(jwt),
        login,
        registerUser,
        logOut
    }
}