import { useCallback, useContext } from "react";
import Context from "../components/services/userContext";
import LoginAuth from "../components/services/LoginAuth";

export default function useUser(){
    const {jwt, setJWT } = useContext(Context)

    const login = useCallback(({username, password} ) => {
        LoginAuth({username, password})
        .then (jwt => {
            console.log(jwt);
            setJWT(jwt)
        })
        .catch(err => {
            console.error(err)
        })
    },[setJWT])

    const logOut = useCallback (( )=>{
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        login,
        logOut

    }
}