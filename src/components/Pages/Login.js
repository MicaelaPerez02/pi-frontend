import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLogin from "../Header/HeaderLogin";
import LoginError from "./LoginError";
import useUser from "../../hooks/useUser";
import "../../styles/Components/Login.css";
import "../../styles/Components/Register.css";
import "../../styles/General/Forms.css";
import "../../styles/General/Icons.css";
import "../../styles/General/Elements.css";
import "../../styles/General/Buttons.css";
import useFetchAuth from "../../hooks/useFetchAuth";

function Login() {
    const { data, isLoaded } = useFetchAuth(`/users/allUsers`);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useUser();

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
        e.preventDefault();
    }

    return (
        <>
            {email.length < 500 ? <HeaderLogin /> : <Header username={email} />}
            <div className="componentContainerLogin">
                <section>
                    <h1 className='titleFormLogin'>Iniciar sesión</h1>
                    <Link to={'/'}>
                        <p className='hidden'>Icono cerrar sesión</p>
                        <FaWindowClose onClick={clearButtonClick} className="iconClose" />
                    </Link>
                </section>

                <form className="formContainerLogin" onSubmit={validationLogin}>
                    <fieldset>
                        {localStorage.getItem("buttonReservationClick") == "true" ?
                            <LoginError /> : ""}
                        <section>
                            <label for="Email">Email</label>
                            <input id="Email" type="text" placeholder="Ingrese su usuario" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </section>
                        <section className="passwordSection">
                            <label for="Password">Contraseña</label>
                            <input id="Password" type={state ? "text" : "password"} name="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="buttonFormLogin" onClick={toggleBtn}>
                                {state ? <>
                                    <p className="hidden">Boton mostrar contraseña</p>
                                    <AiOutlineEye className="iconEyeBlind" />
                                </> :
                                    <>
                                        <p className="hidden">Boton ocultar contraseña</p>
                                        <AiOutlineEyeInvisible className="iconEyeBlind" />
                                    </>}
                            </button>
                        </section>
                        <section className="buttonAccessAccount">
                            <input type="submit" className="buttonSubmitLogin" value="Ingresar" onClick={handleLogin} />
                        </section>
                    </fieldset>
                </form>

                <section className="loginAccountContainer">
                    <p> ¿Aún no tienes cuenta? </p>
                    <Link to="/register">
                        <p className="spanAccountColorLogin">Registrate</p>
                    </Link>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Login;