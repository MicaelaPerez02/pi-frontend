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
import useUser from "../../hooks/useUser";

function Register() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [role, setRole] = useState("USER");
    const { registerUser, isRegistered } = useUser();

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

    const handleLogin = (e) => {
        e.preventDefault()
        registerUser({ name, username, password, email, confPassword, city, role })

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
            <HeaderRegister />
            <div className="register_container">
                <form className="form_register" onSubmit={handleLogin} >
                    <Link to={'/'} style={{ textDecoration: "none" }}>
                        <FaWindowClose className="iconCloseLogin" />
                    </Link>
                    <h1 className="form_title">Crear Cuenta</h1>
                    <form className="form_register">
                        <div className="container-fullName">
                            <div>
                                <h4 className="inputFullName">Nombre</h4>
                                <input className="input_f" type="text" placeholder="Nombre"{...register('nombre', {
                                    required: {
                                        value: true,
                                        message: "*Este campo es requerido"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "El campo nombre debe tener menos de 10 caracteres"
                                    }
                                })} value={name} onChange={(e) => setName(e.target.value)} />
                                {errors.nombre && <span className="errors">{errors.nombre.message}</span>}
                            </div>
                            <div>
                                <h4 className="inputFullName">Apellido</h4>
                                <input className="input_f" type="text" placeholder="Apellido" {...register('apellido', {
                                    required: {
                                        value: true,
                                        message: "*Este campo es requerido"
                                    }
                                })} value={surname} onChange={(e) => setSurname(e.target.value)} />
                                {errors.apellido && <span className="errors">{errors.apellido.message}</span>}
                            </div>
                            <div>
                                <h4 className="inputFullName">Nombre de usuario</h4>
                                <input className="input_f" type="text" placeholder="Nombre de usuario"{...register('username', {
                                    required: {
                                        value: true,
                                        message: "*Este campo es requerido"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "El campo nombre debe tener menos de 10 caracteres"
                                    }
                                })} value={username} onChange={(e) => setUsername(e.target.value)} />
                                {errors.nombre && <span className="errors">{errors.nombre.message}</span>}
                            </div>
                            <div>
                                <h4 className="inputFullName">Ciudad</h4>
                                <input className="input_f" type="text" placeholder="Ciudad" {...register('city', {
                                    required: {
                                        value: true,
                                        message: "*Este campo es requerido"
                                    }
                                })} value={city} onChange={(e) => setCity(e.target.value)} />
                                {errors.apellido && <span className="errors">{errors.apellido.message}</span>}
                            </div>
                            <div>
                                <h4 className="inputFullName">Role</h4>
                                <input className="input_f" type="text" placeholder="Ciudad" {...register('role', {
                                    required: {
                                        value: true,
                                        message: "*Este campo es requerido"
                                    }
                                })} value={role} />
                                {errors.apellido && <span className="errors">{errors.apellido.message}</span>}
                            </div>

                        </div>
                        <h4 className="input_text">Email</h4>
                        <input className="input" type="email" placeholder="ejemplo@gmail.com"   {...register("email", {
                            required: {
                                value: true,
                                message: "*Este campo es requerido"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "*El formato del email no es correcto"
                            }
                        })} value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <span className="errors">{errors.email.message}</span>}
                        <h4 className="input_text">Contraseña</h4>
                        <div className="inputWrapper">
                            <input className="input" type={state ? "text" : "password"} name="password" placeholder="Password" {...register("password", {
                                required: {
                                    value: true,
                                    message: "*La contraseña es requerida"
                                },
                                minLength: {
                                    value: 7,
                                    message: "*La contraseña debe tener mas de 6 caracteres"
                                }
                            })} value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="btn-icon-reg" onClick={toggleBtn}>
                                {state ? <AiOutlineEye className="icon-eyeBlind-reg" /> : <AiOutlineEyeInvisible className="icon-eyeBlind-reg" />}
                            </button>
                        </div>
                        {errors.password && (<span className="errors">{errors.password.message}</span>)}
                        <h4 className="input_text">Confirmar contraseña </h4>
                        <div className="inputWrapper">
                            <input className="input" type={state1 ? "text" : "password"} placeholder="Password"  {...register("passwordConfirmation", {
                                required: "*Por favor, confirma la contraseña!",
                                validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "*Las contraseñas no coinciden";
                                    }
                                }
                            })}
                                value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
                            />
                            <button className="btn-icon-reg" onClick={toggleBtn2}>
                                {state1 ? <AiOutlineEye className="icon-eyeBlind-reg" /> : <AiOutlineEyeInvisible className="icon-eyeBlind-reg" />}
                            </button>
                        </div>
                        {errors.passwordConfirmation && (<span className="errors">{errors.passwordConfirmation.message}</span>
                        )}
                    </form>
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
