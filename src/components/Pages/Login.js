import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import Context from "../services/userContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLogin from "../Header/HeaderLogin";
import LoginError from "./LoginError";
import useUser from "../../hooks/useUser";
import "../../styles/Login.css";
import "../../styles/Forms.css";
import "../../styles/Icons.css";
import "../../styles/Elements.css";
import "../../styles/Buttons.css";

function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLogged } = useUser();
    const { jwt, setJWT } = useContext(Context);

    const clearButtonClick = () => {
        localStorage.removeItem("buttonReservationClick");
    }

    const [state, setState] = useState(false);

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        console.log(state);
        e.preventDefault();
    }

    const validationLogin = () => {
        if (jwt.length > 10) {
            localStorage.setItem("username", JSON.stringify(username));
            console.log(localStorage.getItem("username"));

            localStorage.setItem("avatar", JSON.stringify(username[0].toUpperCase()));
            console.log(localStorage.getItem("avatar"));
            navigate("/");
        } else {
            alert("Contraseña o usuario invalido");
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();

        login({ username, password });

        localStorage.removeItem("buttonReservationClick");
    };

    return (
        <div>
            {username.length < 500 ? <HeaderLogin /> : <Header username={username} />}
            <div className="componentContainer">
                <h1 className='titleForm'>Iniciar sesión</h1>
                <form className="formContainer" onSubmit={handleLogin}>
                    <Link to={'/'}>
                        <FaWindowClose onClick={clearButtonClick} className="iconClose" />
                    </Link>
                    {localStorage.getItem("buttonReservationClick") == "true" ?
                        <LoginError /> : ""}
                    <section>
                        <h5>Usuario</h5>
                        <input type="text" placeholder="Ingrese su usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </section>
                    <section className="passwordSection">
                        <h5>Contraseña</h5>
                        <input type={state ? "text" : "password"} name="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="buttonForm" onClick={toggleBtn}>
                            {state ? <AiOutlineEye className="iconEyeBlind" /> : <AiOutlineEyeInvisible className="iconEyeBlind" />}
                        </button>
                    </section>
                    <section className="buttonContainer">
                        <button className="buttonSubmit" onClick={validationLogin}>Ingresar</button>
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
