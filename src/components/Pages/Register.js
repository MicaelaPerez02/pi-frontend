import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import HeaderRegister from "../Header/HeaderRegister";
import useUserSignUp from "../../hooks/useUserSignUp";
import "../../styles/Register.css";
import "../../styles/Forms.css";
import "../../styles/Icons.css";
import "../../styles/Elements.css";
import "../../styles/Buttons.css";

function Register() {
    const [state, setState] = useState(false);
    const [state1, setState1] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        e.preventDefault();
    }

    const toggleBtnConfirm = (e) => {
        setState1(prevState => !prevState);
        e.preventDefault();
    }

    const { SignUp, isSigned } = useUserSignUp();

    const handleSignUp = (e) => {
        e.preventDefault();
        SignUp({ name, surname, username, email, password, city })
    }

    return (
        <div className="registerContainer">
            <HeaderRegister />
            <div className="componentContainer">
                <h1 className="titleForm">Crear Cuenta</h1>
                <form className="formContainer">
                    <Link to='/'>
                        <FaWindowClose className="iconClose" />
                    </Link>
                    <div className="sectionFormContainer">
                        <section>
                            <h5>Nombre</h5>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Ingrese su nombre" />
                        </section>
                        <section>
                            <h5>Apellido</h5>
                            <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" placeholder="Ingrese su apellido" />
                        </section>
                    </div>
                    <div className="sectionFormContainer">
                        <section>
                            <h5>Nombre de usuario</h5>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Ingrese un nombre de usuario" />
                        </section>
                        <section>
                            <h5>Ciudad</h5>
                            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Ingrese su ciudad" />
                        </section>
                    </div>
                    <div className="sectionFormContainerTwo">
                        <section>
                            <h5>Email</h5>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Ingrese su email" />
                        </section>
                        <section>
                            <h5>Contraseña</h5>
                            <input type={state ? "text" : "password"} name="password" placeholder="Ingrese una contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="buttonForm" onClick={toggleBtn}>
                                {state ? <AiOutlineEye className="iconEyeBlind" /> : <AiOutlineEyeInvisible className="iconEyeBlind" />}
                            </button>
                        </section>
                        <section>
                            <h5>Confirmar contraseña </h5>
                            <input type={state1 ? "text" : "password"} placeholder="Confirme la contraseña" />
                            <button className="buttonForm" onClick={toggleBtnConfirm}>
                                {state1 ? <AiOutlineEye className="iconEyeBlind" /> : <AiOutlineEyeInvisible className="iconEyeBlind" />}
                            </button>
                        </section>
                    </div>
                </form>
                <section className="buttonContainer">
                    <Link to="/login">
                        <button className="buttonSubmit" onClick={handleSignUp}>Crear cuenta</button>
                    </Link>
                </section>
                <section className="createAcountContainer">
                    <p> ¿Ya tienes una cuenta? </p>
                    <Link to="/login">
                        <p className="spanAccountColor">Inicia sesión</p>
                    </Link>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
