import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Register.css";
import "../Header/HeaderRegister";
import "../../styles/Header.css";
import Footer from "../Footer/Footer";
import "../../styles/Footer.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HeaderRegister from "../Header/HeaderRegister";
import useUserSignUp from "../../hooks/useUserSignUp";


function Register() {
    const [state, setState] = useState(false);
    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        e.preventDefault();
    }

    const [state1, setState1] = useState(false);
    const toggleBtn2 = (e) => {
        setState1(prevState => !prevState);
        e.preventDefault();
    }

    const { register, formState: { errors }, getValues, handleSubmit } = useForm();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("")

    const { SignUp, isSigned } = useUserSignUp();

    const handleSignUp = (e) => {
        e.preventDefault()
        SignUp({ name, surname, username, email, password, city })
    }

    return (
        <>
            <HeaderRegister />
            <div className="register_container">
                <form className="form_register" onSubmit={handleSignUp} >
                    <Link to={'/'} style={{ textDecoration: "none" }}>
                        <FaWindowClose className="iconCloseLogin" />
                    </Link>
                    <h1 className="form_title">Crear Cuenta</h1>

                    <div className="container-fullName">
                        <div>
                            <h4 className="inputFullName">Nombre</h4>
                            <input value={name} onChange={(e) => setName(e.target.value)} className="input_f" type="text" placeholder="Nombre" />
                            {errors.nombre && <span className="errors">{errors.nombre.message}</span>}
                        </div>
                        <div>
                            <h4 className="inputFullName">Apellido</h4>
                            <input value={surname} onChange={(e) => setSurname(e.target.value)} className="input_f" type="text" placeholder="Apellido" />
                            {errors.apellido && <span className="errors">{errors.apellido.message}</span>}
                        </div>
                    </div>
                    <div className="container-fullName">
                        <div>
                            <h4 className="inputFullName">Nombre de usuario</h4>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} className="input_f" type="text" placeholder="Nombre de usuario" />
                            {errors.nombre && <span className="errors">{errors.nombre.message}</span>}
                        </div>
                        <div>
                            <h4 className="inputFullName">Ciudad</h4>
                            <input value={city} onChange={(e) => setCity(e.target.value)} className="input_f" type="text" placeholder="Ciudad" />
                            {errors.apellido && <span className="errors">{errors.apellido.message}</span>}
                        </div>


                    </div>

                    <h4 className="input_text">Email</h4>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="input" type="email" placeholder="ejemplo@gmail.com" />
                    {errors.email && <span className="errors">{errors.email.message}</span>}
                    <h4 className="input_text">Contraseña</h4>
                    <div className="inputWrapper">
                        <input className="input" type={state ? "text" : "password"} name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn-icon-reg" onClick={toggleBtn}>
                            {state ? <AiOutlineEye className="icon-eyeBlind-reg" /> : <AiOutlineEyeInvisible className="icon-eyeBlind-reg" />}
                        </button>

                    </div>
                    {errors.password && (<span className="errors">{errors.password.message}</span>)}
                    <h4 className="input_text">Confirmar contraseña </h4>
                    <div className="inputWrapper">
                        <input className="input" type={state1 ? "text" : "password"} placeholder="Password"
                        />
                        <button className="btn-icon-reg" onClick={toggleBtn2}>
                            {state1 ? <AiOutlineEye className="icon-eyeBlind-reg" /> : <AiOutlineEyeInvisible className="icon-eyeBlind-reg" />}
                        </button>

                    </div>
                    {errors.passwordConfirmation && (<span className="errors">{errors.passwordConfirmation.message}</span>
                    )}

                    <div className="btn_register">
                        <input type="submit" value="Crear Cuenta" />
                    </div>
                    <p className="text_register_register">
                        ¿Ya tienes cuenta?{" "}
                        <Link to="/login" className="btn_register_link">
                            Inicia Sesión
                        </Link>
                    </p>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Register;
