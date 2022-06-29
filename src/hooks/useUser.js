import { useCallback, useContext } from "react";
import Context from "../components/services/userContext";
import LoginAuthService from "../components/services/LoginAuthService";

export default function useUser(){
    const {jwt, setJWT } = useContext(Context);

    const login = useCallback(({email, password} ) => {
        LoginAuthService({email, password})
        .then (jwt => {
            console.log(jwt);
            localStorage.setItem("user", JSON.stringify(jwt));
            setJWT(jwt);
        })
        .catch(err => {
            console.error(err);
        })
    },[setJWT])

    const logOut = useCallback (( )=>{
        setJWT(null);
        localStorage.setItem("user",null);
    }, [setJWT])

    return {
        isLoggedIn: Boolean(jwt),
        login,
        logOut
    }
}