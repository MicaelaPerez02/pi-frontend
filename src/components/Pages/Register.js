import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import HeaderRegister from "../Header/HeaderRegister";
import "../../styles/Components/Register.css";
import "../../styles/General/Forms.css";
import "../../styles/General/Icons.css";
import "../../styles/General/Elements.css";
import "../../styles/General/Buttons.css";
import useUserSingnUp from "../../hooks/useUserSignUp";

function Register() {
    let navigate = useNavigate();
    const [state, setState] = useState(false);
    const [state1, setState1] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");

    const { SignUp, isSigned } = useUserSingnUp();

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        e.preventDefault();
    }

    const toggleBtnConfirm = (e) => {
        setState1(prevState => !prevState);
        e.preventDefault();
    }

    const onChangeName = (e) => {
        setName(e.target.value);
        if (name.length < 2) {
            localStorage.setItem("shortName", true);
        } else {
            localStorage.setItem("shortName", false);
        };
    }

    const onChangeSurname = (e) => {
        setSurname(e.target.value);
        if (surname.length < 2) {
            localStorage.setItem("shortSurname", true);
        } else {
            localStorage.setItem("shortSurname", false);
        };
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        if (username.length < 2) {
            localStorage.setItem("shortUsername", true);
        } else {
            localStorage.setItem("shortUsername", false);
        };
    }
    const onChangeCity = (e) => {
        setCity(e.target.value);
        if (city.length < 2) {
            localStorage.setItem("shortCity", true);
        } else {
            localStorage.setItem("shortCity", false);
        };
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        if (email.length < 3) {
            localStorage.setItem("shortEmail", true);
        } else {
            localStorage.setItem("shortEmail", false);
        };
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        if (password.length < 3) {
            localStorage.setItem("shortPassword", true);
        } else {
            localStorage.setItem("shortPassword", false);
        };
    }


    const handleSignUp = (e) => {
        e.preventDefault();

        localStorage.setItem("password", JSON.stringify(password));
        console.log(localStorage.getItem("password"));

        if ((name && surname && username && email && password && city) !== "") {
            SignUp({ name, surname, username, email, password, city });
            navigate("/login");
        } else {
            alert("Por favor, complete todos los campos.")
        }
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
                            <input value={name} onChange={onChangeName} type="text" placeholder="Ingrese su nombre" />
                            {localStorage.getItem('shortName') === 'true' ?
                                <p className="validationError">El nombre debe tener mínimo 3 caracteres</p> : <p></p>
                            }
                        </section>
                        <section>
                            <h5>Apellido</h5>
                            <input value={surname} onChange={onChangeSurname} type="text" placeholder="Ingrese su apellido" required />
                            {localStorage.getItem('shortSurname') === 'true' ?
                                <p className="validationError">El apellido debe tener mínimo 3 caracteres</p> : <p></p>
                            }
                        </section>
                    </div>
                    <div className="sectionFormContainer">
                        <section>
                            <h5>Nombre de usuario</h5>
                            <input value={username} onChange={onChangeUsername} type="text" placeholder="Ingrese un nombre de usuario" />
                            {localStorage.getItem('shortUsername') === 'true' ?
                                <p className="validationError">El usuario debe tener mínimo 3 caracteres</p> : <p></p>
                            }
                        </section>
                        <section>
                            <h5>Ciudad</h5>
                            <input value={city} onChange={onChangeCity} type="text" placeholder="Ingrese su ciudad" />
                            {localStorage.getItem('shortCity') === 'true' ?
                                <p className="validationError">Ingrese una ciudad válida</p> : <p></p>
                            }
                        </section>
                    </div>
                    <div className="sectionFormContainerTwo">
                        <section>
                            <h5>Email</h5>
                            <input value={email} onChange={onChangeEmail} type="email" placeholder="Ingrese su email" />
                            {localStorage.getItem('shortEmail') === 'true' ?
                                <p className="validationError">Ingrese un email válido</p> : <p></p>
                            }
                        </section>
                        <section>
                            <h5>Contraseña</h5>
                            <input type={state ? "text" : "password"} name="password" placeholder="Ingrese una contraseña" value={password} onChange={onChangePassword} />
                            <button className="buttonForm" onClick={toggleBtn}>
                                {state ? <AiOutlineEye className="iconEyeBlind" /> : <AiOutlineEyeInvisible className="iconEyeBlind" />}
                            </button>
                            {localStorage.getItem('shortPassword') === 'true' ?
                                <p className="validationError">La contraseña debe tener más de 5 caracteres</p> : <p></p>
                            }
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
