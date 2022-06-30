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
import useFetchAuth from '../../hooks/useFetchAuth';
import "../../styles/Components/Login.css";
import "../../styles/Components/Register.css";
import "../../styles/General/Forms.css";
import "../../styles/General/Icons.css";
import "../../styles/General/Elements.css";
import "../../styles/General/Buttons.css";

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");
    const { login, isLogged } = useUser();


    const clearButtonClick = () => {
        localStorage.removeItem("buttonReservationClick");
    }

    const [state, setState] = useState(false);

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        e.preventDefault();
    }

    const validationLogin = (e) => {
        e.preventDefault();

        login({ email, password });

        localStorage.setItem("email", email);

        localStorage.removeItem("buttonReservationClick");
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleClick = (e) => {
        if (localStorage.getItem("user")) {
            navigate("/");
            localStorage.setItem("username", JSON.stringify(email));
            localStorage.setItem("avatar", JSON.stringify(email[0].toUpperCase()));
        }
    };

    return (
        <div>
            {email.length < 500 ? <HeaderLogin /> : <Header username={email} />}
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
                        <input type="text" placeholder="Ingrese su usuario" value={email} onChange={onChangeEmail} />
                    </section>
                    <section className="passwordSection">
                        <h5>Contraseña</h5>
                        <input type={state ? "text" : "password"} name="password" placeholder="Ingrese su contraseña" value={password} onChange={onChangePassword} />
                        <button className="buttonForm" onClick={toggleBtn}>
                            {state ? <AiOutlineEye className="iconEyeBlind" /> : <AiOutlineEyeInvisible className="iconEyeBlind" />}
                        </button>
                    </section>
                </form>
                <section className="buttonContainer">
                    <button className="buttonSubmit" onClick={handleClick}>Ingresar</button>
                </section>
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