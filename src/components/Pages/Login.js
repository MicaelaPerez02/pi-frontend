import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLogin from "../Header/HeaderLogin";
import LoginError from "./LoginError";
import "../../styles/Login.css";
import useUser from "../../hooks/useUser";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLogged } = useUser()

    const clearButtonClick = () => {
        localStorage.removeItem("buttonReservationClick");
    }

    const [state, setState] = useState(false);

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        console.log(state);
        e.preventDefault();

    }

    const handleLogin = (e) => {
        e.preventDefault()
        login({ username, password })

        if (localStorage.getItem("user")) {
            localStorage.setItem("username", JSON.stringify(username));
            console.log(localStorage.getItem("username"));

            localStorage.setItem("avatar", JSON.stringify(username[0].toUpperCase()));
            console.log(localStorage.getItem("avatar"));

            localStorage.removeItem("buttonReservationClick");

        } else {
            console.log("F");
        }




    };


    return (
        <>
            <div className="headerLog2">
                {username.length < 500 ? <HeaderLogin /> : <Header username={username} />}
            </div>
            <div className="login">
                <form className="form_container" onSubmit={handleLogin}>
                    <Link to={'/'} style={{ textDecoration: "none" }}>
                        <FaWindowClose onClick={clearButtonClick} className="iconCloseLogin" />
                    </Link>
                    {localStorage.getItem("buttonReservationClick") == "true" ?
                        <LoginError /> : ""}
                    <h1 className="title">Iniciar sesión</h1>
                    <div className="input1">
                        <h5>Nombre de Usuario</h5>
                        <input type="text" name="userName" placeholder="Ingrese su Nombre de Usuario" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input2">
                        <h5>Contraseña</h5>
                        <input type={state ? "text" : "password"} name="password" placeholder="Ingrese su contraseña" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn-icon" onClick={toggleBtn}>
                            {state ? <AiOutlineEye className="icon-eyeBlind" /> : <AiOutlineEyeInvisible className="icon-eyeBlind" />}
                        </button>
                    </div>
                    <div className="btn-container">

                        <button className="btn_singIn">Ingresar</button>

                    </div>
                    <p className="text_register">
                        ¿Aún no tenes cuenta?{" "}
                        <Link to="/register" className="btn_register_link">
                            Registrate
                        </Link>
                    </p>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Login;
