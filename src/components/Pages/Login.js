import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLogin from "../Header/HeaderLogin";
import LoginError from "./LoginError";
import useUser from "../../hooks/useUser";
import { setAuthToken } from "../Cards/ReservationPage/setAuthToken";
import "../../styles/Components/Login.css";
import "../../styles/Components/Register.css";
import "../../styles/General/Forms.css";
import "../../styles/General/Icons.css";
import "../../styles/General/Elements.css";
import "../../styles/General/Buttons.css";

function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLogged } = useUser();

    const clearButtonClick = () => {
        localStorage.removeItem("buttonReservationClick");
    }

    const [state, setState] = useState(false);

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        console.log(state);
        e.preventDefault();
    }

    const validationLogin = (e) => {
        e.preventDefault();

        login({ username, password });

        localStorage.setItem("username", JSON.stringify(username));
        console.log(localStorage.getItem("username"));

        localStorage.setItem("avatar", JSON.stringify(username[0].toUpperCase()));
        console.log(localStorage.getItem("avatar"));

       /* const token = localStorage.getItem("token");
        if (token) {
            setAuthToken(token);
        }*/

        localStorage.removeItem("buttonReservationClick");
        if (localStorage.getItem("user").length > 5) {
            navigate("/");
        } else {
            alert("Contraseña o usuario invalido");
        }
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);

    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            {username.length < 500 ? <HeaderLogin /> : <Header username={username} />}
            <div className="componentContainer">
                <h1 className='titleForm'>Iniciar sesión</h1>
                <form className="formContainer" onSubmit={validationLogin}>
                    <Link to={'/'}>
                        <FaWindowClose onClick={clearButtonClick} className="iconClose" />
                    </Link>
                    {localStorage.getItem("buttonReservationClick") == "true" ?
                        <LoginError /> : ""}
                    <section>
                        <h5>Usuario</h5>
                        <input type="text" placeholder="Ingrese su usuario" value={username} onChange={onChangeUsername} />
                    </section>
                    <section className="passwordSection">
                        <h5>Contraseña</h5>
                        <input type={state ? "text" : "password"} name="password" placeholder="Ingrese su contraseña" value={password} onChange={onChangePassword} />
                        <button className="buttonForm" onClick={toggleBtn}>
                            {state ? <AiOutlineEye className="iconEyeBlind" /> : <AiOutlineEyeInvisible className="iconEyeBlind" />}
                        </button>
                    </section>
                    <section className="buttonContainer">
                        <button className="buttonSubmit">Ingresar</button>
                    </section>
                </form>
                <section className="createAcountContainer">
                    <p> ¿Aún no tienes cuenta? </p>
                    <Link to="/register">
                        <p className="spanAccountColor">Registrate</p>
                    </Link>
                </section>
            </div>
            <section className="footerContainer">
                <Footer />
            </section>
        </div>
    );
}

export default Login;
