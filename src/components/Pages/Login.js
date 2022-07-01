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
    const { login, isLogged } = useUser();
    const { data, isLoaded } = useFetchAuth(`/users/allUsers`);

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

        localStorage.removeItem("buttonReservationClick");
    }

    const handleLogin = (e) => {
        login({ email, password });
        // if (localStorage.getItem("user")) {
        localStorage.setItem("username", JSON.stringify(email));
        localStorage.setItem("avatar", JSON.stringify(email[0].toUpperCase()));
        // }
        navigate("/");
        e.preventDefault();
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            {email.length < 500 ? <HeaderLogin /> : <Header username={email} />}
            <div className="componentContainer">
                <h1 className='titleForm'>Iniciar sesión</h1>
                <form className="formContainer" onChange={validationLogin}>
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
                        <input type={state ? "text" : "password"} name="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="buttonForm" onClick={toggleBtn}>
                            {state ? <AiOutlineEye className="iconEyeBlind" /> : <AiOutlineEyeInvisible className="iconEyeBlind" />}
                        </button>
                    </section>
                    <section className="buttonContainer">
                        <button className="buttonSubmit" onClick={handleLogin}>Ingresar</button>
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